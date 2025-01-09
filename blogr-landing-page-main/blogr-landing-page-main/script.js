const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", ()=>{
  menu.classList.toggle("show-menu");
  toggle.classList.toggle("show-icon");
})