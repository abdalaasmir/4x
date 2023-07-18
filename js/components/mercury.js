// const container = document.getElementById("imge-creat");
// let mercuryButton = document.getElementById("mercury-button");

// function sun() {
//   let radius = 150;
//   let sqSize = 25;
//   const numberOfSquares = (radius * (2 * Math.PI)) / sqSize;
//   const angleIncrement = 2 * Math.PI;
//   for (let l = 0; l < 10; l++) {
//     let squaresParent = document.createElement("div");
//     squaresParent.classList.add("murcry-creat");
//     squaresParent.classList.add("sq-parent");

//     container.appendChild(squaresParent);

//     radius -= 25;
//     for (let i = 0; i < numberOfSquares; i++) {
//       const square = document.createElement("div");
//       square.className = "square";
//       const angle = i * angleIncrement;
//       let x =
//         Math.round(radius * Math.cos(angle)) + container.offsetWidth / 2 - 25;
//       let y =
//         Math.round(radius * Math.sin(angle)) + container.offsetHeight / 2 - 25;
//       square.style.transform = `translate(${x}px, ${y}px)`;
//       squaresParent.appendChild(square);
//     }
//   }
//   let anime = gsap.timeline();
//   gsap.to(".sun-creat div", {
//     backgroundColor: "red",
//     stagger: {
//       amount: 2.3,
//       from: "start",
//       repeat: -1,
//       yoyo: true,
//     },
//     duration: 3,
//   });
//   anime.to("#img-creat", 1, { delay: 1.2, ease: Power4.easeOut, y: -500 });
// }
// mercuryButton.onclick = function () {
//   sun();
// };

//// the sun

// function sunCreation() {
//   const container = document.getElementById("imge-creat");

//   let radius = 250;
//   const numberOfSquares = 63;
//   const angleIncrement = (2 * Math.PI) / numberOfSquares;
//   for (let l = 0; l < 10; l++) {
//     let squaresParent = document.createElement("div");
//     squaresParent.classList.add("sun-creat");
//     squaresParent.classList.add("sq-parent");

//     container.appendChild(squaresParent);
//     radius -= 25;
//     for (let i = 0; i < numberOfSquares; i++) {
//       const square = document.createElement("div");
//       square.className = "square";
//       const angle = i * angleIncrement;
//       let x =
//         Math.round(radius * Math.cos(angle)) + container.offsetWidth / 2 - 25;
//       let y =
//         Math.round(radius * Math.sin(angle)) + container.offsetHeight / 2 - 25;
//       square.style.transform = `translate(${x}px, ${y}px)`;
//       squaresParent.appendChild(square);
//     }
//   }
//   let anime = gsap.timeline();
//   gsap.to(".sun-creat div", {
//     backgroundColor: "red",
//     stagger: {
//       amount: 3,
//       from: "start",
//       repeat: -1,
//       yoyo: true,
//     },
//     duration: 2,
//   });
// }
