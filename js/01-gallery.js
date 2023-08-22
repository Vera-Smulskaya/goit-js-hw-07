import { galleryItems } from "./gallery-items.js";
// Change code below this line

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
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  const currentListItem = event.target;
  const imageUrl = currentListItem.dataset.source;
  const item = galleryItems.find((el) => el.original === imageUrl);

  const instance = basicLightbox.create(`
      <img class="gallery__image" src="${imageUrl}" width="800" height="600" alt="${item.description}">
   `);

  instance.show();

  const closeModalonEscape = (event) => {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeModalonEscape);
    }
  };

  document.addEventListener("keydown", closeModalonEscape);
}
