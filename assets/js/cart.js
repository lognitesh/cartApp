const cartItemCount = document.getElementById('cartItemCount');
const cartItemsArr = [];

const cart = (items) =>{
    const cartBtnArr = document.querySelectorAll(".btn");
    cartBtnArr.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            const btnId = e.target.getAttribute('id');
            cartItemsArr.push(items[btnId]);
            console.log(cartItemsArr);
            cartItemCount.innerHTML = cartItemsArr.length;

            (cartItemsArr.length === 0) ? cartItemCount.style.display = "none" : cartItemCount.style.display = "flex";
        });
    })
};



export default cart;