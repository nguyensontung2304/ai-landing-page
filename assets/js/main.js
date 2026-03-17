// const icon = document.querySelector(".header-icon");
// const lists = document.querySelector(".header-list");

// icon.addEventListener("click", function () {
//   lists.classList.toggle("active");
// });

const headerMenuToggle = document.querySelector(".header-menu-toggle");
const mobileMenu = document.querySelector(".mobile-header");
const mobileMenuClose = document.querySelector(
  ".mobile-header-menu-toggle-close",
);
const backdrop = document.querySelector(".back-drop");

headerMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-header-active");
  backdrop.classList.toggle("back-drop-active");
});

mobileMenuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile-header-active");
  backdrop.classList.remove("back-drop-active");
});

backdrop.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile-header-active");
  backdrop.classList.remove("back-drop-active");
});

$(document).ready(function () {
  $(".stories-content-viewport-track").slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
});

const list = document.querySelector(".curriculum-list");
function updateFade() {
  const scrollTop = list.scrollTop;
  const scrollHeight = list.scrollHeight;
  const clientHeight = list.clientHeight;
  console.log(scrollTop);

  list.classList.remove("fade-top", "fade-bottom", "fade-both");

  if (scrollTop === 0) {
    list.classList.add("fade-bottom");
  } else if (scrollTop + clientHeight >= scrollHeight - 1) {
    list.classList.add("fade-top");
  } else {
    list.classList.add("fade-both");
  }
}

list.addEventListener("scroll", updateFade);
updateFade();
