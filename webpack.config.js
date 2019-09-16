const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '/', 'src/js/myfile.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'output123.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}