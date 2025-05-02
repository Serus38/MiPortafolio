

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Welcome to my simple web page!';
    
    const button = document.getElementById('clickMe');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});

function copiarTexto(texto, boton) {
    navigator.clipboard.writeText(texto).then(() => {
        // Crear un mensaje temporal
        const mensaje = document.createElement('span');
        mensaje.textContent = '✅';
        mensaje.style.color = 'green';
        mensaje.style.marginLeft = '10px';
        mensaje.style.fontSize = '0.9em';

        // Agregar el mensaje después del botón
        boton.parentNode.appendChild(mensaje);

        // Eliminar el mensaje después de 2 segundos
        setTimeout(() => {
            mensaje.remove();
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const contenidoProyecto = document.getElementById('contenidoProyecto');

    toggleButton.addEventListener('click', () => {
        if (contenidoProyecto.style.display === 'none') {
            contenidoProyecto.style.display = 'block';
            toggleButton.textContent = 'Mostrar menos';
        } else {
            contenidoProyecto.style.display = 'none';
            toggleButton.textContent = 'Mostrar más';
        }
    });
});

