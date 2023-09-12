const gallery = document.getElementsByClassName('gallery')
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const popupDescription = popup.querySelector('.popup-description');

// Fonction pour afficher l'image en pop-up avec la description
function showImage(event) {
  const clickedImage = event.target;
  const imageSrc = clickedImage.getAttribute('src');
  const imageAlt = clickedImage.getAttribute('alt');
  const imageDescription = clickedImage.nextElementSibling.innerHTML;

  const popupImage = popup.querySelector('img');
  popupImage.src = imageSrc;
  popupImage.alt = imageAlt;

  popupDescription.innerHTML = imageDescription;

  overlay.style.display = 'flex';
}

// Fonction pour masquer le pop-up
function hideImage() {
  overlay.style.display = 'none';
}

// Ajouter les écouteurs d'événements pour les images de la galerie
for(let i=0; i<gallery.length; i++) {
  const images = gallery[i].querySelectorAll('.image img');
  images.forEach((image) => {
    image.addEventListener('click', showImage);
  });
}

// Ajouter un écouteur d'événement pour masquer le pop-up lors du clic sur l'overlay
overlay.addEventListener('click', hideImage);
