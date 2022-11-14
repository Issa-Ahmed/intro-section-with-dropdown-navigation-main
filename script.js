"use strict";

// Desktop elements
const featuresTitle = document.getElementById("features-title");
const companyTitle = document.getElementById("company-title");
const featuresDropdown = document.querySelector(".features-dropdown");
const companyDropdown = document.querySelector(".company-dropdown");
const featuresArrowSvg = document.getElementById("f-arrow-icon");
const companyArrowSvg = document.getElementById("c-arrow-icon");
// Mobile elements
const mobileMenu = document.querySelector(".mobile-menu");
const mobileFeaturesTitle = document.getElementById("mobile-features-title");
const mobileCompanyTitle = document.getElementById("mobile-company-title");
const mobileFeaturesArrowSvg = document.getElementById("mobile-f-arrow-icon");
const mobileCompanyArrowSvg = document.getElementById("mobile-c-arrow-icon");
const openMobileMenu = document.querySelector(".open-icon");
const closeMobileMenu = document.querySelector(".close-icon");
const mobileFeaturesDropdown = document.querySelector(
  ".mobile-features-dropdown "
);
const mobileCompanyDropdown = document.querySelector(
  ".mobile-company-dropdown "
);
const overlay = document.querySelector(".overlay");

function toggleDisplay(element, svg) {
  element.classList.toggle("hidden");
  if (svg.classList.contains("down")) {
    svg.classList.add("up");
    svg.classList.remove("down");
  } else {
    svg.classList.remove("up");
    svg.classList.add("down");
  }
}

function hideWhenClickOutside(element, svg) {
  element.classList.add("hidden");
  svg.classList.add("down");
}

function showMobileMenu() {
  mobileMenu.classList.remove("hide-menu");
  mobileMenu.classList.add("show-menu");
  overlay.classList.add("overlay");
  overlay.classList.remove("hidden");
}

function hideMobileMenu() {
  mobileMenu.classList.add("hide-menu");
  mobileMenu.classList.remove("show-menu");
  overlay.classList.remove("overlay");
  overlay.classList.add("hidden");
}
// Desktop dropdown
featuresTitle.addEventListener("click", function () {
  toggleDisplay(featuresDropdown, featuresArrowSvg);
});
featuresTitle.addEventListener("blur", function () {
  hideWhenClickOutside(featuresDropdown, featuresArrowSvg);
});

companyTitle.addEventListener("click", function () {
  toggleDisplay(companyDropdown, companyArrowSvg);
});
companyTitle.addEventListener("blur", function () {
  hideWhenClickOutside(companyDropdown, companyArrowSvg);
});

// Mobile menu functionality
openMobileMenu.addEventListener("click", showMobileMenu);

mobileFeaturesTitle.addEventListener("click", function () {
  toggleDisplay(mobileFeaturesDropdown, mobileFeaturesArrowSvg);
});
mobileCompanyTitle.addEventListener("click", function () {
  toggleDisplay(mobileCompanyDropdown, mobileCompanyArrowSvg);
});

closeMobileMenu.addEventListener("click", hideMobileMenu);
overlay.addEventListener("click", hideMobileMenu);
