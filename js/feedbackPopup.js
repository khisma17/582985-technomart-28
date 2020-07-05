let feedbackLink = document.querySelector(".contacts-button");
let feedbackPopup = document.querySelector(".modal-contact-us");
let feedbackClose = feedbackPopup.querySelector(".feedback-close-button");
let feedbackForm = feedbackPopup.querySelector(".feedback-form");
let feedbackName = feedbackPopup.querySelector("[name = name]");
let feedbackEmail = feedbackPopup.querySelector("[name = email]");
let feedbackText = feedbackPopup.querySelector("[name = text]");

let isStorageSupport = "true";
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = "false"
}

feedbackLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("visually-hidden");
  feedbackPopup.classList.add("modal-show")
  if (storageName) {
    feedbackName.value = storageName;
  } else {
    feedbackName.focus();
  }
  if (storageEmail) {
    feedbackEmail.value = storageEmail;
  } else {
    feedbackEmail.focus();
  }
  if(storageName && storageEmail) {
    feedbackText.focus();
  }
})

feedbackClose.addEventListener("click", function() {
  feedbackPopup.classList.remove("modal-show")
  feedbackPopup.classList.add("visually-hidden");
  feedbackPopup.classList.remove("modal-error");
})

feedbackForm.addEventListener("submit", function(evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("name", feedbackName.value);
    localStorage.setItem("email", feedbackEmail.value);
    }
  }
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.add("visually-hidden");
      feedbackPopup.classList.remove("modal-error");
    }
  }
})
