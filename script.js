const products = [

    {
        id: 1,
        name: "Herbal Product 01",
        category: "herbal",
        description: "Natural herbal product",
        image: "images/product1.jpg"
    },

    {
        id: 2,
        name: "Herbal Product 02",
        category: "herbal",
        description: "Carefully selected herbal product",
        image: "images/product2.jpg"
    },

    {
        id: 3,
        name: "Natural Care 01",
        category: "care",
        description: "Natural care product",
        image: "images/product3.jpg"
    },

    {
        id: 4,
        name: "Natural Care 02",
        category: "care",
        description: "Everyday natural care",
        image: "images/product4.jpg"
    },

    {
        id: 5,
        name: "Herbal Product 03",
        category: "herbal",
        description: "Natural herbal product",
        image: "images/product5.jpg"
    },

    {
        id: 6,
        name: "Herbal Product 04",
        category: "herbal",
        description: "Premium herbal product",
        image: "images/product6.jpg"
    }

];


let cart = [];


/* LOAD PRODUCTS */

function loadProducts(list = products) {

    const grid = document.getElementById("productGrid");

    grid.innerHTML = "";

    list.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <img
                class="product-image"
                src="${product.image}"
                alt="${product.name}"
                onerror="this.src='images/placeholder.jpg'"
            >

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <button
                    class="product-btn"
                    onclick="addToCart(${product.id})">
                    Add Enquiry
                </button>

            </div>
        `;

        grid.appendChild(card);

    });

}


/* FILTER */

function filterProducts(category) {

    document.querySelectorAll(".filter")
        .forEach(button => button.classList.remove("active"));

    event.target.classList.add("active");

    if (category === "all") {

        loadProducts(products);

    } else {

        const filtered = products.filter(
            product => product.category === category
        );

        loadProducts(filtered);

    }

}


/* CART */

function addToCart(id) {

    const product = products.find(
        product => product.id === id
    );

    cart.push(product);

    updateCart();

    alert(product.name + " added to enquiry.");

}


function updateCart() {

    document.getElementById("cartCount").textContent =
        cart.length;

}


function openCart() {

    const modal = document.getElementById("cartModal");

    const items = document.getElementById("cartItems");

    modal.style.display = "block";

    if (cart.length === 0) {

        items.innerHTML = `
            <p>No products selected yet.</p>
        `;

        return;

    }

    items.innerHTML = cart.map((item, index) => `

        <div class="cart-item">

            <span>
                ${item.name}
            </span>

            <button onclick="removeItem(${index})">
                ❌
            </button>

        </div>

    `).join("");

}


function closeCart() {

    document.getElementById("cartModal")
        .style.display = "none";

}


function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

    openCart();

}


/* WHATSAPP */

function sendWhatsApp() {

    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const message =
        document.getElementById("customerMessage").value.trim();


    if (!name || !phone) {

        alert("Please enter your name and mobile number.");

        return;

    }


    if (cart.length === 0) {

        alert("Please select at least one product.");

        return;

    }


    const productList = cart
        .map((item, index) =>
            `${index + 1}. ${item.name}`
        )
        .join("\n");


    const text =

`Hello Susil Herbal Products,

I would like to enquire about these products:

${productList}

Customer Name: ${name}
Mobile: ${phone}

Message:
${message}`;


    /*
       IMPORTANT:
       Replace 919999999999 with
       the client's WhatsApp number.
    */

    const whatsappNumber = "919999999999";

    const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(text);


    window.open(url, "_blank");

}


/* MOBILE MENU */

function toggleMenu() {

    document
        .getElementById("navMenu")
        .classList.toggle("show");

}


/* START */

loadProducts();
