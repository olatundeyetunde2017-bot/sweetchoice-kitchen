
// SWEETCHOICE KITCHEN JAVASCRIPT

// MOBILE NAVIGATION
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");

        const isOpen = navbar.classList.contains("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    // CLOSE MENU AFTER CLICKING A LINK
    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });
}

// FOOTER YEAR
const footerYear = new Date().getFullYear();

console.log("Welcome to Sweetchoice Kitchen!");
console.log("Website successfully loaded in " + footerYear);
