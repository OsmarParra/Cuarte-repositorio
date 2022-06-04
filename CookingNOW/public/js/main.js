$(document).ready(function () {

    function showPopup(){
        $('.pop-up').addClass('show');
        $('.pop-up-wrap').addClass('show');
    }

    $("#close").click(function(){
        $('.pop-up').removeClass('show');
        $('.pop-up-wrap').removeClass('show');
    });

    $(".btnRegistry").click(function(){
        $('.pop-up').removeClass('show');
        $('.pop-up-wrap').removeClass('show');
    });


    $(".BotonRegistro").click(showPopup);
        


});



$(document).ready(function () {
    function showPopup2(){
        $('.pop-up2').addClass('show');
        $('.pop-up-wrap2').addClass('show');
    }
    
    $("#close2").click(function(){
        $('.pop-up2').removeClass('show');
        $('.pop-up-wrap2').removeClass('show');
    });
    
    
    $(".Inicio2").click(function(){
        $('.pop-up2').removeClass('show');
        $('.pop-up-wrap2').removeClass('show');
    });
    
    
    $(".InicioSe").click(showPopup2);
    
    })




document.querySelector('.Inicio2').addEventListener('click', iniciarSesion);
document.querySelector('.btnRegistry').addEventListener('click', registrarUsuario);

