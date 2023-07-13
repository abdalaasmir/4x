// //to uncomment muitble lines of code ctrl + /
// //to comment muitble lines of code ctrl + /

// //intro 1
// let intro1 = document.querySelector(".intro1");
// let nav = document.getElementById("nav");
// nav.style.opacity = "0";
// intro1.style.backgroundColor = "orange";

// gsap.to(".LogoX .spanLogo", {
//   opacity: "1",
//   color: "rgb(11, 4, 36)",
//   stagger: {
//     from: "start",
//     amount: 3,
//     // repeat: 1,
//     // yoyo: true,
//   },
//   duration: 0.01,
// });

// //intro 2
// setTimeout(() => {
//   intro1.style.cursor = "pointer";
//   let intro2 = document.querySelector(".intro2");
//   intro1.onclick = function () {
//     intro1.innerHTML = "";
//     intro1.classList = "";
//     intro2.style.zIndex = "10";
//     intro1.style.zIndex = "-10";

//     for (let l = 0; l < 87; l++) {
//       let sq = document.createElement("div");
//       sq.style.width = "100%";
//       sq.style.height = "10px";
//       sq.classList.add("sq-intro");
//       intro2.appendChild(sq);
//     }

//     gsap.to(".intro2 .sq-intro", {
//       opacity: 0,
//       stagger: {
//         from: "end",
//         amount: 1,
//         // repeat: 1,
//         // yoyo: true,
//       },
//       duration: 0.4,
//     });
//     setTimeout(() => {
//       intro2.style.zIndex = "-1";
//       intro2.innerHTML = "";
//       nav.style.opacity = 1;
//     }, 1000);
//     intro1.classList.remove("intro1");
//   };
// }, 3000);
