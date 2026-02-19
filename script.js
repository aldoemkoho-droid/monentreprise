Java
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous répondrons bientôt.");
    this.reset();
});

document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-menu").classList.toggle("active");
    this.classList.toggle("open"); // ajoute la classe open au hamburger


});

<script>
function googleTranslateElementInit() {
  new google.translate.TranslateElement (
    {
      pageLanguage: 'fr',
      includedLanguages: 'fr,en,es,pt,ar',
      autoDisplay: false
    },
    'google_translate_element'
  );
}
function setLanguage(lang) {
  const select = document.querySelector (".goog-te-combo");
  if (select) {
    select.value = lang;
    select.dispatchEvent (new Event("change"));
  }
}
</script>
<script src=" https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit "></script>

