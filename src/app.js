const express=require('express');
const config =require('./config');

const login=require('./modulos/routes.js')


const app=express();

app.set('port',config.app.port)

app.use('/source/login', login)

module.exports=app;