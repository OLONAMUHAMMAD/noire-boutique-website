/* =====================================================
   NOIRÉ BOUTIQUE
   Main JavaScript
   ===================================================== */
 
 
/* ===============================
   MOBILE MENU
   =============================== */
 
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
 
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
 
        navLinks.classList.toggle("active");
 
        if (navLinks.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }
 
    });
}
 
 
/* ===============================
   CLOSE MENU AFTER CLICK
   =============================== */
 
document.querySelectorAll(".nav-links a").forEach(link => {
 
    link.addEventListener("click", () => {
 
        navLinks.classList.remove("active");
 
        if (menuBtn) {
            menuBtn.textContent = "☰";
        }
 
    });
 
});
 
 
/* ===============================
   NAVBAR SCROLL EFFECT
   =============================== */
 
const navbar = document.querySelector(".navbar");
 
window.addEventListener("scroll", () => {
 
    if (window.scrollY > 50) {
 
        navbar.style.boxShadow =
            "0 5px 30px rgba(0, 0, 0, 0.08)";
 
    } else {
 
        navbar.style.boxShadow = "none";
 
    }
 
});
 
/* ===============================
   PAGE LOADED
   =============================== */
 
document.addEventListener("DOMContentLoaded", () => {
 
    console.log("NOIRÉ Boutique loaded successfully.");
 
});
/* =====================================================
   PRODUCT SEARCH & FILTER
   ===================================================== */
 
const productSearch =
    document.getElementById("productSearch");
 
const categoryButtons =
    document.querySelectorAll(".category-btn");
 
let products = [];
 
const noResults =
    document.getElementById("noResults");
 
 
let selectedCategory = "all";
/* =====================================================
   COLLECTION FILTER
   ===================================================== */
 
function selectCollection(category) {
 
    selectedCategory = category;
 
    categoryButtons.forEach(button => {
 
        button.classList.remove("active");
 
        if (button.dataset.category === category) {
            button.classList.add("active");
        }
 
    });
 
    filterProducts();
 
}
 
 
function filterProducts() {
products =
    document.querySelectorAll(".product-card");
    const searchTerm =
        productSearch.value
            .toLowerCase()
            .trim();
 
    let visibleProducts = 0;
 
 
    products.forEach(product => {
 
        const productName =
            product.dataset.name.toLowerCase();
 
        const productCategory =
            product.dataset.category;
 
 
        const matchesSearch =
            productName.includes(searchTerm);
 
        const matchesCategory =
            selectedCategory === "all" ||
            productCategory === selectedCategory;
 
 
        if (matchesSearch && matchesCategory) {
 
            product.style.display = "";
 
            visibleProducts++;
 
        } else {
 
            product.style.display = "none";
 
        }
 
    });
 
 
    if (visibleProducts === 0) {
 
        noResults.style.display = "block";
 
    } else {
 
        noResults.style.display = "none";
 
    }
 
}
 
 
/* SEARCH */
 
if (productSearch) {
 
    productSearch.addEventListener(
        "input",
        filterProducts
    );
 
}
 
 
/* CATEGORY BUTTONS */
 
categoryButtons.forEach(button => {
 
    button.addEventListener("click", () => {
 
        categoryButtons.forEach(btn => {
 
            btn.classList.remove("active");
 
        });
 
 
        button.classList.add("active");
 
 
        selectedCategory =
            button.dataset.category;
 
 
        filterProducts();
 
    });
 
});
/* =====================================================
   PRODUCT DATA
   ===================================================== */
 
const productData = {
 
    "Classic Linen Shirt": {
        price: 45000,
        category: "men",
        categoryName: "Men's Collection",
        image:
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
        description:
            "A refined linen shirt designed for effortless everyday elegance.",
        sizes: ["S", "M", "L", "XL"]
    },
 
    "Elegant Midi Dress": {
        price: 65000,
        category: "women",
        categoryName: "Women's Collection",
        image:
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
        description:
            "An elegant silhouette designed to bring confidence and timeless style.",
        sizes: ["S", "M", "L", "XL"]
    },
 
    "Signature Blazer": {
        price: 85000,
        category: "men",
        categoryName: "Men's Collection",
        image:
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=85",
        description:
            "A sophisticated blazer crafted for polished occasions and modern style.",
        sizes: ["S", "M", "L", "XL"]
    },
 
    "Leather Handbag": {
    price: 55000,
    category: "accessories",
    categoryName: "Accessories",
    image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    description:
        "A timeless handbag that completes your look with understated elegance.",
    sizes: ["ONE SIZE"]
},
 
"Luxury Abaya": {
    price: 75000,
    category: "women",
    categoryName: "Women's Collection",
    image: "images/luxury-abaya.jpg",
    description:
        "A graceful and elegant abaya designed for a sophisticated and timeless look.",
    sizes: ["S", "M", "L", "XL"]
},
 
"Premium Men's Jalab": {
    price: 25000,
    category: "men",
    categoryName: "Men's Collection",
    image: "images/mens-jalab.jpg",
    description:
        "A refined men's jalab designed for comfort, elegance and a distinguished appearance.",
    sizes: ["S", "M", "L", "XL", "XXL"]
},
 
"Classic Men's Wrist Watch": {
    price: 55000,
    category: "accessories",
    categoryName: "Men's Accessories",
    image: "images/mens-watch.jpg",
    description:
        "A sophisticated men's wrist watch designed to complete a sharp and elegant look.",
    sizes: ["ONE SIZE"]
},
 
"Classic Men's Face Cap": {
    price: 15000,
    category: "accessories",
    categoryName: "Men's Accessories",
    image: "images/mens-face-cap.jpg",
    description:
        "A stylish men's face cap designed for a clean, casual and confident look.",
    sizes: ["ONE SIZE"]
},
 
"Men's Classic Glasses": {
    price: 20000,
    category: "accessories",
    categoryName: "Men's Accessories",
    image: "images/mens-glasses.jpg",
    description:
        "Classic men's glasses designed to add a smart and confident touch to any outfit.",
    sizes: ["ONE SIZE"]
},
 
"Women's Elegant Wrist Watch": {
    price: 45000,
    category: "accessories",
    categoryName: "Women's Accessories",
    image: "images/womens-watch.jpg",
    description:
        "An elegant women's wrist watch designed to complement a sophisticated and stylish look.",
    sizes: ["ONE SIZE"]
},
 
"Men's Elegant Slippers": {
    price: 25000,
    category: "footwear",
    categoryName: "Men's Footwear",
    image: "images/mens-slippers.jpg",
    description:
        "Stylish and comfortable men's slippers designed for everyday wear, combining durability, comfort, and a modern look.",
    sizes: ["40", "41", "42", "43", "44", "45"]
},
"Men's Classic Leather Shoes": {
    price: 35000,
    category: "footwear",
    categoryName: "Men's Footwear",
    image: "images/mens-shoes.jpg",
    description:
        "A classic pair of men's leather shoes designed for comfort, elegance and a polished appearance.",
    sizes: ["40", "41", "42", "43", "44", "45"]
},
"Men's Classic T-Shirt": {
    price: 20000,
    category: "men",
    categoryName: "Men's Collection",
    image: "images/mens-tshirt.jpg",
    description:
        "A stylish and comfortable men's T-shirt designed for a clean, casual and confident look.",
    sizes: ["S", "M", "L", "XL", "XXL"]
},
"Premium Timber Boots": {
    price: 95000,
    category: "men",
    categoryName: "Men's Collection",
    image: "images/timberland-boots.jpg",
    description:
        "Premium rugged boots designed for confident everyday style and lasting comfort.",
    sizes: ["40", "41", "42", "43", "44", "45"]
},
"G-SHOCK Urban Black": {
    price: 30000,
    category: "men",
    categoryName: "Men's Collection",
    image: "images/g-shock.jpg",
    description:
        "A premium rugged timepiece featuring a bold black design, durable construction, and effortless masculine style.",
    sizes: ["One Size"]
},
"Monochrome Luxe Sneakers": {
    price: 25000,
    category: "men",
    categoryName: "Men's Collection",
    image: "images/black-white-shoe.jpg",
    description:
        "Premium black and white sneakers designed with a clean modern look, everyday comfort, and effortless street style.",
    sizes: ["40", "41", "42", "43", "44", "45"]
},
"Executive Leather Belt": {
    price: 15000,
    category: "men",
    categoryName: "Men's Collection",
    image: "images/leather-belt.jpg",
    description:
        "A premium leather belt crafted for a refined masculine look, perfect for formal occasions and everyday elegance.",
    sizes: ["32", "34", "36", "38", "40", "42"]
},
"Classic Stainless Steel Watch": {
    price: 30000,
    category: "men",
    categoryName: "Men's Collection",
    image: "images/stainless-steel-watch.jpg",
    description:
        "A sophisticated stainless steel watch featuring a timeless design, durable construction, and refined masculine appeal.",
    sizes: ["One Size"]
},
"Premium Slim-Fit Jeans": {
    price: 25000,
    category: "men",
    categoryName: "Men's Collection",
    image: "images/premium-jeans.jpg",
    description:
        "Premium slim-fit jeans crafted for a clean modern silhouette, lasting comfort, and effortless everyday style.",
    sizes: ["30", "32", "34", "36", "38", "40", "42"]
},
"Oversized Luxury T-Shirt": {
    price: 45000,
    category: "men",
    categoryName: "Men's Collection",
    image: "images/oversized-luxury-tshirt.jpg",
    description:
        "Premium oversized T-shirt designed with a relaxed fit, soft feel, and modern luxury streetwear aesthetic.",
    sizes: ["S", "M", "L", "XL", "XXL"]
}
};
/* =====================================================
   WISHLIST SYSTEM
   ===================================================== */
 
let wishlist =
    JSON.parse(
        localStorage.getItem("noireWishlist")
    ) || [];
 
function isWishlisted(name) {
 
    return wishlist.some(item => item.name === name);
 
}
 
function saveWishlist() {
 
    localStorage.setItem(
        "noireWishlist",
        JSON.stringify(wishlist)
    );
 
}
 
function addToWishlist(name) {
 
    const product = productData[name];
 
    if (!product) return;
 
    if (isWishlisted(name)) return;
 
    wishlist.push({
        name: name,
        price: product.price,
        image: product.image,
        category: product.category,
        categoryName: product.categoryName
    });
 
    saveWishlist();
 
}
 
function removeFromWishlist(name) {
 
    wishlist = wishlist.filter(
        item => item.name !== name
    );
 
    saveWishlist();
 
}
 
/* WISHLIST BUTTON CLICK — toggles + persists */
 
document.addEventListener("click", (event) => {
 
    const wishlistButton =
        event.target.closest(".wishlist");
 
    if (!wishlistButton) return;
 
 
    const card =
        wishlistButton.closest(".product-card");
 
    const name =
        card ? card.dataset.name : null;
 
    if (!name) return;
 
 
    if (isWishlisted(name)) {
 
        removeFromWishlist(name);
 
        wishlistButton.classList.remove("liked");
        wishlistButton.textContent = "♡";
 
    } else {
 
        addToWishlist(name);
 
        wishlistButton.classList.add("liked");
        wishlistButton.textContent = "♥";
 
    }
 
});
 
/* Restore heart state on any page with product cards
   (called again after renderProducts() rebuilds the grid) */
 
function syncWishlistHearts() {
 
    document.querySelectorAll(".product-card").forEach(card => {
 
        const name = card.dataset.name;
        const heart = card.querySelector(".wishlist");
 
        if (!heart || !name) return;
 
        if (isWishlisted(name)) {
            heart.classList.add("liked");
            heart.textContent = "♥";
        } else {
            heart.classList.remove("liked");
            heart.textContent = "♡";
        }
 
    });
 
}
/* =====================================================
   GENERATE PRODUCT CARDS
   ===================================================== */
 
const productGrid =
    document.getElementById("productGrid");
 
 
function renderProducts() {
 
    if (!productGrid) return;
 
 
    productGrid.innerHTML = "";
 
 
    Object.entries(productData).forEach(
        ([name, product]) => {
 
            const productCard =
                document.createElement("article");
 
            productCard.className =
                "product-card";
 
            productCard.dataset.category =
                product.category;
 
            productCard.dataset.name =
                name;
 
 
            productCard.innerHTML = `
 
                <div class="product-image"
                     style="
                        background-image:
                        url('${product.image}');
                     ">
 
                    <button
                        class="wishlist"
                        aria-label="Add to wishlist">
                        ♡
                    </button>
 
                </div>
 
 
                <div class="product-info">
 
                    <div>
 
                        <h3>
                            ${name}
                        </h3>
 
                        <p>
                            ${product.categoryName}
                        </p>
 
                    </div>
 
                    <strong>
                        ₦${product.price.toLocaleString()}
                    </strong>
 
                </div>
 
 
                <button class="view-product">
                    View Product
                </button>
 
            `;
 
 
            productGrid.appendChild(
                productCard
            );
 
        }
    );
 
    syncWishlistHearts();
 
}
/* START PRODUCT SYSTEM */
 
renderProducts()
 
/* =====================================================
   PRODUCT MODAL
   ===================================================== */
 
const productModal =
    document.getElementById("productModal");
 
const modalOverlay =
    document.getElementById("modalOverlay");
 
const modalClose =
    document.getElementById("modalClose");
 
const modalImage =
    document.getElementById("modalProductImage");
 
const modalName =
    document.getElementById("modalProductName");
 
const modalPrice =
    document.getElementById("modalProductPrice");
 
const modalDescription =
    document.getElementById("modalProductDescription");
    const whatsappOrder =
    document.getElementById("whatsappOrder");
 
 
let selectedProduct = null;
let selectedSize = "";
let quantity = 1;
 
/* ===============================
   OPEN PRODUCT
   =============================== */
 
document.addEventListener("click", (event) => {
 
    const button =
        event.target.closest(".view-product");
 
    if (!button) return;
 
 
    event.stopPropagation();
 
 
    const card =
        button.closest(".product-card");
 
    if (!card) return;
 
 
    const name =
        card.dataset.name;
 
    const product =
        productData[name];
 
    if (!product) return;
 
 
    selectedProduct =
        product;
 
 
    modalName.textContent =
        name;
 
 
    modalPrice.textContent =
        `₦${product.price.toLocaleString()}`;
 
 
    modalDescription.textContent =
        product.description;
 
 
    modalImage.style.backgroundImage =
        `url("${product.image}")`;
 
 
    quantity = 1;
 
    document.getElementById("quantity")
        .textContent = quantity;
 
 
    selectedSize = "";
 
 
    document.querySelectorAll(".size-btn")
        .forEach(btn =>
            btn.classList.remove("active")
        );
const sizesContainer =
    document.querySelector(".sizes");
 
sizesContainer.innerHTML = "";
 
product.sizes.forEach(size => {
 
    const sizeButton =
        document.createElement("button");
 
    sizeButton.className = "size-btn";
 
    sizeButton.dataset.size = size;
 
    sizeButton.textContent = size;
 
    sizesContainer.appendChild(sizeButton);
 
});
 
    productModal.classList.add("active");
 
 
    document.body.style.overflow =
        "hidden";
 
});
 
/* CLOSE PRODUCT */
 
function closeProductModal() {
 
    productModal.classList.remove("active");
 
    document.body.style.overflow = "";
 
}
 
modalClose.addEventListener(
    "click",
    closeProductModal
);
 
modalOverlay.addEventListener(
    "click",
    closeProductModal
);
 
 
/* =====================================================
   SIZE SELECTION
   ===================================================== */
 
document.addEventListener("click", (event) => {
 
    const button =
        event.target.closest(".size-btn");
 
    if (!button) return;
 
 
    document.querySelectorAll(".size-btn")
        .forEach(btn =>
            btn.classList.remove("active")
        );
 
 
    button.classList.add("active");
 
 
    selectedSize =
        button.dataset.size;
 
});
 
/* QUANTITY */
 
document
    .getElementById("increaseQty")
    .addEventListener("click", () => {
 
        quantity++;
 
        document.getElementById("quantity")
            .textContent = quantity;
 
    });
 
 
document
    .getElementById("decreaseQty")
    .addEventListener("click", () => {
 
        if (quantity > 1) {
 
            quantity--;
 
            document.getElementById("quantity")
                .textContent = quantity;
 
        }
 
    });
    /* =====================================================
   SHOPPING CART SYSTEM
   ===================================================== */
 
let cart =
    JSON.parse(
        localStorage.getItem("noireCart")
    ) || [];
 
/* ===============================
   ELEMENTS
   =============================== */
 
const addCartBtn =
    document.getElementById("addCartBtn");
 
const cartDrawer =
    document.getElementById("cartDrawer");
 
const cartOverlay =
    document.getElementById("cartOverlay");
 
const closeCart =
    document.getElementById("closeCart");
 
const cartItems =
    document.getElementById("cartItems");
 
const cartTotal =
    document.getElementById("cartTotal");
 
const cartCounter =
    document.querySelector(".cart-count");
 
const cartIcon =
    document.querySelector(".cart-icon");
 
 
/* ===============================
   ADD TO CART
   =============================== */
 
addCartBtn.addEventListener("click", () => {
 
    if (!selectedProduct) return;
 
    if (!selectedSize) {
 
        alert("Please select a size first.");
 
        return;
 
    }
 
 
    const existingItem = cart.find(item =>
        item.name === modalName.textContent &&
        item.size === selectedSize
    );
 
 
    if (existingItem) {
 
        existingItem.quantity += quantity;
 
    } else {
 
        cart.push({
 
            name: modalName.textContent,
 
            price: selectedProduct.price,
 
            image: selectedProduct.image,
 
            size: selectedSize,
 
            quantity: quantity
 
        });
 
    }
 
 
    updateCart();
 
    closeProductModal();
 
    openCart();
 
});
 
 
/* ===============================
   UPDATE CART
   =============================== */
 
function updateCart() {
 
    const totalItems =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );
 
   if (cartCounter) {
 
    cartCounter.textContent =
        totalItems;
 
    cartCounter.classList.remove("pop");
 
    void cartCounter.offsetWidth;
 
    cartCounter.classList.add("pop");
 
}
 
    localStorage.setItem(
        "noireCart",
        JSON.stringify(cart)
    );
 
    renderCart();
 
}
 
 
/* ===============================
   RENDER CART
   =============================== */
 
function renderCart() {
 
    if (cart.length === 0) {
 
        cartItems.innerHTML = `
 
            <div class="empty-cart">
 
                <div class="empty-cart-icon">
                    ♡
                </div>
 
                <h3>
                    Your bag is empty
                </h3>
 
                <p>
                    Add something beautiful to your collection.
                </p>
 
            </div>
 
        `;
 
        cartTotal.textContent = "₦0";
 
        return;
 
    }
 
 
    cartItems.innerHTML = "";
 
 
    let total = 0;
 
 
    cart.forEach((item, index) => {
 
        total += item.price * item.quantity;
 
 
        const cartItem =
            document.createElement("div");
 
        cartItem.className = "cart-item";
 
 
        cartItem.innerHTML = `
 
            <div
                class="cart-item-image"
                style="background-image:
                url('${item.image}')">
            </div>
 
            <div class="cart-item-info">
 
                <h3>
                    ${item.name}
                </h3>
 
                <p>
                    Size: ${item.size}
                </p>
 
                <strong>
                    ₦${item.price.toLocaleString()}
                </strong>
 
                <div class="cart-item-controls">
 
                    <button
                        onclick="changeCartQuantity(${index}, -1)">
                        −
                    </button>
 
                    <span>
                        ${item.quantity}
                    </span>
 
                    <button
                        onclick="changeCartQuantity(${index}, 1)">
                        +
                    </button>
 
                </div>
 
                <button
                    class="remove-cart"
                    onclick="removeFromCart(${index})">
 
                    Remove
 
                </button>
 
            </div>
 
        `;
 
 
        cartItems.appendChild(cartItem);
 
    });
 
 
    cartTotal.textContent =
        `₦${total.toLocaleString()}`;
 
}
 
 
/* ===============================
   CHANGE QUANTITY
   =============================== */
 
function changeCartQuantity(index, change) {
 
    cart[index].quantity += change;
 
 
    if (cart[index].quantity <= 0) {
 
        cart.splice(index, 1);
 
    }
 
 
    updateCart();
 
}
 
 
/* ===============================
   REMOVE ITEM
   =============================== */
 
function removeFromCart(index) {
 
    cart.splice(index, 1);
 
    updateCart();
 
}
 
 
/* ===============================
   OPEN CART
   =============================== */
 
function openCart() {
 
    cartDrawer.classList.add("active");
 
    document.body.style.overflow = "hidden";
 
}
 
 
/* ===============================
   CLOSE CART
   =============================== */
 
function closeCartDrawer() {
 
    cartDrawer.classList.remove("active");
 
    document.body.style.overflow = "";
 
}
 
 
closeCart.addEventListener(
    "click",
    closeCartDrawer
);
 
 
cartOverlay.addEventListener(
    "click",
    closeCartDrawer
);
 
 
/* ===============================
   CART ICON
   =============================== */
 
if (cartIcon) {
 
    cartIcon.addEventListener("click", () => {
 
        openCart();
 
    });
 
}
/* =====================================================
   WHATSAPP CHECKOUT
   ===================================================== */
 
const whatsappNumber = "2348149231482";
 
const checkoutBtn =
    document.getElementById("checkoutBtn");
 
 
checkoutBtn.addEventListener("click", () => {
 
    if (cart.length === 0) {
 
        alert("Your cart is empty.");
 
        return;
 
    }
 
 
    let message =
        "Hello NOIRÉ Boutique 👋🏽\n\n";
 
    message +=
        "I would like to place an order:\n\n";
 
 
    cart.forEach((item, index) => {
 
        message +=
            `${index + 1}. ${item.name}\n`;
 
        message +=
            `Size: ${item.size}\n`;
 
        message +=
            `Quantity: ${item.quantity}\n`;
 
        message +=
            `Price: ₦${(
                item.price * item.quantity
            ).toLocaleString()}\n\n`;
 
    });
 
 
    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );
 
 
    message +=
        `Total: ₦${total.toLocaleString()}\n\n`;
 
    message +=
        "Please let me know how to proceed with my order. Thank you.";
 
 
    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
 
 
    window.open(
        whatsappURL,
        "_blank"
    );
 
});
/* =====================================================
   RESTORE CART
   ===================================================== */
 
updateCart();
/* =====================================================
   SINGLE PRODUCT WHATSAPP ORDER
   ===================================================== */
 
if (whatsappOrder) {
 
    whatsappOrder.addEventListener("click", () => {
 
        if (!selectedProduct) return;
 
        if (!selectedSize) {
 
            alert("Please select a size first.");
 
            return;
 
        }
 
        const whatsappNumber =
            "2348149231482";
 
        let message =
            "Hello NOIRÉ Boutique 👋🏽\n\n";
 
        message +=
            "I would like to order:\n\n";
 
        message +=
            `Product: ${modalName.textContent}\n`;
 
        message +=
            `Size: ${selectedSize}\n`;
 
        message +=
            `Quantity: ${quantity}\n`;
 
        message +=
            `Price: ₦${(
                selectedProduct.price * quantity
            ).toLocaleString()}\n\n`;
 
        message +=
            "Please let me know how to proceed. Thank you.";
 
        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
 
        window.open(
            whatsappURL,
            "_blank"
        );
 
    });
 
}
/* =====================================================
   NAVBAR SEARCH
   ===================================================== */
 
const searchIcon =
    document.querySelector(".search-icon");
 
if (searchIcon) {
 
    searchIcon.addEventListener("click", () => {
 
        const shop =
            document.getElementById("shop");
 
        if (shop) {
 
            shop.scrollIntoView({
                behavior: "smooth"
            });
 
        }
 
        setTimeout(() => {
 
            if (productSearch) {
 
                productSearch.focus();
 
            }
 
        }, 600);
 
    });
 
}