const formulario = document.getElementById('formularioContacto');
const enviarBtn = document.getElementById('enviarBtn');

formulario.addEventListener( 'submit', function(event) {
    event.preventDefault();

    const nombreInput = document.getElementById('nombre');
    const nombreValor = nombreInput.value;
    const mensaje = document.getElementById("mensaje");
    const mensajeValor = mensaje.value;
    const correo = document.getElementById("correo");
    const correoValor = correo.value;

    swal.fire({
        icon: 'sucess',
        title: '¡Formuario Enviado!',
        text: `Gracias por tus comentarios ${nombreValor}, tu mensaje ha sido enviado correctamente`,
    });

    formulario.reset();
});
