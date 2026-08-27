/* =====================================================
   NOIRÉ — WISHLIST PAGE
   Reads the same "noireWishlist" localStorage key used
   by script.js on the homepage, and renders it here.
   ===================================================== */

const wishlistGrid = document.getElementById("wishlistGrid");
const wishlistEmpty = document.getElementById("wishlistEmpty");
const wishlistSubtext = document.getElementById("wishlistSubtext");

function loadWishlist() {

    return JSON.parse(
        localStorage.getItem("noireWishlist")
    ) || [];

}

function saveWishlist(list) {

    localStorage.setItem(
        "noireWishlist",
        JSON.stringify(list)
    );

}

function renderWishlistPage() {

    const wishlist = loadWishlist();

    if (wishlist.length === 0) {

        wishlistGrid.style.display = "none";
        wishlistEmpty.style.display = "block";

        wishlistSubtext.textContent =
            "You haven't saved anything yet.";

        return;

    }

    wishlistGrid.style.display = "grid";
    wishlistEmpty.style.display = "none";

    wishlistSubtext.textContent =
        `${wishlist.length} item${wishlist.length > 1 ? "s" : ""} saved for later.`;

    wishlistGrid.innerHTML = "";

    wishlist.forEach((item) => {

        const card = document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image"
                 style="background-image: url('${item.image}'); position: relative;">

                <button
                    class="wishlist-remove"
                    data-name="${item.name}"
                    aria-label="Remove from wishlist">
                    ✕
                </button>

            </div>

            <div class="product-info">

                <div>
                    <h3>${item.name}</h3>
                    <p>${item.categoryName || ""}</p>
                </div>

                <strong>₦${item.price.toLocaleString()}</strong>

            </div>

            <a href="index.html#shop" class="view-product" style="display: block; text-align: center;">
                View in Shop
            </a>

        `;

        wishlistGrid.appendChild(card);

    });

}

// Remove item on click (event delegation)
document.addEventListener("click", (event) => {

    const removeBtn = event.target.closest(".wishlist-remove");

    if (!removeBtn) return;

    const name = removeBtn.dataset.name;

    const wishlist = loadWishlist().filter(
        item => item.name !== name
    );

    saveWishlist(wishlist);

    renderWishlistPage();

});

renderWishlistPage();
