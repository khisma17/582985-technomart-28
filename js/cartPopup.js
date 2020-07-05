let cartLinks = document.querySelectorAll(".buy-button");
let cartPopup = document.querySelector(".modal-added-to-cart");
let cartClose = cartPopup.querySelector(".cart-close-button");
let cartContinue = cartPopup.querySelector(".continue-button");
let cartCounter = document.querySelector(".cart-counter");
let cartTab = document.querySelector(".cart-link");

for (let i = 0; i < cartLinks.length; i++) {
  cartLinks[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    cartCounter.textContent++;
    cartPopup.classList.remove("visually-hidden");
    cartPopup.classList.add("modal-show");
    if (cartCounter.textContent > 0) {
      cartTab.classList.add("active");
    }
  })
}

cartClose.addEventListener("click", function() {
  cartPopup.classList.remove("modal-show");
  cartPopup.classList.add("visually-hidden");
})

cartContinue.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
  cartPopup.classList.add("visually-hidden");
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
      cartPopup.classList.add("visually-hidden");
    }
  }
})
