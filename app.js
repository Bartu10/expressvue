const equipos = require("./teams")
const pilotos = require("./pilots")
const users = require("./user")
const express = require('express')
const app = express()

app.use('/equipos', equipos);
app.use('/pilotos', pilotos)
app.use('/users', users)

module.exports = app