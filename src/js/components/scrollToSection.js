const menuLinks = document.querySelectorAll("[data-goto]");
const menu = document.querySelector(".menu");

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLinks) => {
    menuLinks.addEventListener("click", (e) => {
      const menuLink = e.target;
      if(menu.classList.contains("menu--active")) {
        menu.classList.remove("menu--active");
        document.body.classList.remove("dis-scroll");
        document.querySelector(".burger").classList.remove("burger--active");
      }
      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top +
          pageYOffset -
          document.querySelector(".header").offsetHeight;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });


        e.preventDefault();
      }
    });
  });


}
