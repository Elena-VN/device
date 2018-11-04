const linkMap = document.querySelector(".main__contacts-map");
const popupMap = document.querySelector(".main__map-popup");
const closeMap = document.querySelector(".main__map-close");

const linkContacts = document.querySelector(".main__contacts-btn");
const popupContacts = document.querySelector(".main__contacts-popup");
const formContacts = popupContacts.querySelector(".main__contacts-form");
const contactName = formContacts.querySelector("[name = name-contacts]");
const contactEmail = formContacts.querySelector("[name = email-contacts]");
const contactText = formContacts.querySelector("[name = text-contacts]");
const closeContacts = popupContacts.querySelector(".main__contacts-close");

const escKey = 27;

const overlay = document.querySelector(".main__overlay");


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