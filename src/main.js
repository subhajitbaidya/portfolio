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

const isMobile = () => window.innerWidth <= 768;

const initAnchorLinks = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = anchor.getAttribute("href");

      scrollToSection(targetId, 70);

      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
      }
    });
  });
};

const initScrollSpy = () => {
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
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
    }, 100);
  });
};

const initHeroClick = () => {
  const heroContent = document.querySelector(".hero-content");
  heroContent?.addEventListener("click", (e) => {
    if (!e.target.closest(".hero-button")) {
      const aboutSection = document.querySelector("#about");
      if (aboutSection) {
        setTimeout(
          () => {
            aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
          },
          isMobile() ? 2000 : 0
        );
      }
    }
    heroContent.classList.add("animate");
    setTimeout(() => heroContent.classList.remove("animate"), 1000);
  });
};

const initImageScroll = () => {
  document.querySelector(".about-img img")?.addEventListener("click", () => {
    scrollToSection("#skills");
  });
};

const initLogoToggle = () => {
  const logo = document.querySelector(".logo");
  let toggleToContact = true;
  logo?.addEventListener("click", () => {
    scrollToSection(toggleToContact ? "#contact" : "#home");
    toggleToContact = !toggleToContact;
  });
};

const initQuickNav = () => {
  document.querySelector(".skills")?.addEventListener("click", () => {
    scrollToSection("#projects");
  });
};

const initFooterScroll = () => {
  document.querySelector("#footer")?.addEventListener("click", () => {
    scrollToSection("#home", 0);
  });
};

const initSocialLinks = () => {
  document.querySelectorAll(".social-links a").forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      const clickedLink = event.target;
      if (clickedLink) {
        history.replaceState(null, null, " ");
        window.scrollTo(0, 0);

        setTimeout(function () {
          const contactSection = document.querySelector("#footer");
          if (contactSection) {
            contactSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 500);
      } else {
        window.scrollTo(0, 0);
      }
    });
  });
};

const initContactScroll = () => {
  document.querySelector("#contact")?.addEventListener("click", (e) => {
    if (!e.target.closest("p")) {
      document.getElementById("email").click();
    }
  });
};

const initTyping = () => {
  new Typed("#main-text", {
    strings: [
      "A Software Engineer",
      "A Full Stack Developer",
      "A Tech Enthusiast",
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    startDelay: 1500,
    backDelay: 2000,
    smartBackspace: true,
    showCursor: false,
  });
};

const initMenuToggle = () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
};

const initScrollToTopOnLoad = () => {
  window.addEventListener("load", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const init = () => {
  initScrollToTopOnLoad();
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
  initMenuToggle();
};

init();
