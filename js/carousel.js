let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");

function moveCarousel(direction) {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].style.display = "block";
}

// Mostrar la primera imagen al cargar la página
images.forEach((img, index) => img.style.display = index === 0 ? "block" : "none");

// Función para mover el carrusel
function moveCarouselAuto() {
    images[currentIndex].style.display = "none"; // Ocultar imagen actual
    currentIndex = (currentIndex + 1) % images.length; // Incrementar índice
    images[currentIndex].style.display = "block"; // Mostrar siguiente imagen
}

// Iniciar el movimiento automático cada 3 segundos
setInterval(moveCarouselAuto, 3000);