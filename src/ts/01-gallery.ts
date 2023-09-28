import { galleryItems } from "./gallery-items";

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const sipleGalleryListRef = document.querySelector<HTMLDivElement>(".gallery");

const lightbox = new SimpleLightbox(`.gallery__item`, {
	captionsData: "alt",
	captionDelay: 250,
});

const simpleGalleryMarkup = galleryItems
	.map(
		({ original, preview, description }) => `
		<a class="gallery__item" href="${original}">
			<img class="gallery__image" src="${preview}" alt="${description}" />
		</a>`,
	)
	.join("");

sipleGalleryListRef?.insertAdjacentHTML("beforeend", simpleGalleryMarkup);

lightbox.refresh();
