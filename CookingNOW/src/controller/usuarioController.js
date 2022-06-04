'use strict';

const usuario = require('../models/usuario');

exports.redAll = function(req, res){

    usuario.redAll((req, res) => {

        if(err){

            res.status(500).send({

                message:

                    err.message || "Ocurrió un error al consultar los datos."

            });

        }else{

            res.send(data);

        }

    });

}

exports.create = function(req,res){

    const userData = new producto(req.body);
    var result = producto.create(userData);
    res.send(result);
    
}


exports.delete = function(req,res){

    const userData = new producto(req.body);
    var result = producto.delete(userData);
    res.send(result);

}