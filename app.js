const equipos = require("./teams")
const pilotos = require("./pilots")
const users = require("./user")
const express = require('express')
const app = express()

//Aqui les creo un endpoint distinto para cada api y poder ejecutarlas a la vez, 
//lo hago de esta manera ya que en un principio lo hice por separado
app.use('/equipos', equipos);
app.use('/pilotos', pilotos)
app.use('/users', users)

module.exports = app