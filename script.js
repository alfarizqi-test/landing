// tahun dinamis di footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// toggle navbar mobile
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
    }
  });
}

// smooth scroll + aktifkan link nav
const links = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = [];

links.forEach((link) => {
  const id = link.getAttribute("href").substring(1);
  const section = document.getElementById(id);
  if (section) sections.push({ id, section });

  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const top = target.offsetTop - 72; // offset navbar
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 80;

  sections.forEach(({ id, section }) => {
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (!link) return;
    const offsetTop = section.offsetTop;
    const offsetBottom = offsetTop + section.offsetHeight;

    if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// reveal on scroll
const revealEls = document.querySelectorAll(".reveal");

function handleReveal() {
  const trigger = window.innerHeight * 0.85;

  revealEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// demo handler form (biar tidak reload page)
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Terima kasih! Ini hanya demo. Integrasikan form ke backend atau service email (misalnya Formspree / custom API)."
    );
  });
}
