//inputs
let inpArrLike = document.querySelectorAll(".form-input");

window.addEventListener("resize", () => {
  if (window.innerWidth > 1300) {
    for (inp of inpArrLike) {
      inp.placeholder = "";
    }
  }
});

const inputPlaceholderArr = ["name", "last name", "email", "text-area"];
loadInputs();

window.addEventListener("resize", () => {
  loadInputs();
});

function loadInputs() {
  if (window.innerWidth <= 1300) {
    for (let i = 0; i < inputPlaceholderArr.length; i++) {
      inpArrLike[i].placeholder = inputPlaceholderArr[i];
    }
  }
}
