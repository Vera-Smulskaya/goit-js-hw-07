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
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

function onGalleryClick(event) {
  if (event.currentTarget === event.target) {
    return;
  }
  event.preventDefault();

  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
