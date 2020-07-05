let services = document.querySelector(".services");
let servicesButtonDelivery = services.querySelector(".services-slider-list-item:first-child .services-slider-button");
let servicesButtonWarranty = services.querySelector(".services-slider-list-item:nth-child(2) .services-slider-button");
let servicesButtonLoans = services.querySelector(".services-slider-list-item:last-child .services-slider-button");
let servicesDelivery = services.querySelector(".services-delivery");
let servicesWarranty = services.querySelector(".services-warranty");
let servicesLoans = services.querySelector(".services-loans");

servicesButtonDelivery.addEventListener("click", function() {
  if (servicesDelivery.classList.contains("visually-hidden")) {
    servicesButtonDelivery.classList.add("active");
    servicesDelivery.classList.remove("visually-hidden");
    if (servicesWarranty.classList.contains("visually-hidden")) {
      servicesButtonLoans.classList.remove("active");
      servicesLoans.classList.add("visually-hidden");
    } else {
      servicesButtonWarranty.classList.remove("active");
      servicesWarranty.classList.add("visually-hidden");
    }
  }
})

servicesButtonWarranty.addEventListener("click", function() {
  if (servicesWarranty.classList.contains("visually-hidden")) {
    servicesButtonWarranty.classList.add("active");
    servicesWarranty.classList.remove("visually-hidden");
    if (servicesDelivery.classList.contains("visually-hidden")) {
      servicesButtonLoans.classList.remove("active");
      servicesLoans.classList.add("visually-hidden");
    } else {
      servicesButtonDelivery.classList.remove("active");
      servicesDelivery.classList.add("visually-hidden");
    }
  }
})

servicesButtonLoans.addEventListener("click", function() {
  if (servicesLoans.classList.contains("visually-hidden")) {
    servicesButtonLoans.classList.add("active");
    servicesLoans.classList.remove("visually-hidden");
    if (servicesDelivery.classList.contains("visually-hidden")) {
      servicesButtonWarranty.classList.remove("active");
      servicesWarranty.classList.add("visually-hidden");
    } else {
      servicesButtonDelivery.classList.remove("active");
      servicesDelivery.classList.add("visually-hidden");
    }
  }
})
