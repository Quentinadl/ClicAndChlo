// Sélectionner les éléments du carrousel
const slideshow = document.querySelector('.slideshow');
const images = slideshow.getElementsByTagName('img');
const totalImages = images.length;

// Définir l'index de l'image actuelle et l'interval de changement d'image
let currentImage = 0;
const interval = 2000; // 2 secondes

// Fonction pour passer à l'image suivante
function nextImage() {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % totalImages;
  images[currentImage].classList.add('active');
}

// Lancer le carrousel automatiquement
setInterval(nextImage, interval);
