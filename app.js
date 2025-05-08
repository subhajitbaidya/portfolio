// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
      }
    }
  });
});

// Add active class to navbar items on scroll
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  // Get all sections
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      const navLink = document.querySelector(`a[href="#${sectionId}"]`);
      if (navLink) {
        navLink.classList.add("active");
      }
    } else {
      const navLink = document.querySelector(`a[href="#${sectionId}"]`);
      if (navLink) {
        navLink.classList.remove("active");
      }
    }
  });
});

// Big button click event
document.querySelector(".hero-content").addEventListener("click", function (e) {
  // Avoid double triggering if the button was clicked
  if (!e.target.closest(".hero-button")) {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start", // Adjusts the scroll position to start at the top
      });
    }
  }
});
