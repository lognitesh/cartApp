import { getFetchedProducts } from "./index.js";
import renderItems from "./renderItems.js";

const filterBtn = document.querySelector(".options .filterBtn");
const cartOverlay = document.querySelector(".overlay");
const cancelFilterBtn = document.getElementById("cancelFilter");
const applyFilterBtn = document.getElementById("applyFilter");
const rangeSlider = document.querySelector("#range");
const rangeInputValue = document.getElementById("rangeInputValue");
let rangeValue = 0;

filterBtn.addEventListener("click", () => {
  cartOverlay.style.display = "block";
  cartOverlay.querySelector(".filterContent").style.display = "block";
});

cancelFilterBtn.addEventListener("click", () => {
  cartOverlay.style.display = "none";
  cartOverlay.querySelector(".filterContent").style.display = "none";
});

applyFilterBtn.addEventListener("click", () => {
  const itemsArr = getFetchedProducts();
  const filteredArr = [];

  itemsArr.forEach((item) => {
    if (item.price.actual < rangeValue) {
      filteredArr.push(item);
    }
  });
  renderItems(filteredArr);
  cartOverlay.style.display = "none";
  cartOverlay.querySelector(".filterContent").style.display = "none";
});

rangeSlider.addEventListener("change", () => {
  rangeValue = rangeSlider.value;
  rangeInputValue.innerHTML = `$${rangeValue}`;
});
