const NAV_DATA = [
  "Home",
  "About Us",
  "Solutions",
  "Resources",
];

const navDrawer = document.getElementById("navDrawer");
navDrawer.innerHTML = NAV_DATA.map((item) => {
  return `
  <li class="nav-entry relative font-normal text-base leading-150 text-nav max-lg:text-white hover:text-black">
    <a href="#">${item}</a>
  </li>
    `;
}).join("");
// Below is Toggle btn
const menuToggle = document.getElementById("menuToggle");
const navBackdrop = document.getElementById("navBackdrop");
function setNavigation(open) {
  navDrawer.classList.toggle("is-open", open);
  menuToggle.classList.toggle("is-active", open);
  navBackdrop.classList.toggle("is-visible", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  document.body.classList.toggle("overflow-hidden", open);
}

menuToggle.addEventListener("click", () => {
  setNavigation(!navDrawer.classList.contains("is-open"));
});

navBackdrop.addEventListener("click", () => setNavigation(false));
navDrawer.addEventListener("click", (event) => {
  if (event.target.closest("a")) setNavigation(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setNavigation(false);
});
