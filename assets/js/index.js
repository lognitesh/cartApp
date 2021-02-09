import fetchProducts from "./api/api.js";
import searchItems from "./searchItems.js";
import renderItems from "./renderItems.js";
import cart from "./cart.js";
import "./sort.js";
import "./filter.js";

let products;

const searchInput = document.querySelector(".search input");

const getProducts = async () => {
  const { items } = await fetchProducts();
  products = items;
  renderItems(items);
  cart(items);
};

getProducts();

searchInput.addEventListener("keyup", searchItems);

const getFetchedProducts = () => products;

export { getFetchedProducts };
