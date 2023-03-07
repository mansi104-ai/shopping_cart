let shop = document.getElementById('shop')

let shopItemsData [
     {

    id: "jdkgfjnjfg",
    name: "Casual Shirt",
    price: 45,
    desc:"lorem ipsum ",
    img: "img1.jpg"

    },
    {
    id: "fjdnvjjdj",
    name: "Frock",
    price: 80,
    desc:"Dark Blue ",
    img: "img2.jpg"
    },
    {
    id: "nnvnfvnfjv",
    name: "Blazer",
    price: 100,
    desc:"Black",
    img: "img3.jpg"
    },
    {
    id: "ieieie",
    name: "Hat",
    price: 20,
    desc:"burnt sienna",
    img: "img4.jpg"
    }
];
console.log(shop);

let generateShop =()=>{
    return (shop.innerHTML= shopItemsData.map((x)=>{
        let{id, name , price, desc, img} = x;
        return `
    <div id= product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc} </p>
            <div class="price-quantity">
                <h2>${price}</h2>
                <div class="buttons">
                    <i class="bi bi-plus-lg"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-dash-lg"></i>
                </div>
            </div>
        </div>
    </div>
`
    }).join(""))) 
    
    
};

generateShop();