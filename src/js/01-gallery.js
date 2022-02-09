// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const containerImg = document.querySelector('.gallery')

const makeImageMarkup = ({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}


const makeGalerryMarkup = galleryItems.map(makeImageMarkup).join('')
containerImg.insertAdjacentHTML('afterbegin', makeGalerryMarkup)



new SimpleLightbox('.gallery a', {
    captionsData: "alt", captionPosition: "bottom", captionDelay: 250
});

console.log(galleryItems);


