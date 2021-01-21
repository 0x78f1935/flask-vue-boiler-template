const { join, resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    target: "node",
    entry: join(__dirname, 'main.js'), 

    output: {
        path: resolve(__dirname, '../backend/static/vue'),
        filename: '[name].bundle.js',
        publicPath: '/static/vue/',
    },

    resolve: {
        modules: [
          resolve(__dirname, "node_modules")
        ],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /.vue$/, 
                loader: 'vue-loader',
                options: {
                    optimizeSSR: false
                }
            },
            {
                test: /\.s[a|c]ss|.css$/, 
                use: [
                    'vue-style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    }
                ]
            },
            { 
                test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/, 
                use: [
                    'file-loader'
                ]
            }
        ],
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),

        new WebpackManifestPlugin({
            fileName: './manifest.json',
            publicPath: '/static/vue/',
        }),

        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
    ]
}