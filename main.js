let shop = document.getElementById('shop');

let shopItemsData= [{
    id : "gfjdfbdjb",
    name : "Casual Shirt"
    price: 45,
    desc :"Lorem "
    img: "img1.jpg"
    
},{
    id : "ansjsjxbj",
    name : "Office shirt"
    price: 110,
    desc :"Lorem "
    img: "img2.jpg"
},{
    id : "zjjdekekd",
    name : "Pretty Frock"
    price: 90,
    desc :"Lorem "
    img: "img3.jpg"
},{
    id : "irirjfn",
    name : "Hat"
    price: 20,
    desc :"Lorem "
    img: "img4.jpg"
}];



let generateShop=() =>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id,name,price,desc} = x;
        return  `
        <div class="item">
        <img width="200" src=${img} alt ="">
        <div class="details">
            <h3>${name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                    <i class="bi bi-dash-lg"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i> 
                </div>
            </div>
        </div>
        </div>
          `     
          
    
              
     
        }).join(""));
    
    
};

generateShop();