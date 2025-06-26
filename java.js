document.addEventListener('DOMContentLoaded', () => {
    // Código para el scroll suave en la navegación
    document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Hace que el scroll sea suave
            });
        });
    });

    // Pequeño ejemplo de interactividad: cambiar el texto de un botón al hacer clic
    const botonExplora = document.querySelector('#hero .boton-primario');
    if (botonExplora) {
        botonExplora.addEventListener('click', () => {
            // Este es un ejemplo simple, podrías hacer algo más útil
            console.log('Botón "Explora Nuestros Tours" clicado!');
            // alert('¡Preparate para la aventura!'); // Podrías descomentar esto para una alerta
        });
    }

    // Otro ejemplo: un mensaje en la consola cuando el formulario de contacto se envía
    const contactForm = document.querySelector('#contacto form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
            console.log('Formulario de contacto enviado (simulado)!');

            // Aquí es donde normalmente enviarías los datos del formulario a un servidor
            // fetch('tu_servidor.php', {
            //     method: 'POST',
            //     body: new FormData(e.target)
            // }).then(response => response.json())
            //   .then(data => console.log(data))
            //   .catch(error => console.error('Error:', error));

            alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
            contactForm.reset(); // Limpia el formulario después de "enviar"
        });
    }

    // Puedes añadir más funcionalidades JavaScript aquí
    // Por ejemplo, para carruseles, validaciones más complejas, etc.
});