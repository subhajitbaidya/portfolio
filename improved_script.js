// Utility function for mobile check
function isMobile() {
  return window.innerWidth <= 768;
}

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute("href"));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
      }
    }
  });
});

// Debounced scroll event for active navbar
let scrollTimeout;
window.addEventListener("scroll", () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");
      const navLink = document.querySelector(`a[href="#${sectionId}"]`);
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLink?.classList.add("active");
      } else {
        navLink?.classList.remove("active");
      }
    });
  }, 100);
});

// Hero content animation and scroll
document
  .querySelector(".hero-content")
  ?.addEventListener("click", function (e) {
    if (!e.target.closest(".hero-button")) {
      const contactSection = document.querySelector("#about");
      if (contactSection) {
        if (isMobile()) {
          setTimeout(() => {
            contactSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 2000);
        } else {
          contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }

    this.classList.add("animate");
    setTimeout(() => this.classList.remove("animate"), 1000);
  });

// Click to scroll events
document.querySelector(".logo")?.addEventListener("click", () => {
  document
    .querySelector("#home")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector(".about-img img")?.addEventListener("click", () => {
  document
    .querySelector("#skills")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector(".skills")?.addEventListener("click", () => {
  document
    .querySelector("#projects")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector(".projects")?.addEventListener("click", () => {
  const projectLink = document.querySelector(".btn");
  if (projectLink) {
    projectLink.click();
    projectLink.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

document.querySelector("#footer")?.addEventListener("click", () => {
  document
    .querySelector("#home")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Typing animation
let typeAnimation = new Typed("#main-text", {
  strings: ["A Software Engineer", "A Web Developer", "A Tech Enthusiast"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  startDelay: 3000,
  backDelay: 100,
  smartBackspace: true,
  showCursor: false,
});
