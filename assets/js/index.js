import fetchProducts from './api/api.js';
import renderItem from './item.js';
import cart from './cart.js';

let products;

const gridUL = document.querySelector(".grid ul");

const renderItems = async () =>{
    const {items} = await fetchProducts();
    products = items;
    let itemsLI = ""; 
    items.forEach((item) => {
        itemsLI += renderItem(item); 
    });
    gridUL.innerHTML = itemsLI;
    cart(items);
};

renderItems();

