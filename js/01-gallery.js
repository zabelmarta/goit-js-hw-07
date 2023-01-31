import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector('.gallery');
const createGallery = createCardImg(galleryItems);
gallery.insertAdjacentHTML('afterbegin', createGallery);
gallery.addEventListener("click", onGalleryClick);


function createCardImg(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></div>`;
    })
    .join("");
};


function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1280px">`,
    {
      onShow: (instance) => {
        gallery.addEventListener('keydown', onGalleryClickEsc);
      },
      onClose: (instance) => {
        gallery.removeEventListener("keydown", onGalleryClickEsc);
      },
    }
  )
    instance.show();
    
    function onGalleryClickEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}

