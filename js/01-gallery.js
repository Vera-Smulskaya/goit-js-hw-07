import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from "basiclightbox";

const galleryList = document.querySelector(".gallery");
const galleryListItems = createGalleryListHTML(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryListItems);
galleryList.addEventListener("click", onGalleryClick);

function createGalleryListHTML(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onGalleryClick(event) {
  if (!event.target.classList.contains("gallery__link")) {
    return;
  }
  //   if (event.currentTarget === event.target) {
  //     return;
  // }

  const currentListItem = event.target.closest(".gallery__item");
  const imageUrl = currentListItem.dataset.original;
  const image = galleryItems.find((item) => item.original === imageUrl);

  const modalInstance =
    basicLightbox.create(`<div class="modal"><img class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}" src="${image.original}"></div>`);

  modalInstance.show();
}
