let linkMap = document.querySelector(".main__contacts-map");
let popupMap = document.querySelector(".main__map-popup");
let closeMap = document.querySelector(".main__map-close");

let linkContacts = document.querySelector(".main__contacts-btn");
let popupContacts = document.querySelector(".main__contacts-popup");
let formContacts = popupContacts.querySelector(".main__contacts-form");
let contactName = formContacts.querySelector("[name = name-contacts]");
let contactEmail = formContacts.querySelector("[name = email-contacts]");
let contactText = formContacts.querySelector("[name = text-contacts]");
let closeContacts = popupContacts.querySelector(".main__contacts-close");

let escKey = 27;

let overlay = document.querySelector(".main__overlay");


linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("main__map-popup-show");
  overlay.classList.add("main__overlay-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("main__map-popup-show");
  overlay.classList.remove("main__overlay-show");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("main__map-popup-show");
  popupContacts.classList.remove("main__contacts-popup-show");
  overlay.classList.remove("main__overlay-show");
});

linkContacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupContacts.classList.add("main__contacts-popup-show");
  overlay.classList.add("main__overlay-show");
});

closeContacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupContacts.classList.remove("main__contacts-popup-show");
  popupContacts.classList.remove("main__contacts-error");
  overlay.classList.remove("main__overlay-show");
});

formContacts.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactEmail.value || !contactText.value) {
    evt.preventDefault();
    popupContacts.classList.add("main__contacts-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === escKey) {
    if (popupMap.classList.contains("main__map-popup-show")) {
      evt.preventDefault();
      popupMap.classList.remove("main__map-popup-show");
      overlay.classList.remove("main__overlay-show");
    }
    if (popupContacts.classList.contains("main__contacts-popup-show")) {
      evt.preventDefault();
      popupContacts.classList.remove("main__contacts-popup-show");
      overlay.classList.remove("main__overlay-show");
    }
  }
});