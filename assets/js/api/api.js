const fetchProducts = async () =>{
    const response = await fetch('./assets/data/data.json');
    const data = await response.json();
    return data;
}

export default fetchProducts;