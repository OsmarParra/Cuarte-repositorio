'use strict';

const dbConn = require('../../config/dbConnection');
var dbConnection = require('../../config/dbConnection');

const CONSULTA = "SELECT u.correo, u.nombreU, u.contrasenna FROM cookingnow.usuario u";
const INSERT = "INSERT INTO cookingnow.usuario (correo, nombreU, contrasenna) values(?, ?, ?)";
const DELETE = "DELETE FROM cookingnow.usuario WHERE correo = ?";


exports.redAll = function(result){

    dbConn.query(CONSULTA, function(err, res) {

        if(err){

            console.log("error: ", err);
            result(null, err);

        }else{

            console.log('usuario: ', res);
            result(null, res);

        }

    });

}

exports.create = (nuevoUsuario) => { 
        
    console.log(nuevoUsuario)
    var result = "1";
    dbConn.query(INSERT, [nuevoUsuario.correo, nuevoUsuario.contrasenna, nuevoUsuario.nombreU], function(err, res){

        if(err){

            console.log(err);
            result = "0";

        }

    });

    return result;
        
}

exports.delete = (deleteUsuario) => {

    console.log(deleteUsuario)
    var result = "1";
    dbConn.query(DELETE, [deleteUsuario.correo], function(err, res){

        if(err){

            console.log(err);
            result = "0";

        }

    });

    return result;

}