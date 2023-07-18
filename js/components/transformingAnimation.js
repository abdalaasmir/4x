let transfroming = document.getElementById("tranforming");
let linesCount = window.innerWidth / 10;

function transformstionAnime(lineC) {
  transfroming.classList.add("tranforming");
  transfroming.style.display = "block";
  for (let l = 0; l < linesCount; l++) {
    let lines = document.createElement("div");
    lines.classList.add("sq-transforming");
    transfroming.appendChild(lines);
  }
  //   .sq-transforming {
  //     display: inline-block;
  //     background-color: orange;
  //     width: 10px;
  //     height: 100%;
  //   }
  setTimeout(() => {
    //animtion in
    gsap.to("#tranforming div", {
      backgroundColor: `${lineC}`,
      height: "100%",

      stagger: {
        from: "end",
        amount: 0.8,
        // repeat: 1,
        // yoyo: true,
      },
      duration: 0.1,
    });
    //animtion out
    setTimeout(() => {
      gsap.to("#tranforming div", {
        height: "0%",
        stagger: {
          from: "end",
          amount: 0.8,
          // repeat: 1,
          // yoyo: true,
        },
        duration: 0.1,
      });
    }, 1000);
  }, 100);
  setTimeout(() => {
    transfroming.innerHTML = "";
    transfroming.classList.remove("tranforming");
  }, 2100);
}
