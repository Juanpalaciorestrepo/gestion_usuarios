const express=require('express');
const { route } = require('../app');

const router= express.Router();

router.get('/', function (req,res){
    res.send('login ok...')
});

module.exports=router;