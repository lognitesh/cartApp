import itemTemplate from "./itemTemplate.js";
const gridUL = document.querySelector(".grid ul");

const renderItems = (items) => {
  let itemsLI = "";
  if (items.length > 0) {
    items.forEach((item) => {
      itemsLI += itemTemplate(item);
    });
    gridUL.innerHTML = itemsLI;
  } else {
    gridUL.innerHTML = "<li class='error'>No result found!!</li>";
  }
};

export default renderItems;
