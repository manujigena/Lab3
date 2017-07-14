$(document).ready(function(){
//alert("prueba");    
    $("#formLog").bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            inputPassword: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese contraseña válida'
                    },
                    stringLength: {
                        min: 3,
                        max: 10
                    }
                }
            },
            inputEmail: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese su email'
                    },
                    emailAddress: {
                        message: 'Ingrese un email valido'
                    }
                }
            }
        }            
    }).on('success.form.bv',function(e){
        e.preventDefault();

        var email = $("#inputEmail").val();
        var password = $("#inputPassword").val();
        localStorage.author = email;

        var datosLogin = {
            email: email,
            password: password
        }

        var datosJ = JSON.stringify(datosLogin);

        $.ajax({
            url: "http://localhost:1337/loginRecu",
            type: "POST",
            data: datosJ,
            dataType:"JSON",
        })
        .done(function(data){

            var autenticado = data.autenticado; 
            var role = data.role;
           
            localStorage.autenticado = autenticado;

            if(autenticado=='si' && role=='admin')
            {               
                window.location.replace("admin.html");  
            }
        })
        .fail(function(peticion, textStatus, errorThrown){
            alert("Error " + peticion.status + ' ' + errorThrown);
        })
    })
})

