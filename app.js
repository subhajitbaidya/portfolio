// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


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

document.querySelector(".hero-content").addEventListener("click", function (e) {
  const isMobile = window.innerWidth <= 768;

  // Avoid double triggering if the button was clicked
  if (!e.target.closest(".hero-button")) {
    const contactSection = document.querySelector("#about");
    if (contactSection) {
      if (isMobile) {
        setTimeout(() => {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 2000); // Delay scroll for mobile
      } else {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }

  // Animation logic (optional delay for mobile)
  if (isMobile) {
    setTimeout(() => {
      this.classList.add("animate");
      setTimeout(() => this.classList.remove("animate"), 2000);
    }, 400);
  } else {
    this.classList.add("animate");
    setTimeout(() => this.classList.remove("animate"), 2000);
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

let toggleToContact = true;

document.querySelector(".logo").addEventListener("click", function () {
  const homeSection = document.querySelector("#home");
  const contactSection = document.querySelector("#contact");

  setTimeout(() => {}, 500); // Delay to ensure the scroll is smooth

  if (toggleToContact && contactSection) {
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else if (!toggleToContact && homeSection) {
    homeSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  toggleToContact = !toggleToContact; // Flip for next click
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
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".social-links a").forEach(function (anchor) {
  anchor.addEventListener("click", function (event) {
    // Store the clicked <a> tag in a variable
    const clickedLink = event.target;
    if (clickedLink) {
      history.replaceState(null, null, " ");
      window.scrollTo(0, 0);

      // After a short delay, navigate to #contact
      setTimeout(function () {
        const contactSection = document.querySelector("#footer");
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth", // Smooth scroll to the section
            block: "start", // Align to the top of the section
          });
        }
      }, 500);
    } else {
      window.scrollTo(0, 0);
    }
  });
});

document.querySelector("#contact").addEventListener("click", function () {
  if (!event.target.closest("p")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

let typeAnimation = new Typed("#main-text", {
  strings: ["A Software Engineer", "A Web Developer", "A Tech Enthusiast"],
  typeSpeed: 40, // slower typing for smoother effect
  backSpeed: 30, // slower backspacing for natural feel
  loop: true,
  startDelay: 1500, // starts a bit sooner
  backDelay: 2500, // more time before backspacing
  smartBackspace: true, // only remove what's necessary
  showCursor: false,
});
