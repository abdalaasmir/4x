let starsParent = document.getElementById("bg-stars-parent");
let sun = document.querySelector("#sun");

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function creatStarts() {
  for (let l = 0; l < 200; l++) {
    let stars = document.createElement("div");

    stars.classList.add("bg-stars");
    starsParent.appendChild(stars);
    stars.style.top = Math.round(Math.random(1) * windowHeight - 30);
    stars.style.left = Math.round(Math.random(1) * windowWidth - 20);
  }
}

creatStarts();
