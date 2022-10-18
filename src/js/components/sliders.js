import Splide from "@splidejs/splide";
import { Grid } from "@splidejs/splide-extension-grid";
//income

if (document.querySelector(".income__slider")) {
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
if (document.querySelector(".income__slider")) {
  new Splide(".partners__slider", {
    type: "loop",
    perPage: 4,
    perMove: 1,
    arrows: false,
    pagination: false,
    padding: { right: "150px" },
    gap: "30px",
    autoplay: true,
    speed: 1000,
    breakpoints: {
      1366: {
        perPage: 3,
      },
      992: {
        perPage: 2,
      },
      768: {
        // padding: { right: "500px" },
      },
    },
  }).mount();
}

//gallery slider
if (document.querySelector(".gallery__slider")) {
  new Splide(".gallery__slider", {
    padding: { right: "50px" },
    gap: "30px",
    arrows: false,
    pagination: false,
    grid: {
      rows: 2,
      cols: 2,
      gap: {
        row: "30px",
        col: "30px",
      },
    },
    breakpoints: {
      576: {
        fixedHeight: "350px",
        grid: {
          rows: 1,
          cols: 1,
        },
      },
      360: {
        padding: { right: "20px" },
        gap: "15px",
      },
    },
  }).mount({ Grid });
}

//reviews slider

if (document.querySelector(".reviews__slider")) {
  new Splide(".reviews__slider", {
    arrows: false,
    gap: "20px",
    perPage: 2,
    perMove: 2,
    pagination: false,
    arrows: true,
    arrowPath:
      "M1.54045 1.11247C0.954599 1.69849 0.625488 2.4932 0.625488 3.32184C0.625488 4.15048 0.954599 4.94519 1.54045 5.53122L17.0092 21L1.54045 36.4687C0.971202 37.0581 0.656219 37.8475 0.663339 38.6669C0.670459 39.4862 0.999113 40.27 1.57851 40.8494C2.15791 41.4288 2.9417 41.7575 3.76107 41.7646C4.58043 41.7717 5.36981 41.4567 5.9592 40.8875L23.6373 23.2093C24.2232 22.6233 24.5523 21.8286 24.5523 21C24.5523 20.1713 24.2232 19.3766 23.6373 18.7906L5.9592 1.11247C5.37317 0.52662 4.57846 0.19751 3.74982 0.19751C2.92118 0.19751 2.12647 0.52662 1.54045 1.11247Z",

    breakpoints: {
      992: {
        perPage: 1,
        perMove: 1,
      },
    },
  }).mount();
}
