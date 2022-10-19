const menuLinks = document.querySelectorAll("[data-goto]");

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLinks) => {
    menuLinks.addEventListener("click", onMenuClick);
  });

  function onMenuClick(e) {
    const menuLink = e.target;
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
  }
}
