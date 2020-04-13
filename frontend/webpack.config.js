const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: {
            "app"  : "./src/Main.js",
        },
    output: {
        path: path.resolve('./frontend/src/assets/bundles'),
        publicPath: '/static/bundles/',
        filename: '[name].js',
    },

    plugins: [
        new BundleTracker({filename: './frontend/webpack-stats.json'}),
        new VueLoaderPlugin(),
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
    resolve: {
        alias: {vue: 'vue/dist/vue.js'}
    },
};