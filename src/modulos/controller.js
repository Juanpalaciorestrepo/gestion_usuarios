const db = require('../db/mysql');

const TABLA='usuarios';
function listar(){

    return db.listar(TABLA);
}

function encontrar(id){

    return db.encontrar(TABLA,id);
}

function eliminar(body){

    return db.eliminar(TABLA,body);
}

function agregar(body){

    return db.agregar(TABLA,body);
}




module.exports={
    listar,
    encontrar,
    eliminar,
    agregar,
}