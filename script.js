document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul.menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            // Opcional: Cambiar el icono del toggle
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Icono de cerrar
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); // Icono de hamburguesa
            }
        });

        // Opcional: Cerrar el menú si se hace clic fuera de él
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                 navMenu.classList.remove('active');
                 const icon = menuToggle.querySelector('i');
                 icon.classList.remove('fa-times');
                 icon.classList.add('fa-bars');
            }
        });

         // Opcional: Cerrar el menú si se hace clic en un enlace (útil para single-page o si los enlaces bajan a secciones)
         navMenu.querySelectorAll('a').forEach(link => {
             link.addEventListener('click', function() {
                 if (navMenu.classList.contains('active')) {
                     navMenu.classList.remove('active');
                     const icon = menuToggle.querySelector('i');
                     icon.classList.remove('fa-times');
                     icon.classList.add('fa-bars');
                 }
             });
         });
    }
});

// Nota: La lógica del formulario de contacto (enviar datos, validación compleja, etc.)
// requeriría código del lado del servidor (PHP, Python, Node.js, etc.)
// y no puede implementarse solo con JavaScript en el navegador.
// El código del formulario en contacto.html está listo para enviar, pero el 'action="#"'
// debe ser reemplazado por una URL a tu script de backend.