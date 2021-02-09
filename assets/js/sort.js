import { getFetchedProducts } from "./index.js";
import renderItems from "./renderItems.js";

const sortBtn = document.querySelector(".options .sortBtn");
const cartOverlay = document.querySelector(".overlay");
const cancelSortBtn = document.getElementById("cancelSort");
const applySortBtn = document.getElementById("applySort");

sortBtn.addEventListener("click", () => {
  cartOverlay.style.display = "block";
  cartOverlay.querySelector(".sortContent").style.display = "block";
});

cancelSortBtn.addEventListener("click", () => {
  cartOverlay.style.display = "none";
  cartOverlay.querySelector(".sortContent").style.display = "none";
});

Array.prototype.sortByDiscount = function () {
  this.sort(function (a, b) {
    if (a["discount"] < b["discount"]) {
      return -1;
    } else if (a["discount"] > b["discount"]) {
      return 1;
    }
    return 0;
  });
};

Array.prototype.sortPriceByHigh = function () {
  this.sort(function (a, b) {
    if (a.price.actual < b.price.actual) {
      return -1;
    } else if (a.price.actual > b.price.actual) {
      return 1;
    }
    return 0;
  });
};

Array.prototype.sortPriceByLow = function () {
  this.sort(function (a, b) {
    if (a.price.actual > b.price.actual) {
      return -1;
    } else if (a.price.actual < b.price.actual) {
      return 1;
    }
    return 0;
  });
};

applySortBtn.addEventListener("click", () => {
  const selectedRadio = document.querySelector("input[name='sorting']:checked");
  if (selectedRadio) {
    const radioVal = selectedRadio.value;
    const itemsArr = getFetchedProducts();

    switch (radioVal) {
      case "discount":
        itemsArr.sortByDiscount();
        break;
      case "highLow":
        itemsArr.sortPriceByLow();
        break;
      case "lowHigh":
        itemsArr.sortPriceByHigh();
        break;
    }

    renderItems(itemsArr);
    cartOverlay.style.display = "none";
    cartOverlay.querySelector(".sortContent").style.display = "none";
  }
});
