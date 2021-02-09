const cartItemCount = document.querySelector(".cartItemCount");
const cartOverlay = document.querySelector(".overlay");
const cartIcon = document.querySelector(".header .cartBtn");
const closeIcon = document.querySelector(".overlay .close");
const productTable = document.querySelector("#productSummary tbody");
const cartItemsArr = [];

const cart = (items) => {
  const cartBtnArr = document.querySelectorAll(".btn");
  cartBtnArr.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const btnId = e.target.getAttribute("id");
      cartItemsArr.push(items[btnId]);
      console.log(cartItemsArr);
      cartItemCount.innerHTML = cartItemsArr.length;

      cartItemsArr.length === 0
        ? (cartItemCount.style.display = "none")
        : (cartItemCount.style.display = "flex");
    });
  });
};

cartIcon.addEventListener("click", () => {
  cartOverlay.style.display = "block";
  cartOverlay.querySelector(".cartItemContent").style.display = "block";
});

closeIcon.addEventListener("click", () => {
  cartOverlay.style.display = "none";
  cartOverlay.querySelector(".cartItemContent").style.display = "none";
});

export default cart;
