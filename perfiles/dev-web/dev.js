
document.addEventListener("DOMContentLoaded", () => {
  highlightCurrentSection();
  smoothScrollLinks();
  initFlipCards();
});

/* Resalta sección activa en el navbar */
function highlightCurrentSection() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar a[href^='#']");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/* Scroll suave al hacer click en anchors */
function smoothScrollLinks() {
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

/* Flip cards on click */
function initFlipCards() {
  const flipCards = document.querySelectorAll(".flip-card");

  flipCards.forEach(card => {
    card.addEventListener("click", function(e) {
      // No ejecutar si hacen clic en el link
      if (e.target.closest(".card-link")) {
        return;
      }
      
      this.classList.toggle("flipped");
    });
  });
}
