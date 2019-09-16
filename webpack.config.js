const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '/', 'src/js/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'output.css',
            chunkFilename: 'output.css'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader, },
                    { loader: 'css-loader', options: { importLoaders: 2 }, },
                    { loader: 'postcss-loader', }
                ]
            }
        ]
    }
}