let shop = document.getElementById('shop')

let shopItemsData= [
     {

    id: "jdkgfjnjfg",
    name: "Casual Shirt",
    price: "$45" ,
    desc:"lorem ipsum ",
    img: "img1.jpg"

    },
    {
    id: "fjdnvjjdj",
    name: "Frock",
    price:  "$80",
    desc:"Dark Blue ",
    img: "img2.jpg"
    },
    {
    id: "nnvnfvnfjv",
    name: "Blazer",
    price:  "$100",
    desc:"Black",
    img: "img3.jpg"
    },
    {
    id: "ieieie",
    name: "Hat",
    price:  "$20",
    desc:"burnt sienna",
    img: "img4.jpg"
    }
];
console.log {shop};

let basket=[
    
    
];

let generateShop =() => {
    return (shop.innerHTML= shopItemsData
        .map((x)=>{
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
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    <div id=${id} class="quantity">0</div>
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                </div>
            </div>
        </div>
    </div>
`
    }).join(" "))
    
    
};

generateShop();

let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=>x.id === selectedItem);
    
    if (search === undefined){
        basket.push({
            id: selectedItem.id,
            item:1,

    });
}; 
    else {
    search.item +=1;
};

    console.log(basket);
};
let decrement = (id)=>{
    let selectedItem = id;
    console.log(selectedItem.id)
};
let update = () =>{};