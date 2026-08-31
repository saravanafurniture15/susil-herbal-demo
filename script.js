const products = [

{
name: "Hair Oil",
price: "₹180",
image: "images/products/hair-oil.jpg"
},

{
name: "Hair Pack",
price: "₹120",
image: "images/products/hair-pack.jpg"
},

{
name: "Mooligai Shikakai",
price: "₹150",
image: "images/products/shikakai.jpg"
},

{
name: "Nalangu Maavu",
price: "₹90",
image: "images/products/nalangu-maavu.jpg"
},

{
name: "Kasturi Manjal",
price: "₹120",
image: "images/products/kasturi-manjal.jpg"
},

{
name: "Orange Peel Powder",
price: "₹110",
image: "images/products/orange-peel.jpg"
},

{
name: "Face Glow Oil",
price: "₹250",
image: "images/products/face-glow-oil.jpg"
},

{
name: "Potato Powder",
price: "₹95",
image: "images/products/potato-powder.jpg"
},

{
name: "Herbal Tea",
price: "₹180",
image: "images/products/herbal-tea.jpg"
},

{
name: "Health Mix",
price: "₹350",
image: "images/products/health-mix.jpg"
},

{
name: "Weight Loss Powder",
price: "₹250",
image: "images/products/weight-loss.jpg"
},

{
name: "Moringa Powder",
price: "₹150",
image: "images/products/moringa.jpg"
},

{
name: "Palm Sugar",
price: "₹160",
image: "images/products/palm-sugar.jpg"
},

{
name: "Moringa Honey",
price: "₹280",
image: "images/products/moringa-honey.jpg"
},

{
name: "Coconut Oil",
price: "₹220",
image: "images/products/coconut-oil.jpg"
},

{
name: "Groundnut Oil",
price: "₹240",
image: "images/products/groundnut-oil.jpg"
},

{
name: "ABC Malt",
price: "₹190",
image: "images/products/abc-malt.jpg"
},

{
name: "Sweet Potato Powder",
price: "₹160",
image: "images/products/sweet-potato.jpg"
},

{
name: "Butter Milk Podi",
price: "₹120",
image: "images/products/buttermilk-podi.jpg"
},

{
name: "Butterfly Pea Tea",
price: "₹180",
image: "images/products/butterfly-tea.jpg"
},

{
name: "Hair Growth Powder",
price: "₹220",
image: "images/products/hair-growth.jpg"
},

{
name: "Rose Day Fairness Cream",
price: "₹180",
image: "images/products/fairness-cream.jpg"
},

{
name: "Magic Serum",
price: "₹250",
image: "images/products/magic-serum.jpg"
},

{
name: "Walnut Scrub",
price: "₹180",
image: "images/products/walnut-scrub.jpg"
},

{
name: "Red Wine Gel",
price: "₹220",
image: "images/products/red-wine-gel.jpg"
},

{
name: "Aloe Vera Gel",
price: "₹120",
image: "images/products/aloe-vera-gel.jpg"
},

{
name: "Vetiver Body Wash",
price: "₹180",
image: "images/products/body-wash.jpg"
},

{
name: "Kojic Goat Milk Soap",
price: "₹90",
image: "images/products/goat-milk-soap.jpg"
},

{
name: "Beetroot Lip Balm",
price: "₹160",
image: "images/products/lip-balm.jpg"
},

{
name: "Foot Crack Cream",
price: "₹140",
image: "images/products/foot-cream.jpg"
},

{
name: "Herbal Shampoo",
price: "₹190",
image: "images/products/herbal-shampoo.jpg"
},

{
name: "Hibiscus Shampoo",
price: "₹210",
image: "images/products/hibiscus-shampoo.jpg"
}

];

const container = document.getElementById("productContainer");

products.forEach(product => {

container.innerHTML += `
<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p>Premium Herbal Product</p>

<div class="price">${product.price}</div>

</div>

</div>
`;

});
