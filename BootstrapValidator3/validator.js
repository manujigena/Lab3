$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Por favor. Ingrese su nombre'
                    }
                }
            },
             apellido: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Por favor. Ingrese su apellido'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor. Ingrese su E-Mail'
                    },
                    emailAddress: {
                        message: 'Por favor. Ingrese un E-Mail válido'
                    }
                }
            },
            telefono: {
                validators: {
                    notEmpty: {
                        message: 'Por favor. Ingrese su número de telefono'
                    },
                    phone: {
                        country: 'US',
                        message: 'Por favor. Ingrese un número de telefono válido'
                    }
                }
            },
            direccion: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Por favor. Ingrese su dirección'
                    }
                }
            },
            ciudad: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Por favor. Ingrese su ciudad'
                    }
                }
            },
            provincia: {
                validators: {
                    notEmpty: {
                        message: 'Por favor. Ingrese su provincia'
                    }
                }
            },
            codPost: {
                validators: {
                    notEmpty: {
                        message: 'Por favor. Ingrese su código postal'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Por favor. Ingrese un código postal válido'
                    }
                }
            },
            comentario: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Por favor. Ingrese entre 10 y 200 caracteres'
                    },
                    notEmpty: {
                        message: 'Por favor. Ingrese un comentario'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');            

            // Use Ajax to submit form data
            /*$.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');*/

            $.ajax({
                url:"pagina1.php",
                type:"POST",
                data:{"first_name":$('#nombre').val()},
                dataType:'text',
                success: function(res){

                    alert(res);
                }

            })
        });
});

