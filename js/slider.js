let slider = document.querySelector(".slider");
let sliderPerforators = slider.querySelector(".slider-item.perforators");
let sliderDrills = slider.querySelector(".slider-item.drills");
let sliderControls = slider.querySelectorAll(".slider-controls-button");
let sliderPagination1 = slider.querySelector(".slider-pagination-button:first-child");
let sliderPagination2 = slider.querySelector(".slider-pagination-button:last-child");

for (let i = 0; i < sliderControls.length; i++) {
  sliderControls[i].addEventListener("click", function() {
    sliderPerforators.classList.toggle("visually-hidden");
    sliderDrills.classList.toggle("visually-hidden");
    sliderPagination1.classList.toggle("current");
    sliderPagination2.classList.toggle("current");
  })
}

sliderPagination1.addEventListener("click", function() {
  if (sliderPerforators.classList.contains("visually-hidden")) {
    sliderPerforators.classList.remove("visually-hidden");
    sliderDrills.classList.add("visually-hidden");
    sliderPagination1.classList.add("current");
    sliderPagination2.classList.remove("current");
  }
})

sliderPagination2.addEventListener("click", function() {
  if (sliderDrills.classList.contains("visually-hidden")) {
    sliderDrills.classList.remove("visually-hidden");
    sliderPerforators.classList.add("visually-hidden");
    sliderPagination2.classList.add("current");
    sliderPagination1.classList.remove("current");
  }
})
