/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

toggle.forEach((element) => {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll("nav ul li a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

/* mudar o header da página quando der scroll */
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;
const changeHeaderWhenScroll = () => {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
};

/* Testimonials carousel slider swiper */
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
`,
  { interval: 100 }
);
/* Button back to top */
const backToTopButton = document.querySelector(".back-to-top");
const backToTop = () => {
  if (window.scrollY >= 800) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll("main section[id]");
const activeMenuAtCurrentSection = () => {
  const checkpoint = window.scrollY + (window.innerHeight / 8) * 4;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    const menuItem = document.querySelector(
      `nav ul li a[href*="${sectionId}"]`
    );
    if (menuItem) {
      if (checkpointStart && checkpointEnd) {
        menuItem.classList.add("active");
      } else {
        menuItem.classList.remove("active");
      }
    }
  });
};

window.addEventListener("scroll", () => {
  changeHeaderWhenScroll();
  backToTop();
  activeMenuAtCurrentSection();
});
