import Splide from "@splidejs/splide";
//income

if (window.innerWidth >= 767) {
  new Splide(".income__slider", {
    perPage: 1,
    perMove: 1,
    arrows: false,
    pagination: false,
    gap: "20px",
    padding: { right: "40px" },
  }).mount();
}

//partners
new Splide(".partners__slider", {
  type: "loop",
  perPage: 4,
  perMove: 1,
  arrows: false,
  pagination: false,
  // fixedWidth: "446px",
  // fixedHeight: "160px",
  padding: { right: "150px" },
  gap: "30px",
  breakpoints: {
    576: {
      perPage: 1,
    },
  },
}).mount();
