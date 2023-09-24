const menuToggle = document.querySelector(".menu-toggle");
const navBar = document.querySelector("#nav-bar");

menuToggle.addEventListener("click", () => {
    navBar.classList.toggle("menu-open");
});
