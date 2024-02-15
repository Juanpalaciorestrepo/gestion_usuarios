const express=require('express');
const morgan = require ('morgan');
const config =require('./config');

const login=require('./modulos/routes.js')


const app=express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('port',config.app.port)

app.use('/source/login', login)

module.exports=app;