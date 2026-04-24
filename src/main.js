const scrollToSection = (selector, offset = 70, delay = 0) => {
  const section = document.querySelector(selector);
  if (!section) return;
  setTimeout(() => {
    window.scrollTo({ top: section.offsetTop - offset, behavior: "smooth" });
  }, delay);
};

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const initHeaderScroll = () => {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });
};

const initAnchorLinks = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToSection(anchor.getAttribute("href"), 70);
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("open");
      }
    });
  });
};

const initScrollSpy = () => {
  let t;
  window.addEventListener("scroll", () => {
    clearTimeout(t);
    t = setTimeout(() => {
      const scrollY = window.scrollY;
      document.querySelectorAll("section[id]").forEach((section) => {
        const top = section.offsetTop - 120;
        const id = section.getAttribute("id");
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (scrollY >= top && scrollY < top + section.offsetHeight) {
          link?.classList.add("active");
        } else {
          link?.classList.remove("active");
        }
      });
    }, 60);
  }, { passive: true });
};

const initMenuToggle = () => {
  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });
};

const initLogoToggle = () => {
  document.getElementById("logoBtn")?.addEventListener("click", () => {
    scrollToSection("#home", 0);
  });
};

const initThemeToggle = () => {
  const btn = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark");
    icon.className = "fas fa-sun";
  }
  btn?.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
};

const initScrollReveal = () => {
  const staggered = [".expertise-grid", ".skills-grid", ".about-highlights"];
  staggered.forEach((sel) => {
    const container = document.querySelector(sel);
    if (!container) return;
    Array.from(container.children).forEach((child, i) => {
      child.classList.add("reveal");
      child.style.transitionDelay = `${i * 80}ms`;
    });
  });

  document.querySelectorAll(
    ".about-text, .contact-inner, .project-card, .section-header"
  ).forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
};

const initTyping = () => {
  if (typeof Typed === "undefined") return;
  new Typed("#main-text", {
    strings: [
      "Solutions Engineer",
      "Full Stack Developer",
      "Tech Enthusiast",
    ],
    typeSpeed: 55,
    backSpeed: 32,
    loop: true,
    startDelay: 900,
    backDelay: 2200,
    smartBackspace: true,
    showCursor: true,
    cursorChar: "|",
  });
};

const init = () => {
  window.scrollTo({ top: 0 });
  initHeaderScroll();
  initAnchorLinks();
  initScrollSpy();
  initMenuToggle();
  initLogoToggle();
  initThemeToggle();
  initScrollReveal();
  initTyping();
};

init();
