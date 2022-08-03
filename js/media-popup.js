const popUp = document.querySelector(".popup-images");
if (window.innerWidth < 1000) {
  deleteElement();
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 1000) {
    deleteElement();
  }
});

function deleteElement() {
  popUp.remove();
}

const sectionGallery = document.querySelector(".section-gallery");
window.addEventListener("resize", () => {
  if (window.innerWidth > 1000) {
    sectionGallery.appendChild(popUp);
  }
});
