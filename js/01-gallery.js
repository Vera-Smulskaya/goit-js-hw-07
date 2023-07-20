import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
console.log("galleryList:", galleryList);
const galleryListItems = createGalleryListHTML(galleryItems);
console.log("galleryListItems:", galleryListItems);
galleryList.insertAdjacentHTML("beforeend", galleryListItems);

function createGalleryListHTML(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}
