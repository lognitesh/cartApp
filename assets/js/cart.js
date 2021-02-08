const cartItemCount = document.getElementById('cartItemCount');
const cartItemsArr = [];

const cart = (items) =>{
    const cartBtnArr = document.querySelectorAll(".addToCart");
    cartBtnArr.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            const btnId = e.target.getAttribute('id');
            cartItemsArr.push(items[btnId]);
            console.log(cartItemsArr);
            cartItemCount.innerHTML = cartItemsArr.length;
        });
    })
};



export default cart;