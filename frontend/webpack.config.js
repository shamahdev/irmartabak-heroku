const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BundleTracker = require('webpack-bundle-tracker');
const CompressionPlugin = require('compression-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'production',
    context: __dirname,
    entry: {
            "app"  : "./src/Main.js",
        },
    optimization:{
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
              default: false,
              commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor_app',
                chunks: 'all',
                minChunks: 2
              }
            }
          }
    },
    output: {
        path: path.resolve('./frontend/src/assets/bundles'),
        publicPath: '/static/bundles/',
        filename: '[name].js',
    },

    plugins: [
        new BundleTracker({filename: './frontend/webpack-stats.json'}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new VueLoaderPlugin(),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
            threshold: 10240,
            minRatio: 0.8
          }),
        // new BundleAnalyzerPlugin()
    ],

    module: {
        rules:  [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,  
                include: [
                    path.resolve(__dirname, '..', 'node_modules'),
                    path.resolve(__dirname, 'src/assets/css'),
                ], 
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000',
            },
            {
                test: /\.s[ac]ss$/,
                include: path.appSrc,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('sass-loader')
                ]
            },
        ],
    },
};