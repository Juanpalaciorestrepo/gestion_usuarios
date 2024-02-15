exports.success = function (req,res, mensaje, status){

const statusCode=status ||200;
const mensajeok =mensaje ||'';

res.status(statusCode).send({
error:false,
status:statusCode,
body: mensajeok


});

}

exports.error = function (req,res, mensaje, status){

    const statusCode=status ||300;
    const mensajeError =mensaje ||'Error';
    
    res.status(statusCode).send({
    error:true,
    status:statusCode,
    body: mensajeError
    
    
    });
    
    }