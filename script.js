const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


// Projects carousel — Swiper.js
const projectsSwiper = document.querySelector('.projects-swiper');
if (projectsSwiper && typeof Swiper !== 'undefined') {
  new Swiper(projectsSwiper, {
    slidesPerView: 1,
    spaceBetween: 22,
    speed: 650,
    grabCursor: true,
    watchOverflow: true,
    keyboard: { enabled: true },
    navigation: {
      nextEl: projectsSwiper.querySelector('.swiper-button-next'),
      prevEl: projectsSwiper.querySelector('.swiper-button-prev')
    },
    pagination: {
      el: projectsSwiper.querySelector('.swiper-pagination'),
      clickable: true
    },
    breakpoints: {
      700: { slidesPerView: 2, spaceBetween: 22 },
      1050: { slidesPerView: 3, spaceBetween: 22 }
    }
  });
}
