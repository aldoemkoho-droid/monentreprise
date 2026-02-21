// Menu hamburger
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function(e) {
    e.stopPropagation(); // empêche la fermeture immédiate
    navMenu.classList.toggle("active");
    this.classList.toggle("open");
});

// Fermer le menu quand on clique sur un lien
navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("open");
    });
});

// Fermer le menu quand on clique ailleurs sur la page
document.addEventListener("click", function(e) {
    // Vérifie que le clic n'est pas sur le menu ou le bouton
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("open");
    }
});
