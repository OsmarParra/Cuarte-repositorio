//Osmar Parra 6000456, Julian Tellez 6000453, Juan Duarte 6000412

$("#table-tab").click(function (){

    submitConsulta();

});

$(document).ready(function (){

    $("#formRegistry").submit(function(event){

        console.log("Entró");
        event.preventDefault();

    });

});

    function submitConsulta(){

        console.log('Entró a llamar')
        fetch('http://localhost:3000/getUsuarios',{

            method: 'GET',
            headers: {

                'content-Type': 'application/json'

            }

        }).then(response => response.json())
            .then(result =>{

                if(result.length > 0){

                    cargarDatos(result);

                }else{

                    console.log(JSON.stringify(result));

                }

            }).catch(error => console.log('error:' + error));

    }

    function submitFormInsert(){

		var correo = $("#correo").val();
        var nombreU = $("#nombreU").val();
		var contrasenna = $("#contrasenna").val();
		
		var object = { "correo": correo, "nombreU": nombreU, "contrasenna": contrasenna };

		console.log(object);

		fetch('http://localhost:3000/createusuario',{

			method:'POST',
			headers: {

				'Content-Type': 'application/json'

			},

			body: JSON.stringify(object),
			cache: 'no-cache'
			
		})

		.then(function (response){

			console.log("Entró");
			return response.text();

		})

		.then(function (data){

			if(data === "1"){

				alert("Usuario registrado");

			}else{

				alert("Error al insertar");

			}

		})

	}

	function submitFormDelete(correo) {


		var object = { "correo": correo };
	
		fetch('http://localhost:3000/deleteProducto', {
	
			method: 'DELETE',
			headers: {
	
				'Content-Type': 'application/json'
	
			},
	
			body: JSON.stringify(object),
			cache: 'no-cache'
	
		})
			.then(function (response) {
	
				console.log("entró");
				return response.text();
	
			})
	
			.then(function (data) {
	
				console.log(data);
	
				if (Boolean(parseInt(data))) {
	
					alert("Usuario Borrado");
					submitConsulta();
	
				}
				else {
	
					alert("Error al borrar");
	
				}
			})
	
			.catch(function (err) {
	
				console.error(err);
	
			});
	
	}

    function cargarDatos(data){

        var rows = "";
        $("#dataTable tr").remove();
        $("#dataTable").append('<tr><td>Correo<td>' +
            '<td>Nombre<td>' +
            '<td>Contraseña<td>' +
            "</tr>")

        for (x in data){

            rows += `<tr row_id = ${data[x].correo}>`
            rows += `<tr><div col_name = "correo">${data[x].correo}></div></td>`
            rows += `<tr><div col_name = "nombre${data[x].correo}">${data[x].nombreU}></td>`
            rows += `<tr><div col_name = "contrasenna${data[x].correo}">${data[x].contrasenna}></td>`

        }

        $("#dataTable").append(rows);

    }