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
    const contactSection = document.querySelector("#about");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start", // Adjusts the scroll position to start at the top
      });
    }
  }
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    setTimeout(() => {
      // Animation logic here, e.g.:
      this.classList.add("animate");
      // Remove the class after animation if needed
      setTimeout(() => this.classList.remove("animate"), 600);
    }, 200); // 200ms delay
  } else {
    // Desktop: no delay
    this.classList.add("animate");
    setTimeout(() => this.classList.remove("animate"), 600);
  }
});



document.querySelector(".logo").addEventListener("click", function () {
  const homeSection = document.querySelector("#home");
  if (homeSection) {
    homeSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

document.querySelector(".about-img img").addEventListener("click", function () {
  const homeSection = document.querySelector("#skills");
  if (homeSection) {
    homeSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

document.querySelector(".skills").addEventListener("click", function () {
  const homeSection = document.querySelector("#projects");
  if (homeSection) {
    homeSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

document.querySelector(".projects").addEventListener("click", function () {
  const projectLink = document.querySelector(".btn");
  if (projectLink) {
    projectLink.click(); // Simulate a real click
    projectLink.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

document.querySelector("#footer").addEventListener("click", function () {
  const homeSection = document.querySelector("#home");
  if (homeSection) {
    homeSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

// Typing animation
let typeAnimation = new Typed("#main-text", {
  strings: ["A Software Engineer", "A Web Developer", "A Tech Enthusiast"],
  typeSpeed: 100, // slower typing
  backSpeed: 60, // slower backspacing
  loop: true,
  startDelay: 3000, // delay before typing starts
  backDelay: 100,
  smartBackspace: true, // only backspace what doesn't match the next string
  showCursor: false,
});
