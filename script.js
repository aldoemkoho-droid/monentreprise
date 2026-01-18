Java
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous répondrons bientôt.");
    this.reset();
});

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});