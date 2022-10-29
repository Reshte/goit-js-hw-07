import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const divEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join("");

divEl.insertAdjacentHTML("beforeend", markup);

let gallery = new SimpleLightbox(".gallery a");
gallery.on("shown.simplelightbox", function () {});

gallery.on("error.simplelightbox", function (e) {
  console.log(e); // some usefull information
});

gallery.overlay;
