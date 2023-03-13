"use strick"

let elHunburgerBtn = document.querySelector(".hunburgerbtn");
let elHunburger = document.querySelector(".hunburger");
let elCloseHun = document.querySelector(".close-hun");



elHunburgerBtn.addEventListener("click" , function() {
  elHunburger.style.display = "inline";
  elHunburgerBtn.style.display = "none"
})

elCloseHun.addEventListener("click" , function() {
  elHunburgerBtn.style.display = "inline  "
  elHunburger.style.display = "none";
})

