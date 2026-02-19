// Formulaire de contact
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous répondrons bientôt.");
    this.reset();
});

// Menu hamburger
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function(e) {
    e.stopPropagation(); // évite la fermeture immédiate
    navMenu.classList.toggle("active");
    this.classList.toggle("open"); // ajoute la classe open au hamburger
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
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("open");
    }
});

// Google Translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'fr',
      includedLanguages: 'fr,en,es,pt,ar',
      autoDisplay: false
    },
    'google_translate_element'
  );
}

function setLanguage(lang) {
  const select = document.querySelector(".goog-te-combo");
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event("change"));
  }
}
