const express = require('express')
const mongoose = require('mongoose')
const app=express() 

const url = 'mongodb://127.0.0.1:27017/shops'
const data =require('./routers/data')
const form = require('./routers/form')

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');   
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    next();
  });