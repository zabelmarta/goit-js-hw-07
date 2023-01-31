import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector('.gallery');
const createGallery = createCardsImg(galleryItems);
gallery.insertAdjacentHTML('afterbegin', createGallery);

function createCardsImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"></a>`;
    })
    .join("");
}

const ligthBox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
  close: false,
});