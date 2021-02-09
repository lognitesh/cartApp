import itemTemplate from './itemTemplate.js';
const gridUL = document.querySelector(".grid ul");

const renderItems =  (items) =>{
    let itemsLI = ""; 
    items.forEach((item) => {
        itemsLI += itemTemplate(item); 
    });
    gridUL.innerHTML = itemsLI;
};

export default renderItems;