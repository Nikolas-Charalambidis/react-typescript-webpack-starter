const path = require("path");
const webpack = require("webpack");

const fs = require('fs'); // to check if the file exists
const DotEnv = require('dotenv-webpack');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer/lib/BundleAnalyzerPlugin");

module.exports = (env) => {

    const isProd = env.ENVIRONMENT === "production";
    const analyzeBundle = process.env.ANALYZE === "true";

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

    return {
        context: __dirname,
        mode: isProd ? "production" : "development",
        entry: {
            app: "./src/index.tsx"
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: isProd ? "[name].[contenthash].js" : "[name].[hash].js"
        },
        devtool: isProd ? "source-map" : "eval-source-map",
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
                        isProd ? MiniCssExtractPlugin.loader : "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader"
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({template: "index.html"}),
            new ForkTsCheckerWebpackPlugin({
                // For the dev server overlay to work
                async: false
            }),
            isProd ? false : new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin(envKeys),
            analyzeBundle ? new BundleAnalyzerPlugin() : false,
            new MiniCssExtractPlugin(),

        ].filter(Boolean)
    }
};