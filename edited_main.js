let shop = document.getElementById('shop')

let shopItemsData= [
    {
        id: "fnvnvfn",
        name: "Casual Shirt",
        price: "$ 45",
        desc : "lorem ipsum",
        img: "img1.jpg"
    },
    {
        id: "jiiejei",
        name: "Pretty Frock",
        price: "$ 80",
        desc : "Daark blue",
        img: "img2.jpg"
     
    },
    {
        id: "ayahuhsh",
        name: "Blazer",
        price: "$ 150",
        desc : "Charcoal Black",
        img: "img3.jpg"
    },
    {
        id: "oororr",
        name: "Hat",
        price: "$ 20",
        desc : "burnt sienna",
        img: "img4.jpg"
    },
];

let generateShop =()=>{
    return  shop.innerHTML=`
    <div class="item">
            <img width="220" src="img1.jpg" alt="">
            <div class="details">
                <h3>Casual Shirt</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <div class="price-quantity">
                    <h2>$ 45</h2>
                    <div class="buttons">
                        <i class="bi bi-plus-lg"></i>
                        <div class="quantity">0</div>
                        <i class="bi bi-dash-lg"></i>
                    </div>
                </div>
            </div>
    
        </div>
     
    `
}

generateShop();