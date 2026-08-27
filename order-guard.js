/* =====================================================
   NOIRÉ — REQUIRE SIGN-IN BEFORE ORDERING
   Blocks WhatsApp checkout/order buttons for logged-out
   users and sends them to sign in first.
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const guardedButtonIds = ["checkoutBtn", "whatsappOrder"];

    guardedButtonIds.forEach((id) => {

        const button = document.getElementById(id);

        if (!button) return;

        // Capture phase so this runs BEFORE script.js's own click
        // handler on the same button, letting us block it early.
        button.addEventListener(
            "click",
            (event) => {

                const user = auth.currentUser;

                if (!user) {

                    event.preventDefault();
                    event.stopImmediatePropagation();

                    window.location.href = "login.html";

                }

            },
            true // useCapture
        );

    });

});
