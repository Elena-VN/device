let btnOne = document.querySelector(".main__slide-btn-one");
let btnTwo = document.querySelector(".main__slide-btn-two");
let btnThree = document.querySelector(".main__slide-btn-three");

let slideOne = document.querySelector(".main__slide-one");
let slideTwo = document.querySelector(".main__slide-two");
let slideThree = document.querySelector(".main__slide-three");

btnOne.onclick = function () {
  btnOne.classList.add("main__slide-btn--active");
  slideOne.classList.add("main__promo-slide--active");
  btnTwo.classList.remove("main__slide-btn--active");
  slideTwo.classList.remove("main__promo-slide--active");
  btnThree.classList.remove("main__slide-btn--active");
  slideThree.classList.remove("main__promo-slide--active");
};

btnTwo.onclick = function () {
  btnTwo.classList.add("main__slide-btn--active");
  slideTwo.classList.add("main__promo-slide--active");
  btnOne.classList.remove("main__slide-btn--active");
  slideOne.classList.remove("main__promo-slide--active");
  btnThree.classList.remove("main__slide-btn--active");
  slideThree.classList.remove("main__promo-slide--active");
};

btnThree.onclick = function () {
  btnThree.classList.add("main__slide-btn--active");
  slideThree.classList.add("main__promo-slide--active");
  btnOne.classList.remove("main__slide-btn--active");
  slideOne.classList.remove("main__promo-slide--active");
  btnTwo.classList.remove("main__slide-btn--active");
  slideTwo.classList.remove("main__promo-slide--active");
};
