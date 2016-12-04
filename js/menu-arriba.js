$(document).ready(function(){
  menuArriba();
});

function menuArriba(){
  var misVariablesGet = getVarsUrl();
  var ur = "https://comercial2016.herokuapp.com/images/";
  //$("#nombrepanel").text(misVariablesGet.dato);
  //alert(misVariablesGet.dato);
  $.post("https://comercial2016.herokuapp.com/api/v1/foto", {
    dato: misVariablesGet.dato
  }).done(function(resultado){
    var datosJSON = resultado;
    for(var item in datosJSON){
        document.getElementById("foto-usuario").innerHTML ="<img style='max-width:70px;' src='"+ur+ datosJSON[item].codigo_usuario +".png'>";
        $("#nombre-usuario").text(datosJSON[item].personal);
    }
  });
}