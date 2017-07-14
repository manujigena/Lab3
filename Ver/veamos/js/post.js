
$(document).ready(function(){
   
	$("#formLog").bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese nombre válido'
                    }                   
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese su email'
                    },
                    emailAddress: {
                        message: 'Ingrese un email valido'
                    }
                }
            },
			webSite: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese webSite válido'
                    }                   
                }
            },
			ubicacion: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese ubicacion válida'
                    }                   
                }
            },
			fechaNacimiento: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese fecha de nacimiento válida'
                    }                   
                }
            },

        }            
    })
}); 
    
function Postear()
{
		
		var nombre = $("#nombre").val();
        var email = $("#email").val();
        var webSite = $("#webSite").val();
        var ubicacion = $("#ubicacion").val();
        var fechaNacimiento = $("#fechaNacimiento").val();
		
        var dataPost = {
            nombre: nombre,
            email: email,
            webSite: webSite,
            ubicacion: ubicacion,
            fechaNacimiento: fechaNacimiento
        }
        
        var d = new Date();
        $('#myModal').modal('hide');

        $("#spinner").html("<img id=loader src='imagenes/loading.gif'>");

        $.ajax({
            url: "http://localhost:1337/crearNuevoContacto",
            type: "POST",
            data: JSON.stringify(dataPost),
            dataType:"JSON"
        })
		
        
        .done(function(data){
            console.log(data);
            $("#loader").hide();
            $('#posteos').before('<h4>Nombre: '+data.nombre+'</h4><br><h4>Mail: '+data.email+'</h4><br><h4>Web: '+data.webSite+'</h4><br><h4>Ubicacion: '+data.ubicacion+'</h4><br><h4>Fecha Nacimiento: '+data.fechaNacimiento+'</h4><br><h5>Hora Ingreso: '+data.fechaIngreso+'</h5><br><br><br>');
                                    
        })
        
        .fail(function(peticion, textStatus, errorThrown){
            alert("Error " + peticion.status + ' ' + errorThrown);
        });
   
}

function logOut(){
    window.location.replace("login.html");
    localStorage.removeItem('email');
}

