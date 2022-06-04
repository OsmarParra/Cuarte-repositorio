//JAVASCRIPT



var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), 
        {
            center: {lat: 4.942523, lng: -74.012765},
            zoom: 8          
        });
    }
	

// JQUERY - Ante el evento de hacer click en la opción Mapa, se llama la función de inicializar mapa.	
$(function(){
    $("a[href='#Maps']").on('shown.bs.tab', function() {
        initMap();
    });
});	


// JQUERY Consultar base de datos y mostrar en una tabla

$("#table-tab" ).click(function() {
	submitConsulta();
});


function cargarDatos(data){
    var rows = "";
    $("#dataTable tr").remove();
    $("#dataTable").append('<tr><td>Placa</td>'+
    '<td>Modelo</td>' + 
    '<td>Campo</td>');
    for (x in data) {
        rows += `<tr><td>${data[x].placa}</td><td>${data[x].modelo}</td><td>${data[x].campo}</td></tr>`;
    }
    $("#dataTable").append(rows);
	
}


function submitConsulta(){
	console.log("Entró a llamar");
	fetch('http://localhost:3000/getVehiculos',{
	method:	'GET',
	headers:{
		'Content-Type' : 'application/json'
	}
	}).then(response => response.json())
        .then(result => {
            if (result.length > 0) {
                cargarDatos(result);
            } else {
                console.log(JSON.stringify(result));
            }
        })
        .catch(error => console.log('error: ' + error));
}

// insertar información a la base de datos capturados desde interfaz gráfica

$(document).ready(function(){
	$("#vehiculoForm").submit(function(event){
		console.log("entro");
		event.preventDefault();
		submitFormInsert();
	});
});


function submitFormInsert(){
	
	var placa = $("#placa").val();
    var modelo = $("#modelo").val();
    var campo = $("#campo").val();
    var object = {"placa":placa,"modelo":modelo, "campo":campo};
	
	
		
	fetch('http://localhost:3000/insertVehiculo',{
	method:	'POST',
	headers:{
		'Content-Type' : 'application/json'
	},
	body: JSON.stringify(object),
	cache: 'no-cache'
	
	})
	
	.then(function(response){
		console.log("entró");
		return response.text();
	})
	
	.then(function(data){
		console.log('data = ',data);
		if(data === "OK"){
			formSuccess();
        }
        else{
            alert("Error al insertar");
        }
	})
	.catch(function(err){
		console.error(err);
	});
}


function formSuccess(){
	alert("Datos almacenados");
}


