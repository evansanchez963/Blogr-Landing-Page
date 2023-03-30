const headerMobileHamburgerButton = document.getElementsByClassName(
  "header__hamburger-button"
)[0];
const headerMobileCloseButton = document.getElementsByClassName(
  "header__close-button"
)[0];
const headerMobileMenu = document.getElementsByClassName(
  "header__mobile-menu"
)[0];
const headerMobileTabs = document.getElementsByClassName("header__mobile-tab");
const headerMobileSubMenus = document.getElementsByClassName(
  "header__mobile-submenu"
);

const toggleHeaderMobileMenu = () => {
  const isMobileMenuOpen = headerMobileMenu.classList.contains("show");

  if (isMobileMenuOpen) {
    headerMobileHamburgerButton.classList.remove("hide");
    headerMobileCloseButton.classList.remove("show");
    headerMobileMenu.classList.remove("show");
  } else {
    headerMobileHamburgerButton.classList.add("hide");
    headerMobileCloseButton.classList.add("show");
    headerMobileMenu.classList.add("show");
  }
};

const addHeaderMobileMenuEvents = () => {
  window.addEventListener("resize", () => {
    const isMobileMenuOpen = headerMobileMenu.classList.contains("show");

    if (isMobileMenuOpen) toggleHeaderMobileMenu();
  });

  headerMobileHamburgerButton.addEventListener("click", toggleHeaderMobileMenu);

  headerMobileCloseButton.addEventListener("click", toggleHeaderMobileMenu);
};

export default addHeaderMobileMenuEvents;
