import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

divEl.insertAdjacentHTML("beforeend", markup);

divEl.addEventListener("click", onImgClick);

let modalImg = basicLightbox.create("");

function onImgClick(evt) {
  evt.preventDefault();
  let urlImg = evt.target.dataset.source;
  modalImg = basicLightbox.create(`
      <img class="modal__image" src="${urlImg}" width="800" height="600">
  `);

  modalImg.show();
}

modalImgEl.addEventListener("keydown", onImgEscape);

function onImgEscape(evt) {
  modalImg.close();
}

// onClose: (instance) => {};
