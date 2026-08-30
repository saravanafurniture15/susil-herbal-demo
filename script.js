// ===============================
// SUSIL HERBAL - SCRIPT.JS
// ===============================

let products = [];
let cart = [];

// WhatsApp Number
// Country code இல்லாமல் number மட்டும்
const WHATSAPP_NUMBER = "919500244537";

// ===============================
// SAMPLE PRODUCTS
// ===============================

const sampleProducts = [
    {
        id: 1,
        name: "Herbal Hair Oil",
        category: "Hair Care",
        price: 250,
        image: "images/product1.jpg"
    },
    {
        id: 2,
        name: "Herbal Shampoo",
        category: "Hair Care",
        price: 220,
        image: "images/product2.jpg"
    },
    {
        id: 3,
        name: "Herbal Soap",
        category: "Skin Care",
        price: 120,
        image: "images/product3.jpg"
    },
    {
        id: 4,
        name: "Herbal Face Cream",
        category: "Skin Care",
        price: 280,
        image: "images/product4.jpg"
    },
    {
        id: 5,
        name: "Herbal Powder",
        category: "Health Care",
        price: 180,
        image: "images/product5.jpg"
    },
    {
        id: 6,
        name: "Herbal Juice",
        category: "Health Care",
        price: 150,
        image: "images/product6.jpg"
    }
];

// ===============================
// PAGE LOAD
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    products = sampleProducts;

    displayProducts(products);
    displayCategories();
    loadCart();

    updateCart();

    // Search
    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("input", function () {

            const searchText = this.value.toLowerCase();

            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(searchText) ||
                product.category.toLowerCase().includes(searchText)
            );

            displayProducts(filteredProducts);
        });
    }
});

// ===============================
// DISPLAY PRODUCTS
// ===============================

function displayProducts(productList) {

    const productsContainer =
        document.getElementById("products");

    if (!productsContainer) {
        return;
    }

    productsContainer.innerHTML = "";

    if (productList.length === 0) {

        productsContainer.innerHTML = `
            <div style="text-align:center; padding:30px;">
                <h3>No products found</h3>
                <p>Please try another search.</p>
            </div>
        `;

        return;
    }

    productList.forEach(product => {

        const productCard = document.createElement("div");

        productCard.className = "product-card";

        productCard.innerHTML = `

            <img 
                src="${product.image}" 
                alt="${product.name}"
                onerror="this.src='https://via.placeholder.com/500x500?text=Herbal+Product'"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.category}</p>

                <div class="product-price">
                    ₹${product.price}
                </div>

                <button 
                    class="btn"
                    onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>
        `;

        productsContainer.appendChild(productCard);
    });
}

// ===============================
// DISPLAY CATEGORIES
// ===============================

function displayCategories() {

    const categoryContainer =
        document.getElementById("categories");

    if (!categoryContainer) {
        return;
    }

    const categories = [
        "All",
        ...new Set(products.map(product => product.category))
    ];

    categoryContainer.innerHTML = "";

    categories.forEach(category => {

        const button = document.createElement("button");

        button.className = "btn";

        button.style.margin = "5px";

        button.textContent = category;

        button.onclick = function () {
            filterCategory(category);
        };

        categoryContainer.appendChild(button);
    });
}

// ===============================
// CATEGORY FILTER
// ===============================

function filterCategory(category) {

    if (category === "All") {

        displayProducts(products);

        return;
    }

    const filtered = products.filter(
        product => product.category === category
    );

    displayProducts(filtered);
}

// ===============================
// ADD TO CART
// ===============================

function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) {
        return;
    }

    const existingItem = cart.find(
        item => item.id === productId
    );

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();

    updateCart();

    alert(product.name + " added to cart!");
}

// ===============================
// UPDATE CART
// ===============================

function updateCart() {

    const cartContainer =
        document.getElementById("cart");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");

    if (!cartContainer) {
        return;
    }

    cartContainer.innerHTML = "";

    let total = 0;
    let itemCount = 0;

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <p style="text-align:center;">
                Your cart is empty.
            </p>
        `;

    } else {

        cart.forEach(item => {

            const itemTotal =
                item.price * item.quantity;

            total += itemTotal;

            itemCount += item.quantity;

            const cartItem =
                document.createElement("div");

            cartItem.className = "cart-item";

            cartItem.innerHTML = `

                <div>

                    <strong>${item.name}</strong>

                    <br>

                    ₹${item.price} × ${item.quantity}

                </div>

                <div>

                    <button 
                        onclick="decreaseQuantity(${item.id})">
                        −
                    </button>

                    <button 
                        onclick="increaseQuantity(${item.id})">
                        +
                    </button>

                    <button 
                        onclick="removeFromCart(${item.id})">
                        Remove
                    </button>

                </div>
            `;

            cartContainer.appendChild(cartItem);
        });
    }

    if (cartCount) {
        cartCount.textContent = itemCount;
    }

    if (cartTotal) {
        cartTotal.textContent =
            "Total: ₹" + total;
    }
}

// ===============================
// INCREASE QUANTITY
// ===============================

function increaseQuantity(productId) {

    const item = cart.find(
        item => item.id === productId
    );

    if (item) {

        item.quantity++;

        saveCart();

        updateCart();
    }
}

// ===============================
// DECREASE QUANTITY
// ===============================

function decreaseQuantity(productId) {

    const item = cart.find(
        item => item.id === productId
    );

    if (!item) {
        return;
    }

    item.quantity--;

    if (item.quantity <= 0) {

        cart = cart.filter(
            item => item.id !== productId
        );
    }

    saveCart();

    updateCart();
}

// ===============================
// REMOVE FROM CART
// ===============================

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart();

    updateCart();
}

// ===============================
// CLEAR CART
// ===============================

function clearCart() {

    cart = [];

    saveCart();

    updateCart();
}

// ===============================
// SAVE CART
// ===============================

function saveCart() {

    localStorage.setItem(
        "susilHerbalCart",
        JSON.stringify(cart)
    );
}

// ===============================
// LOAD CART
// ===============================

function loadCart() {

    const savedCart =
        localStorage.getItem("susilHerbalCart");

    if (savedCart) {

        try {

            cart = JSON.parse(savedCart);

        } catch (error) {

            cart = [];
        }
    }
}

// ===============================
// WHATSAPP ORDER
// ===============================

function orderOnWhatsApp() {

    if (cart.length === 0) {

        alert("Please add products to cart first.");

        return;
    }

    let message =
        "Hello SUSIL HERBAL,%0A%0A";

    message +=
        "I would like to place an order:%0A%0A";

    let total = 0;

    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        message +=
            `${index + 1}. ${item.name}%0A`;

        message +=
            `Qty: ${item.quantity}%0A`;

        message +=
            `Price: ₹${item.price}%0A`;

        message +=
            `Subtotal: ₹${itemTotal}%0A%0A`;
    });

    message +=
        `Total: ₹${total}%0A%0A`;

    message +=
        "Please contact me for order confirmation.";

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(whatsappURL, "_blank");
}

// ===============================
// SCROLL TO PRODUCTS
// ===============================

function showProducts() {

    const section =
        document.getElementById("productsSection");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// ===============================
// CART BUTTON
// ===============================

function showCart() {

    const section =
        document.getElementById("cartSection");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}
