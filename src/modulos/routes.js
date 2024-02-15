const express=require('express');
const { route } = require('../app');


const respuesta = require('./res_status.js');
const controller= require('./controller');
const router= express.Router();

router.get('/', async function (req,res){
    try{
    const items = await controller.listar()
    respuesta.success(req, res, items, 200); 
}
catch(err){
    respuesta.error(req,res,err,300)
}
});


router.get('/:id', async function (req,res){
    try{
    const items = await controller.encontrar(req.params.id)
    respuesta.success(req, res, items, 200); 
    }
    catch(err){
        respuesta.error(req,res,err,300)
    }
});

router.put('/', async function (req,res){
    try{
    const items = await controller.eliminar(req.body)
    respuesta.success(req, res, "usuario eliminado", 200); 
    }
    catch(err){
        respuesta.error(req,res,err,300)
    }
});

router.post('/', async function (req,res){
    try{
    const items = await controller.agregar(req.body);
    if(req.body.id==0){
        mensaje="usuario agregado";
    }
    else{
        mensaje="usuario actualizado";
    }
    respuesta.success(req, res, mensaje, 201); 
    }
    catch(err){
        respuesta.error(req,res,err,300)
    }
});

module.exports=router;