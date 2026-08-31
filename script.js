```javascript
// ==========================================
// SUSIL HERBAL - DEMO PRODUCT CATALOG
// Online Images - No image upload required
// ==========================================

const products = [
    {
        id: 1,
        name: "Aloe Vera Herbal Gel",
        category: "Skin Care",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Neem Herbal Powder",
        category: "Herbal Powder",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1615485737651-9e4c5c7c3b4c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Turmeric Herbal Powder",
        category: "Herbal Powder",
        price: "₹249",
        image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Amla Herbal Powder",
        category: "Hair Care",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Ashwagandha Powder",
        category: "Herbal Powder",
        price: "₹399",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Tulsi Herbal Tea",
        category: "Herbal Tea",
        price: "₹249",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "Moringa Herbal Powder",
        category: "Herbal Powder",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Herbal Hair Oil",
        category: "Hair Care",
        price: "₹349",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        name: "Herbal Face Wash",
        category: "Skin Care",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        name: "Herbal Soap",
        category: "Skin Care",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1607006344380-b6775a0824d7?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        name: "Brahmi Herbal Powder",
        category: "Herbal Powder",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 12,
        name: "Shikakai Herbal Powder",
        category: "Hair Care",
        price: "₹249",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
    }
];


// ==========================================
// GET PRODUCTS CONTAINER
// ==========================================

const productsContainer =
    document.getElementById("products");


// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function displayProducts(list = products) {

    if (!productsContainer) {
        console.error("Products container not found!");
        return;
    }

    productsContainer.innerHTML = "";

    if (list.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-products">
                <h3>No products found</h3>
                <p>Please try another search.</p>
            </div>
        `;
        return;
    }

    list.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80'"
                >
            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>${product.name}</h3>

                <div class="product-bottom">

                    <span class="product-price">
                        ${product.price}
                    </span>

                    <button
                        class="view-btn"
                        onclick="viewProduct(${product.id})">
                        View Product
                    </button>

                </div>

            </div>
        `;

        productsContainer.appendChild(card);
    });
}


// ==========================================
// PRODUCT DETAILS
// ==========================================

function viewProduct(id) {

    const product = products.find(p => p.id === id);

    if (!product) return;

    const modal = document.createElement("div");

    modal.className = "product-modal";

    modal.innerHTML = `

        <div class="modal-overlay"
             onclick="closeProductModal()"></div>

        <div class="modal-content">

            <button
                class="modal-close"
                onclick="closeProductModal()">
                ×
            </button>

            <div class="modal-image">
                <img
                    src="${product.image}"
                    alt="${product.name}">
            </div>

            <div class="modal-details">

                <span class="product-category">
                    ${product.category}
                </span>

                <h2>${product.name}</h2>

                <p class="modal-description">
                    Premium quality herbal product from
                    Susil Herbal. Natural ingredients and
                    carefully selected herbal goodness.
                </p>

                <div class="modal-price">
                    ${product.price}
                </div>

                <button
                    class="order-btn"
                    onclick="orderProduct('${product.name}')">
                    Enquire Now
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(modal);

    document.body.style.overflow = "hidden";
}


// ==========================================
// CLOSE MODAL
// ==========================================

function closeProductModal() {

    const modal =
        document.querySelector(".product-modal");

    if (modal) {
        modal.remove();
    }

    document.body.style.overflow = "auto";
}


// ==========================================
// ENQUIRE BUTTON
// ==========================================

function orderProduct(productName) {

    const message =
        `Hello Susil Herbal, I am interested in ${productName}. Please share product details.`;

    const whatsappNumber = "919500245437";

    const url =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}


// ==========================================
// SEARCH PRODUCTS
// ==========================================

function searchProducts() {

    const searchInput =
        document.getElementById("productSearch");

    if (!searchInput) return;

    const searchText =
        searchInput.value.toLowerCase().trim();

    const filtered =
        products.filter(product =>
            product.name.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText)
        );

    displayProducts(filtered);
}


// ==========================================
// CATEGORY FILTER
// ==========================================

function filterProducts(category) {

    if (category === "All") {

        displayProducts(products);

        return;
    }

    const filtered =
        products.filter(product =>
            product.category === category
        );

    displayProducts(filtered);
}


// ==========================================
// INITIAL LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    displayProducts(products);

    const searchInput =
        document.getElementById("productSearch");

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            searchProducts
        );
    }

});


// ==========================================
// ESC KEY CLOSE MODAL
// ==========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeProductModal();

    }

});
```
