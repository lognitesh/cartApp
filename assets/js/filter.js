import { getFetchedProducts } from "./index.js";
import renderItems from "./renderItems.js";

const filterBtn = document.querySelector(".options .filter");
const cartOverlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".overlay .close");
const cancelBtn = document.getElementById("cancel2");
const applyBtn = document.getElementById("apply2");
const rangeSlider = document.querySelector("#range");
const rangeInputValue = document.getElementById("rangeInputValue");
let rangeValue = 0;

filterBtn.addEventListener("click", () => {
  cartOverlay.style.display = "block";
  cartOverlay.querySelector(".filter").style.display = "block";
});

closeIcon.addEventListener("click", () => {
  cartOverlay.style.display = "none";
  cartOverlay.querySelector(".filter").style.display = "none";
});

applyBtn.addEventListener("click", () => {
  const itemsArr = getFetchedProducts();
  const filteredArr = [];

  itemsArr.forEach((item) => {
    if (item.price.actual > rangeValue) {
      filteredArr.push(item);
    }
  });
  renderItems(filteredArr);
});

rangeSlider.addEventListener("change", () => {
  rangeValue = rangeSlider.value;
  rangeInputValue.innerHTML = rangeValue;
});
