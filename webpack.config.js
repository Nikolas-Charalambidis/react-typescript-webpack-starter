const path = require("path");
const webpack = require("webpack");

const fs = require('fs'); // to check if the file exists
const DotEnv = require('dotenv');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer/lib/BundleAnalyzerPlugin");

module.exports = (env) => {

    const currentPath = path.join(__dirname);
    const basePath = currentPath + '/.env';
    const envPath = basePath + '.' + env.ENVIRONMENT;
    const finalPath = fs.existsSync(envPath) ? envPath : basePath;
    const fileEnv = DotEnv.config({ path: finalPath }).parsed;

    // reduce it to a nice object, the same as before (but with the variables from the file)
    const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
        return prev;
    }, {});

    const isProduction = env.ENVIRONMENT === "production" || "production-analyze";
    const isAnalyze = env.ENVIRONMENT === "production-analyze";

    console.log(envKeys)
    console.log(fileEnv);

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
            new webpack.DefinePlugin(envKeys),
            new ForkTsCheckerWebpackPlugin({
                // For the dev server overlay to work
                async: false
            }),
        ].filter(Boolean)
    }
};