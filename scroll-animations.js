/* =====================================================
   NOIRÉ — SCROLL REVEAL ANIMATIONS
   Automatically tags target elements with .reveal and
   fades/rises them in the first time they enter view.
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Elements that should animate in as you scroll to them.
    const targets = document.querySelectorAll(
        [
            ".product-card",
            ".collection-card",
            ".hero-image",
            ".about",
            ".modal-product-image"
        ].join(", ")
    );

    if (!targets.length) return;

    // Add the base "reveal" class, plus a small stagger delay
    // for items sitting in the same grid row (product/collection cards).
    targets.forEach((el, index) => {

        el.classList.add("reveal");

        const staggerGroup = el.closest(".product-grid, .collection-grid");

        if (staggerGroup) {

            const siblings = Array.from(staggerGroup.children);
            const position = siblings.indexOf(el.closest(".product-card, .collection-card") || el);

            const delay = Math.min(position, 6) * 0.08; // seconds, capped
            el.style.transitionDelay = `${delay}s`;

        }

    });

    // Reveal each element once, the first time it's ~15% visible.
    const observer = new IntersectionObserver(
        (entries, obs) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    obs.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    targets.forEach((el) => observer.observe(el));

});
