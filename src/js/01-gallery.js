// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const sipleGalleryListRef = document.querySelector('.gallery');

const sipleGalleryMarkup = galleryItems
  .map(
    ({
      original,
      preview,
      description,
    }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join('');

sipleGalleryListRef.insertAdjacentHTML('beforeend', sipleGalleryMarkup);

const lightbox = new SimpleLightbox(`.gallery__item`, {
  captionsData: 'alt',
  captionDelay: 250,
});
