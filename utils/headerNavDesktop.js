const headerProductLink = document.getElementsByClassName(
  "header__tab-product"
)[0];
const headerCompanyLink = document.getElementsByClassName(
  "header__tab-company"
)[0];
const headerConnectLink = document.getElementsByClassName(
  "header__tab-connect"
)[0];
const headerDropdownMenus = document.getElementsByClassName("header__dropdown");
const headerDropdownArrows =
  document.getElementsByClassName("header__tab-arrow");

const hideAllDropdownMenus = () => {
  for (let i = 0; i < headerDropdownMenus.length; i++) {
    let dropdownMenu = headerDropdownMenus[i];
    let dropdownArrow = headerDropdownArrows[i];
    dropdownMenu.classList.remove("show");
    dropdownArrow.classList.remove("show");
  }
};

const hideOtherDropdownMenus = (idxToIgnore) => {
  for (let i = 0; i < headerDropdownMenus.length; i++) {
    if (i === idxToIgnore) continue;
    let dropdownMenu = headerDropdownMenus[i];
    let dropdownArrow = headerDropdownArrows[i];
    dropdownMenu.classList.remove("show");
    dropdownArrow.classList.remove("show");
  }
};

const toggleHeaderDropdownMenu = (idx) => {
  const dropdownMenu = headerDropdownMenus[idx];
  const dropdownArrow = headerDropdownArrows[idx];
  const hasShowClass = dropdownMenu.classList.contains("show");

  if (hasShowClass) {
    dropdownMenu.classList.remove("show");
    dropdownArrow.classList.remove("show");
  } else {
    dropdownMenu.classList.add("show");
    dropdownArrow.classList.add("show");
  }
};

const addHeaderNavDesktopEvents = () => {
  window.addEventListener("resize", () => {
    hideAllDropdownMenus();
  });

  headerProductLink.addEventListener("click", () => {
    hideOtherDropdownMenus(0);
    toggleHeaderDropdownMenu(0);
  });

  headerCompanyLink.addEventListener("click", () => {
    hideOtherDropdownMenus(1);
    toggleHeaderDropdownMenu(1);
  });

  headerConnectLink.addEventListener("click", () => {
    hideOtherDropdownMenus(2);
    toggleHeaderDropdownMenu(2);
  });
};

export default addHeaderNavDesktopEvents;
