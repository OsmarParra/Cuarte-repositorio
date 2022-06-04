'use strict';

var usuarioDAO = require('../daos/usuarioDAO');


var usuario = function(usuario){

    this.correo = usuario.correo;
    this.nombreU = usuario.nombreU;
    this.contrasenna = usuario.contrasenna;
    
}

usuario.readAll = (result) => {

    usuarioDAO.readAll(function(err, res){

        if (err) {

            console.log("error: ",err);
            result(null, err);

        }else{

            console.log("cliente: ",res)
            result(null,res);

        }

    })

}

usuario.create = (nuevoUsuario) => {

    console.log("Creando Usuario.")
    var result = usuarioDAO.create(nuevoUsuario);
    return result;

}

usuario.delete = (deleteUsuario)=>{

    console.log("Borrando Usuario");
    var result = usuarioDAO.delete(deleteUsuario);
    return(result);

}

module.exports = usuario;