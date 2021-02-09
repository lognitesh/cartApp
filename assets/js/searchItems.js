const searchItems = (items)=>{
    const gridLIArr = document.querySelectorAll(".grid ul li");
    const searchInput = document.querySelector(".search input");
    const filter = searchInput.value.toLowerCase();
    let pName = '';

    gridLIArr.forEach(gridLI =>{
        pName = gridLI.querySelector("h2").innerHTML;
        if (pName.toLowerCase().indexOf(filter) > -1) {
            gridLI.style.display = "block";
        } else {
            gridLI.style.display = "none";
        }
    });
};

export default searchItems;