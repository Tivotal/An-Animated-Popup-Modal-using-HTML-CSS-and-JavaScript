/* Created by Tivotal */

let section = document.querySelector("section");
let hireBtn = document.querySelector(".button");
let closeBtn = document.querySelector(".close");
let cancelBtn = document.querySelector(".cancel");
let textArea = document.querySelector("textarea");

hireBtn.addEventListener("click", () => {
  section.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  section.classList.remove("active");
  textArea.value = "";
});

cancelBtn.addEventListener("click", () => {
  section.classList.remove("active");
  textArea.value = "";
});
