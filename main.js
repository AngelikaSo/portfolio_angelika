"use strict";

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// make mobile nav work //
const btnNavEl = document.querySelector(".btn-mobile--nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// STICKY NAV //

const sectionHeroEl = document.querySelector(".home");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// Smooth scrolling navigation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // go to project pages
    if (href !== "#" && href.startsWith("project-1.html"))
      window.open("project-1.html");
    if (href !== "#" && href.startsWith("project-2.html"))
      window.open("project-2.html");
    if (href !== "#" && href.startsWith("project-3.html"))
      window.open("project-3.html");
    if (href !== "#" && href.startsWith("project-4.html"))
      window.open("project-4.html");
    if (href !== "#" && href.startsWith("project-5.html"))
      window.open("project-5.html");
    if (href !== "#" && href.startsWith("project-6.html"))
      window.open("project-6.html");
    if (href !== "#" && href.startsWith("img/Angelika Sowka CV.pdf"))
      window.open("img/Angelika Sowka CV.pdf");
<<<<<<< HEAD
    if (
      href !== "#" &&
      href.startsWith("https://www.linkedin.com/in/angelikasowka/")
    )
      window.open("https://www.linkedin.com/in/angelikasowka/");
=======
    if (href !== "#" && href.startsWith("https://www.linkedin.com/in/angsow/"))
      window.open("https://www.linkedin.com/in/angsow/");
>>>>>>> fa692a6d25dc9748ea7bc40311d0a91a67922709

    if (href !== "#" && href.startsWith("https://github.com/AngelikaSo"))
      window.open("https://github.com/AngelikaSo");

    if (href !== "#" && href.startsWith("https://codepen.io/your-work/"))
      window.open("https://codepen.io/your-work/");

    if (
      href !== "#" &&
      href.startsWith("https://www.behance.net/sowkaangel5b24")
    )
      window.open("https://www.behance.net/sowkaangel5b24");

    // close mobile navigation
    if (link.classList.contains("main-nav--link"))
      headerEl.classList.toggle("nav-open");
  });
});
