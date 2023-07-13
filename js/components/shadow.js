let shadow = document.getElementById("shadow");


// let isRunning = false;
// for (let l = 0; l < 5; l++) {
//   let shChild = document.createElement("div");
//   shChild.classList.add("sh-child");
//   shChild.style.width = 600 + l * 200 + "px";
//   shChild.style.height = 300 + l * 200 + "px";
//   shChild.style.borderRadius = `
//   ${300 + l * 100}px ${300 + l * 100}px 0 0
//   `;
//   shChild.style.opacity = 0.5 - l / 10;
//   shadow.appendChild(shChild);

//   shadow.onmouseenter = function () {
//     shChildAnimation(shChild);
//   };
// }

// function shChildAnimation(element) {
//   if (isRunning) {
//     return;
//   }
//   isRunning = true;
//   gsap.to("#shadow .sh-child", {
//     backgroundColor: "orange",
//     opacity: "1",
//     stagger: {
//       from: "start",
//       amount: 0.2,
//       // repeat: 1,
//       // yoyo: true,
//     },
//     duration: 0.5,
//   });
// }
