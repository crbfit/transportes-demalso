document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtiene los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validaciones básicas
    if (!nombre) {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    if (!email) {
        alert('Por favor, ingresa tu correo electrónico.');
        return;
    }

    if (!mensaje) {
        alert('Por favor, escribe tu mensaje.');
        return;
    }

    // Si todas las validaciones pasan, envía el formulario
    const formData = new FormData(this);
    fetch('https://example.com/api/send-email',  {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Tu mensaje ha sido enviado exitosamente.');
            this.reset(); // Limpia el formulario
        } else {
            alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Ocurrió un error al enviar el mensaje. Por favor, inténtalo más tarde.');
    });
});