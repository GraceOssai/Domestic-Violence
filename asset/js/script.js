const hamburgerMenu = document.querySelector(".bar");
const unOrderedList = document.querySelector(".nav-list");

hamburgerMenu.addEventListener("click", () =>{
  hamburgerMenu.classList.toggle("active");
  unOrderedList.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburgerMenu.classList.remove("active");
  unOrderedList.classList.remove("active");
}))