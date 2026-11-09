
// Fish Heard Portfolio
// Simple website interactions.

document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", isOpen);
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Close the mobile menu if the screen becomes wider
    window.addEventListener("resize", function () {
        if (window.innerWidth > 800 && navLinks) {
            navLinks.classList.remove("open");
            if (menuButton) {
                menuButton.setAttribute("aria-expanded", "false");
            }
        }
    });

});
