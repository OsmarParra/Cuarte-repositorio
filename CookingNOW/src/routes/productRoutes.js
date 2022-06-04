'use strict';

var usuarioController = require('../controller/usuarioController');

exports.assignRoutes = function(app){

    app.get('/getUsuarios', usuarioController.readAll);
    app.post('/createUsuario', usuarioController.create);
    app.delete('/deleteUsuario', usuarioController.delete);

}


