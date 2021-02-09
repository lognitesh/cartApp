const itemTemplate = (data) =>{
    return `<li id="${data.id}">
    <img src="${data.image}" alt="${data.name}" title="${data.name}" />
    <h2>${data.name}</h2>
    <div class="info">
        <span class="price">$${data.price.actual}</span>
        <span class="discount">$${data.price.display}</span>
        <span class="off">${data.discount}% off</span>
    </div>
    <button class="btn" id="${data.id}">Add to Cart</button>
</li>`;
};

export default itemTemplate;