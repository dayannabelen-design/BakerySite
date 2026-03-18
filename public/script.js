const header = document.querySelector(".site-header");
const bakesyUrl =
  document.body.dataset.bakesyUrl || "https://bakesy.shop/b/the-nourishing-loaf";
const bakesyLinks = document.querySelectorAll("[data-bakesy-link]");

bakesyLinks.forEach((link) => {
  link.setAttribute("href", bakesyUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noreferrer noopener");
});

function syncHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });
