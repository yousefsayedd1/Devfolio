"use strict";
const themeBtn = document.querySelector(".theme-btn");
const htmlTag = document.querySelector("html");
const primaryTabsContainer = document.querySelector(".primary-tabs");
const tabsContent = document.querySelectorAll(".tab-content");
console.log(tabsContent);
if (localStorage.getItem("theme")) {
  htmlTag.dataset.theme = localStorage.getItem("theme");
}
themeBtn.addEventListener("click", () => {
  htmlTag.dataset.theme = htmlTag.dataset.theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", htmlTag.dataset.theme);
});

// Primary Tabs functionalty

function toggleTabsActivatin(e) {
  const btn = e.target.closest("button");
  [...primaryTabsContainer.children].forEach((btn) => {
    btn.classList.remove("active");
  });
  btn.classList.add("active");
  return btn;
}
function toggleTabsContentActivation(content) {
  tabsContent.forEach((tabBody) => {
    tabBody.classList.remove("active");
    if (tabBody.dataset.tabContent == content) tabBody.classList.add("active");
  });
}
primaryTabsContainer.addEventListener("click", (e) => {
  const btn = toggleTabsActivatin(e);
  const content = btn.dataset.tabBtn;
  toggleTabsContentActivation(content);
});
