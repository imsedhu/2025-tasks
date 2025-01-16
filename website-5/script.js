const toggle = document.querySelector(".nav-toggle");
const header = document.querySelector("header");

toggle.addEventListener("click", ()=>{
  header.classList.toggle("active")
})