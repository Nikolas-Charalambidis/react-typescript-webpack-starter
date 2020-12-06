const path = require("path");
const webpack = require("webpack");

const fs = require('fs'); // to check if the file exists
const DotEnv = require('dotenv');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer/lib/BundleAnalyzerPlugin");

// reduce it to a nice object, the same as before (but with the variables from the file)
const reduceConfigMap = (source) => {
    return Object.keys(source).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(source[next]);
        return prev;
    }, {});
}

module.exports = (env) => {

    console.log("Webpack configuration parameters:", env);
    console.log("Picking the config-map .env file...");

    const dirname = path.join(__dirname);
    const baseEnvFilePath = dirname + '/.env';
    const configuredEnvFilePath = baseEnvFilePath + '.' + env.ENVIRONMENT;
    const envFilePath = fs.existsSync(configuredEnvFilePath) ? configuredEnvFilePath : baseEnvFilePath;
    const envFile = DotEnv.config({ path: envFilePath }).parsed;
    console.log("Picked .env file:", envFilePath);

    console.log("Reducing the config-map parameters from the .env file...");
    const envFileObject = reduceConfigMap(envFile);

    console.log("Reducing the Webpack configuration parameters...")
    const envConfigurationObject = reduceConfigMap(env);

    console.log("Merging to the global environment parameters...")
    const configMap = {...envFileObject, ...envConfigurationObject};

    console.log("Global environment parameters:");
    Object.entries(configMap).forEach(([key, value]) => console.log(" " + key + ": " + value));

    const isProduction = env.ENVIRONMENT === "production";
    const isAnalyze = env.ANALYZE;

    console.log("Running Webpack...");

    return {
        context: __dirname,
        mode: isProduction ? "production" : "development",
        entry: {
            app: "./src/index.tsx"
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: isProduction ? "[name].[contenthash].js" : "[name].[hash].js"
        },
        devtool: isProduction ? "source-map" : "eval-source-map",
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            port: 8080,
            hot: true,
            historyApiFallback: true,
            overlay: true,
            stats: "minimal",
            disableHostCheck: true
        },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        },
        optimization: {
            splitChunks: {
                chunks: "all",
            }
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    loader: "ts-loader",
                    options: {
                        // We use ForkTsCheckerWebpackPlugin for typechecking
                        transpileOnly: true
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings injected in our index.html
                        isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader"
                    ]
                }
            ]
        },
        plugins: [
            isProduction ? false : new webpack.HotModuleReplacementPlugin(),
            isAnalyze ? new BundleAnalyzerPlugin() : false,
            new HtmlWebpackPlugin({template: "index.html"}),
            new MiniCssExtractPlugin(),
            new webpack.DefinePlugin(configMap),
            new ForkTsCheckerWebpackPlugin({
                // For the dev server overlay to work
                async: false
            }),
        ].filter(Boolean)
    }
};