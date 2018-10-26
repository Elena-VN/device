let deliveryBtn = document.querySelector(".main__btn-service-delivery");
let warrantyBtn = document.querySelector(".main__btn-service-warranty");
let creditBtn = document.querySelector(".main__btn-service-credit");

let deliveryInfo = document.querySelector(".main__services-delivery");
let warrantyInfo = document.querySelector(".main__services-warranty");
let creditInfo = document.querySelector(".main__services-credit");

deliveryBtn.onclick = function () {
  deliveryBtn.classList.add("main__btn-service--active");
  deliveryInfo.classList.add("main__services-item--active");
  warrantyBtn.classList.remove("main__btn-service--active");
  warrantyInfo.classList.remove("main__services-item--active");
  creditBtn.classList.remove("main__btn-service--active");
  creditInfo.classList.remove("main__services-item--active");
};

warrantyBtn.onclick = function () {
  warrantyBtn.classList.add("main__btn-service--active");
  warrantyInfo.classList.add("main__services-item--active");
  deliveryBtn.classList.remove("main__btn-service--active");
  deliveryInfo.classList.remove("main__services-item--active");
  creditBtn.classList.remove("main__btn-service--active");
  creditInfo.classList.remove("main__services-item--active");
};

creditBtn.onclick = function () {
  creditBtn.classList.add("main__btn-service--active");
  creditInfo.classList.add("main__services-item--active");
  deliveryBtn.classList.remove("main__btn-service--active");
  deliveryInfo.classList.remove("main__services-item--active");
  warrantyBtn.classList.remove("main__btn-service--active");
  warrantyInfo.classList.remove("main__services-item--active");
};