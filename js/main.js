$(document).ready(function(){
    let barraEstado = $('#barra_estado'),
        span = $('#barra_estado span'),
        botonCancelar = $('#cancelar');

    barraEstado.removeClass('barra_verde', 'barra_roja');    

    let enviar = $('#subir');
    enviar.click(function(e){
        e.preventDefault();
        let ext = $('#archivo').val().split('.');

        
        let datos = new FormData($('#form_subir')[0]);
        datos.append('ext', ext[1]);
        
        
        $.ajax({
            data: datos,
            url: 'inc/funciones.php',
            type: 'POST',
            contentType: false,
            processData: false,
            beforeSend: function() {
                barraEstado.css('width', "50%");
                span.innerHTML = "PROCESANDO.....";
            },
            success: function(res) {
                barraEstado.addClass('barra_verde');
                barraEstado.css('width', "100%");
                span.innerHTML = res;

            },
            error: function(error){
                console.log("ocurrio un error "+error );
            }
        });

        // cancelar
        botonCancelar.click( () => {
            xhr.abort();
            barraEstado.classList.remove('barra_verde');
            barraEstado.classList.add('barra_roja');
            span.innerHTML = "Proceso Canselado";
        });
    });
    
    $('#radom').click(function(e) {
        e.preventDefault();
        let num = Math.round(Math.random() * (6 - 1) + 1);
        console.log(num);
    });
});
