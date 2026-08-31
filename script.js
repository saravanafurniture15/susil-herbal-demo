```javascript
// ======================================================
// SUSIL HERBAL - PRODUCT CATALOG
// ======================================================


// ------------------------------------------------------
// PRODUCT DATA
// ------------------------------------------------------

const products = [

    {
        id: 1,
        name: "Aloe Vera",
        category: "Skin Care",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800"
    },

    {
        id: 2,
        name: "Neem Herbal Powder",
        category: "Herbal Powder",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800"
    },

    {
        id: 3,
        name: "Turmeric Powder",
        category: "Herbal Powder",
        price: "₹249",
        image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800"
    },

    {
        id: 4,
        name: "Amla Powder",
        category: "Herbal Powder",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1598514982901-ae627d1f7c88?w=800"
    },

    {
        id: 5,
        name: "Ashwagandha",
        category: "Herbal Powder",
        price: "₹399",
        image: "https://images.unsplash.com/photo-1608571423539-e951a9f6f4c8?w=800"
    },

    {
        id: 6,
        name: "Tulsi Herbal Tea",
        category: "Herbal Tea",
        price: "₹249",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800"
    },

    {
        id: 7,
        name: "Moringa Powder",
        category: "Herbal Powder",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=800"
    },

    {
        id: 8,
        name: "Herbal Hair Oil",
        category: "Hair Care",
        price: "₹349",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800"
    },

    {
        id: 9,
        name: "Herbal Face Care",
        category: "Skin Care",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800"
    },

    {
        id: 10,
        name: "Herbal Soap",
        category: "Skin Care",
        price: "₹149",
        image: "https://images.unsplash.com/photo-1607006344380-b6775a0824d7?w=800"
    },

    {
        id: 11,
        name: "Brahmi Powder",
        category: "Herbal Powder",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=800"
    },

    {
        id: 12,
        name: "Shikakai Powder",
        category: "Hair Care",
        price: "₹249",
        image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800"
    }

];


// ------------------------------------------------------
// ELEMENTS
// ------------------------------------------------------

const productsGrid =
    document.getElementById("productsGrid");

const searchInput =
    document.getElementById("productSearch");

const categoryFilter =
    document.getElementById("categoryFilter");


// ------------------------------------------------------
// DISPLAY PRODUCTS
// ------------------------------------------------------

function displayProducts(productList) {

    if (!productsGrid) {
        console.error("productsGrid not found");
        return;
    }

    productsGrid.innerHTML = "";


    if (productList.length === 0) {

        productsGrid.innerHTML = `
            <div class="no-products">
                <h3>No products found</h3>
                <p>Try another product or category.</p>
            </div>
        `;

        return;
    }


    productList.forEach(product => {

        const card =
            document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="imageError(this)"
                >

                <span class="category-badge">
                    ${product.category}
                </span>

            </div>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    Natural Herbal Product
                </p>


                <div class="product-bottom">

                    <strong>
                        ${product.price}
                    </strong>

                    <button
                        onclick="openProduct(${product.id})">
                        View
                    </button>

                </div>

            </div>

        `;


        productsGrid.appendChild(card);

    });

}


// ------------------------------------------------------
// IMAGE ERROR HANDLER
// ------------------------------------------------------

function imageError(img) {

    console.log("Image failed:", img.src);

    img.src =
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800";

}


// ------------------------------------------------------
// SEARCH + FILTER
// ------------------------------------------------------

function filterProducts() {

    const search =
        searchInput.value
        .toLowerCase()
        .trim();

    const category =
        categoryFilter.value;


    const filtered =
        products.filter(product => {

            const matchesSearch =

                product.name
                    .toLowerCase()
                    .includes(search)

                ||

                product.category
                    .toLowerCase()
                    .includes(search);


            const matchesCategory =

                category === "All"

                ||

                product.category === category;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    displayProducts(filtered);

}


// ------------------------------------------------------
// SEARCH EVENT
// ------------------------------------------------------

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterProducts
    );

}


// ------------------------------------------------------
// CATEGORY EVENT
// ------------------------------------------------------

if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterProducts
    );

}


// ------------------------------------------------------
// PRODUCT POPUP
// ------------------------------------------------------

function openProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) return;


    const popup =
        document.createElement("div");

    popup.className =
        "product-popup";


    popup.innerHTML = `

        <div
            class="popup-overlay"
            onclick="closePopup()">
        </div>


        <div class="popup-box">

            <button
                class="popup-close"
                onclick="closePopup()">
                ×
            </button>


            <div class="popup-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="imageError(this)"
                >

            </div>


            <div class="popup-details">

                <span>
                    ${product.category}
                </span>

                <h2>
                    ${product.name}
                </h2>

                <p>
                    Natural herbal product from
                    Susil Herbal.
                </p>

                <h3>
                    ${product.price}
                </h3>


                <button
                    class="whatsapp-btn"
                    onclick="whatsappEnquiry('${product.name}')">

                    💬 WhatsApp Enquiry

                </button>

            </div>

        </div>

    `;


    document.body.appendChild(popup);

    document.body.style.overflow =
        "hidden";

}


// ------------------------------------------------------
// CLOSE POPUP
// ------------------------------------------------------

function closePopup() {

    const popup =
        document.querySelector(
            ".product-popup"
        );


    if (popup) {

        popup.remove();

    }


    document.body.style.overflow =
        "auto";

}


// ------------------------------------------------------
// WHATSAPP
// ------------------------------------------------------

function whatsappEnquiry(productName) {

    const phone =
        "919500245437";


    const message =
        `Hello Susil Herbal,

I am interested in:
${productName}

Please share more details.`;


    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank"
    );

}


// ------------------------------------------------------
// ESC KEY
// ------------------------------------------------------

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closePopup();

        }

    }
);


// ------------------------------------------------------
// INITIAL LOAD
// ------------------------------------------------------

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayProducts(products);

    }
);
```
