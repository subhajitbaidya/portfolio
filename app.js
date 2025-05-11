// Elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const heroContent = document.querySelector(".hero-content");
const aboutImg = document.querySelector(".about-img img");
const logo = document.querySelector(".logo");
const skillsBtn = document.querySelector(".skills");
const projectsBtn = document.querySelector(".projects");
const footer = document.getElementById("footer");
const contactSection = document.getElementById("contact");
const mainText = document.getElementById("main-text");

let toggleToContact = true;

// Utility: Smooth scroll to a section
const scrollToSection = (selector, offset = 70, delay = 0) => {
  const section = document.querySelector(selector);
  if (!section) return;

  setTimeout(() => {
    window.scrollTo({
      top: section.offsetTop - offset,
      behavior: "smooth",
    });
  }, delay);
};

// Handle anchor links smooth scroll and mobile menu toggle
const initAnchorLinks = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute("href");
      scrollToSection(targetId);

      // Close mobile menu
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
      }
    });
  });
};

// Add active class to nav links on scroll
const initScrollSpy = () => {
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    document.querySelectorAll("section").forEach((section) => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");
      const navLink = document.querySelector(`a[href="#${id}"]`);

      if (scrollY >= top && scrollY < bottom) {
        navLink?.classList.add("active");
      } else {
        navLink?.classList.remove("active");
      }
    });
  });
};

// Hero section animation and scroll logic
const initHeroClick = () => {
  heroContent?.addEventListener("click", (e) => {
    const isMobile = window.innerWidth <= 768;
    const isButton = e.target.closest(".hero-button");
    if (!isButton) {
      scrollToSection("#about", 70, isMobile ? 2000 : 0);
    }

    // Animation logic
    setTimeout(
      () => {
        heroContent.classList.add("animate");
        setTimeout(() => heroContent.classList.remove("animate"), 2000);
      },
      isMobile ? 400 : 0
    );
  });
};

// Image click scroll
const initImageScroll = () => {
  aboutImg?.addEventListener("click", () => scrollToSection("#skills"));
};

// Logo click toggle scroll
const initLogoToggle = () => {
  logo?.addEventListener("click", () => {
    scrollToSection(toggleToContact ? "#contact" : "#home");
    toggleToContact = !toggleToContact;
  });
};

// Skills and Projects navigation
const initQuickNav = () => {
  skillsBtn?.addEventListener("click", () => scrollToSection("#projects"));
  projectsBtn?.addEventListener("click", () => {
    const btn = document.querySelector(".btn");
    btn?.click();
    btn?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
};

// Footer to top
const initFooterScroll = () => {
  footer?.addEventListener("click", () => scrollToSection("#home", 0));
};

const initSocialLinks = () => {
  // Social links scroll to footer
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
};

// Contact click back to top unless paragraph
const initContactScroll = () => {
  contactSection?.addEventListener("click", (e) => {
    if (!e.target.closest("p")) {
      scrollToSection("#home", 0);
    }
  });
};

const initTyping = () => {
  const prefix = document.getElementById("prefix");
  const mainText = document.getElementById("main-text");

  if (!prefix || !mainText) return;

  // Step 1: Type "I am " only once
  const intro = new Typed("#prefix", {
    strings: ["I am "],
    typeSpeed: 50,
    showCursor: false,
    onComplete: () => {
      // Step 2: Start looping dynamic titles
      new Typed("#main-text", {
        strings: [
          "a Software Engineer",
          "a Web Developer",
          "a Tech Enthusiast",
        ],
        typeSpeed: 40,
        backSpeed: 30,
        backDelay: 3000,
        loop: true,
        smartBackspace: true,
        showCursor: false,
      });
    },
  });
};

// Initialize all features
const init = () => {
  initAnchorLinks();
  initScrollSpy();
  initHeroClick();
  initImageScroll();
  initLogoToggle();
  initQuickNav();
  initFooterScroll();
  initSocialLinks();
  initContactScroll();
  initTyping();
  initSocialLinks();
};

// Run
init();
