let mapLink = document.querySelector(".contacts-map");
let mapPopup = document.querySelector(".modal-map");
let mapClose = mapPopup.querySelector(".map-close-button");

ymaps.ready(init);
function init(){
  let myMap = new ymaps.Map("yandex-map", {
    center: [59.938635, 30.323118],
    zoom: 17
  })
}

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("visually-hidden");
  mapPopup.classList.add("modal-show");
})

mapClose.addEventListener("click", function() {
  mapPopup.classList.remove("modal-show");
  mapPopup.classList.add("visually-hidden");
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
      mapPopup.classList.add("visually-hidden");
    }
  }
})
