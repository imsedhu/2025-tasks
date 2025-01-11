const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-list");

toggle.addEventListener("click", ()=>{
  menu.classList.toggle("show-menu");
})