let circle = document.querySelectorAll(".circle");
// circle.forEach((element) => {
//   let widthCount = 50;
//   let heightCount = 50;
//   let totalCount = widthCount * heightCount;
//   creatCircle(element, totalCount);
// });
// function creatCircle(parent, tCount) {
//   for (let l = 0; l < tCount; l++) {
//     let sq = document.createElement("div");
//     sq.id = 1 + l;
//     sq.classList.add("child");
//     parent.appendChild(sq);
//   }
// }
function go() {
  gsap.to(".circle ", {
    scale: 0,
  });
}
