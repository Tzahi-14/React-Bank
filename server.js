const express = require('express')
const bodyParser = require('body-parser')
const path = require("path")
const api = require ('./server/api')
const app = express()
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/bank",{userNewUrlParser: true,useUnifiedTopology: true})

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', api)

const port = 4000
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})