```javascript
// =====================================================
// SUSIL HERBALS
// COMPLETE ONLINE PRODUCT CATALOG
// =====================================================


// =====================================================
// IMAGE FUNCTION
// =====================================================

function onlineImage(keyword, number) {

    const cleanKeyword =
        keyword
            .replace(/&/g, "")
            .replace(/\s+/g, ",");

    return `https://loremflickr.com/700/700/${cleanKeyword}?lock=${number}`;
}


// =====================================================
// PRODUCT LIST
// =====================================================

const products = [

    // ================= HAIR CARE =================

    {
        name: "Hair Oil",
        category: "Hair Care",
        image: onlineImage("hair,oil,herbal", 101)
    },

    {
        name: "Hair Pack",
        category: "Hair Care",
        image: onlineImage("hair,herbal,powder", 102)
    },

    {
        name: "Mooligai Shikakai",
        category: "Hair Care",
        image: onlineImage("shikakai,herbal", 103)
    },


    // ================= SKIN CARE =================

    {
        name: "Nalangu Maavu",
        category: "Skin Care",
        image: onlineImage("herbal,powder,skincare", 201)
    },

    {
        name: "Kasturi Manjal",
        category: "Skin Care",
        image: onlineImage("turmeric,powder", 202)
    },

    {
        name: "Orange Peel Powder",
        category: "Skin Care",
        image: onlineImage("orange,peel,powder", 203)
    },

    {
        name: "Face Glow Oil",
        category: "Skin Care",
        image: onlineImage("face,oil,skincare", 204)
    },

    {
        name: "Potato Powder",
        category: "Skin Care",
        image: onlineImage("potato,powder", 205)
    },

    {
        name: "De-Tan Powder",
        category: "Skin Care",
        image: onlineImage("skincare,powder", 206)
    },

    {
        name: "Face Brightening Powder",
        category: "Skin Care",
        image: onlineImage("face,powder,cosmetic", 207)
    },

    {
        name: "Banana Powder",
        category: "Skin Care",
        image: onlineImage("banana,powder", 208)
    },

    {
        name: "Kuppaimeni Powder",
        category: "Skin Care",
        image: onlineImage("herbal,powder,green", 209)
    },


    // ================= FOOD CARE =================

    {
        name: "Herbal Tea",
        category: "Food Care",
        image: onlineImage("herbal,tea", 301)
    },

    {
        name: "Health Mix",
        category: "Food Care",
        image: onlineImage("health,mix,grain", 302)
    },

    {
        name: "Weight Loss Powder",
        category: "Food Care",
        image: onlineImage("herbal,powder,food", 303)
    },

    {
        name: "Diabetic Powder",
        category: "Food Care",
        image: onlineImage("herbal,powder", 304)
    },

    {
        name: "Moringa Powder",
        category: "Food Care",
        image: onlineImage("moringa,powder", 305)
    },

    {
        name: "Sprouted Ragi Mix",
        category: "Food Care",
        image: onlineImage("ragi,grain,mix", 306)
    },

    {
        name: "Kambu Kanji Mix",
        category: "Food Care",
        image: onlineImage("millet,grain,food", 307)
    },


    // ================= FRESH FARM =================

    {
        name: "Palm Sugar",
        category: "Fresh Farm",
        image: onlineImage("palm,sugar", 401)
    },

    {
        name: "Moringa Honey",
        category: "Fresh Farm",
        image: onlineImage("honey,moringa", 402)
    },

    {
        name: "Ghee",
        category: "Fresh Farm",
        image: onlineImage("ghee,butter", 403)
    },

    {
        name: "Coconut Oil",
        category: "Fresh Farm",
        image: onlineImage("coconut,oil", 404)
    },

    {
        name: "Sesame Oil",
        category: "Fresh Farm",
        image: onlineImage("sesame,oil", 405)
    },

    {
        name: "Groundnut Oil",
        category: "Fresh Farm",
        image: onlineImage("groundnut,oil", 406)
    },

    {
        name: "Karuppu Kavuni Rice",
        category: "Fresh Farm",
        image: onlineImage("black,rice", 407)
    },

    {
        name: "Mapillai Samba Rice",
        category: "Fresh Farm",
        image: onlineImage("red,rice", 408)
    },


    // ================= NEW LAUNCH =================

    {
        name: "ABC Malt",
        category: "New Launch",
        image: onlineImage("health,drink,malt", 501)
    },

    {
        name: "Sweet Potato Powder",
        category: "New Launch",
        image: onlineImage("sweet,potato,powder", 502)
    },

    {
        name: "Sprouted Chocomalt",
        category: "New Launch",
        image: onlineImage("chocolate,malt,drink", 503)
    },

    {
        name: "Nellikai Juice Powder",
        category: "New Launch",
        image: onlineImage("amla,gooseberry,powder", 504)
    },

    {
        name: "Biotin Powder",
        category: "New Launch",
        image: onlineImage("herbal,powder", 505)
    },

    {
        name: "Hair Growth Laddu",
        category: "New Launch",
        image: onlineImage("laddu,sweet", 506)
    },

    {
        name: "Butterfly Pea Tea",
        category: "New Launch",
        image: onlineImage("butterfly,pea,tea", 507)
    },

    {
        name: "Hair Growth Seeds",
        category: "New Launch",
        image: onlineImage("herbal,seeds", 508)
    },


    // ================= COSMETIC - FACE =================

    {
        name: "Rose Day Fairness Cream",
        category: "Cosmetic Collection",
        subcategory: "Face Care",
        image: onlineImage("rose,face,cream", 601)
    },

    {
        name: "Magic Serum",
        category: "Cosmetic Collection",
        subcategory: "Face Care",
        image: onlineImage("face,serum,cosmetic", 602)
    },

    {
        name: "Walnut Scrub",
        category: "Cosmetic Collection",
        subcategory: "Face Care",
        image: onlineImage("walnut,scrub,cosmetic", 603)
    },

    {
        name: "Red Wine Gel",
        category: "Cosmetic Collection",
        subcategory: "Face Care",
        image: onlineImage("face,gel,cosmetic", 604)
    },

    {
        name: "Aloe Vera Gel",
        category: "Cosmetic Collection",
        subcategory: "Face Care",
        image: onlineImage("aloe,vera,gel", 605)
    },

    {
        name: "Charcoal Face Wash",
        category: "Cosmetic Collection",
        subcategory: "Face Care",
        image: onlineImage("charcoal,face,wash", 606)
    },


    // ================= BODY CARE =================

    {
        name: "Vetiver Body Wash",
        category: "Cosmetic Collection",
        subcategory: "Body Care",
        image: onlineImage("body,wash,cosmetic", 701)
    },

    {
        name: "Herbal Henna Body Lotion",
        category: "Cosmetic Collection",
        subcategory: "Body Care",
        image: onlineImage("body,lotion,herbal", 702)
    },

    {
        name: "Narampadi Oil",
        category: "Cosmetic Collection",
        subcategory: "Body Care",
        image: onlineImage("herbal,oil", 703)
    },

    {
        name: "Kojic Goat Milk Soap",
        category: "Cosmetic Collection",
        subcategory: "Body Care",
        image: onlineImage("goat,milk,soap", 704)
    },

    {
        name: "Nalangu Maavu Soap",
        category: "Cosmetic Collection",
        subcategory: "Body Care",
        image: onlineImage("herbal,soap", 705)
    },


    // ================= LIP CARE =================

    {
        name: "Beetroot Lip Balm",
        category: "Cosmetic Collection",
        subcategory: "Lip Care",
        image: onlineImage("lip,balm,cosmetic", 801)
    },

    {
        name: "Beetroot Lip Scrub",
        category: "Cosmetic Collection",
        subcategory: "Lip Care",
        image: onlineImage("lip,scrub,cosmetic", 802)
    },


    // ================= FOOT CARE =================

    {
        name: "Foot Crack Cream",
        category: "Cosmetic Collection",
        subcategory: "Foot Care",
        image: onlineImage("foot,cream,skincare", 901)
    },

    {
        name: "Foot Soak Salt",
        category: "Cosmetic Collection",
        subcategory: "Foot Care",
        image: onlineImage("bath,salt,spa", 902)
    },


    // ================= HAIR COLLECTION =================

    {
        name: "Herbal Shampoo",
        category: "Cosmetic Collection",
        subcategory: "Hair Care Collection",
        image: onlineImage("herbal,shampoo", 1001)
    },

    {
        name: "Hibiscus Shampoo",
        category: "Cosmetic Collection",
        subcategory: "Hair Care Collection",
        image: onlineImage("hibiscus,shampoo", 1002)
    },

    {
        name: "Aloe Vera Baby Shampoo",
        category: "Cosmetic Collection",
        subcategory: "Hair Care Collection",
        image: onlineImage("baby,shampoo,aloe", 1003)
    },

    {
        name: "Aloe Vera Hair Conditioner",
        category: "Cosmetic Collection",
        subcategory: "Hair Care Collection",
        image: onlineImage("hair,conditioner,aloe", 1004)
    }

];


// =====================================================
// ELEMENTS
// =====================================================

const grid =
    document.getElementById("productsGrid");

const search =
    document.getElementById("searchBox");

const select =
    document.getElementById("categorySelect");


// =====================================================
// DISPLAY PRODUCTS
// =====================================================

function showProducts(list) {

    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `
            <div class="no-products">
                <h2>No Products Found</h2>
                <p>Try another search.</p>
            </div>
        `;

        return;
    }


    list.forEach((product, index) => {

        const card =
            document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <div class="image-box">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='https://loremflickr.com/700/700/herbal,product?lock=${index + 5000}'"
                >

                <span class="badge">
                    ${product.category}
                </span>

            </div>


            <div class="product-info">

                <small>
                    ${product.subcategory || product.category}
                </small>

                <h3>
                    ${product.name}
                </h3>

                <button
                    onclick="viewProduct(${products.indexOf(product)})">

                    View Product →

                </button>

            </div>

        `;


        grid.appendChild(card);

    });

}


// =====================================================
// SEARCH + CATEGORY
// =====================================================

function filterProducts() {

    const text =
        search.value.toLowerCase().trim();

    const category =
        select.value;


    const result =
        products.filter(product => {

            const textMatch =

                product.name
                    .toLowerCase()
                    .includes(text)

                ||

                product.category
                    .toLowerCase()
                    .includes(text)

                ||

                (product.subcategory || "")
                    .toLowerCase()
                    .includes(text);


            const categoryMatch =

                category === "All"

                ||

                product.category === category;


            return textMatch && categoryMatch;

        });


    showProducts(result);

}


search.addEventListener(
    "input",
    filterProducts
);


select.addEventListener(
    "change",
    filterProducts
);


// =====================================================
// CATEGORY BUTTONS
// =====================================================

document
    .querySelectorAll(".categories button")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                const category =
                    this.dataset.category;

                select.value = category;

                filterProducts();

                document
                    .getElementById("products")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


// =====================================================
// PRODUCT POPUP
// =====================================================

function viewProduct(index) {

    const product =
        products[index];


    const popup =
        document.createElement("div");

    popup.className =
        "popup";


    popup.innerHTML = `

        <div
            class="popup-bg"
            onclick="closeProduct()">
        </div>


        <div class="popup-content">

            <button
                class="close"
                onclick="closeProduct()">
                ×
            </button>


            <img
                src="${product.image}"
                alt="${product.name}"
                onerror="this.src='https://loremflickr.com/700/700/herbal,product?lock=9999'"
            >


            <div class="popup-info">

                <span>
                    ${product.category}
                </span>

                <h2>
                    ${product.name}
                </h2>

                ${
                    product.subcategory
                    ?
                    `<p>${product.subcategory}</p>`
                    :
                    ""
                }

                <p>
                    Natural herbal product from
                    Susil Herbals.
                </p>


                <a
                    class="popup-whatsapp"
                    href="https://wa.me/919500245437?text=${encodeURIComponent(
                        "Hello Susil Herbals, I am interested in " +
                        product.name
                    )}"
                    target="_blank">

                    💬 Enquire on WhatsApp

                </a>

            </div>

        </div>

    `;


    document.body.appendChild(popup);

    document.body.style.overflow =
        "hidden";

}


// =====================================================
// CLOSE POPUP
// =====================================================

function closeProduct() {

    const popup =
        document.querySelector(".popup");


    if (popup) {

        popup.remove();

    }


    document.body.style.overflow =
        "auto";

}


// =====================================================
// ESCAPE KEY
// =====================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProduct();

        }

    }
);


// =====================================================
// LOAD ALL PRODUCTS
// =====================================================

showProducts(products);

```
