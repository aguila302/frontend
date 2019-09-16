const express = require('express')
const createWebpackMiddleware = require('webpack-express-middleware')
const app = express()
const config = require('./webpack.config')
const compiler = require('webpack')(config)

app.set('port', 3000)
app.set('host', '0.0.0.0')

const webpackMiddleware = createWebpackMiddleware(compiler, config)
webpackMiddleware(app)


app.listen(app.get('port'), app.get('host'), webpackMiddleware.listen)