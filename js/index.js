$(document).ready(function(){
  inicioSesion();
});

function inicioSesion(){
$("#frm-inicio").submit(function(evento){
  $.post("https://comercial2016.herokuapp.com/api/v1/usuario",{
    email: $("#email").val(),
    password: $("#password").val()
  }).done(function(resultado){
    var datosJSON = resultado;

    for (var i = 0; i < datosJSON.length; i++) {
      if(datosJSON[i].estado === 200){
        document.location= "menu.html?dato="+ datosJSON[i].dato;
      }else{
        alert(datosJSON[i].dato);
      }
    }
  }).fail(function(error){
    var datosJSON = $.parseJSON(error.responseText);
    alert(datosJSON.mensaje);
  });
});
};
