import { getFetchedProducts } from "./index.js";
import renderItems from "./renderItems.js";

const sortBtn = document.querySelector(".options .sort");
const cartOverlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".overlay .close");
const cancelBtn = document.getElementById("cancel");
const applyBtn = document.getElementById("apply");

sortBtn.addEventListener("click", () => {
  cartOverlay.style.display = "block";
  cartOverlay.querySelector(".sort").style.display = "block";
});

closeIcon.addEventListener("click", () => {
  cartOverlay.style.display = "none";
  cartOverlay.querySelector(".sort").style.display = "none";
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

applyBtn.addEventListener("click", () => {
  const selectedRadio = document.querySelector("input[name='sorting']:checked");
  if (selectedRadio) {
    const radioVal = selectedRadio.value;
    const itemsArr = getFetchedProducts();

    switch (radioVal) {
      case "discount":
        itemsArr.sortByDiscount();
        break;
      case "highLow":
        itemsArr.sortPriceByHigh();
        break;
      case "lowHigh":
        itemsArr.sortPriceByLow();
        break;
    }

    renderItems(itemsArr);
  }
});
