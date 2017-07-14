$(document).ready(function(){
    $("#btnLogin").click(function(){
        var datosLogin = {email: $("#email").val(),password:$("#passwd").val()};
        $.ajax({
            url:'http://localhost:1337/login',
            type:'POST',
            cache: false,
            async:true,
            data:JSON.stringify(datosLogin)
        }).done(function(obj){
           if(obj.autenticado == "si")
                window.location.replace("index.html?email="+datosLogin.email+"&color="+obj.preferencias.color+"&font="+obj.preferencias.font);
});
    });






});
   