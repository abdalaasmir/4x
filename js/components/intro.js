//to uncomment muitble lines of code ctrl + /
//to comment muitble lines of code ctrl + /

//intro 1
let intro1 = document.querySelector(".intro1");
let nav = document.getElementById("nav");
let solarSystem = document.getElementById("solar-system");
nav.style.opacity = 0;
solarSystem.style.opacity = 0;
intro1.style.backgroundColor = "orange";

gsap.to(".LogoX .spanLogo", {
  opacity: "1",
  color: "rgb(11, 4, 36)",
  stagger: {
    from: "start",
    amount: 3,
    // repeat: 1,
    // yoyo: true,
  },
  duration: 0.01,
});

//intro 2
setTimeout(() => {
  intro1.style.cursor = "pointer";
  let intro2 = document.querySelector(".intro2");
  let width = window.innerWidth / 10;
  intro1.onclick = function () {
    gsap.to("#nav ", {
      opacity: "1",
      duration: 2,
    });
    gsap.to("#solar-system ", {
      opacity: "1",
      duration: 2,
    });
    intro1.innerHTML = "";
    intro1.classList = "";
    intro2.style.zIndex = "10";
    intro1.style.zIndex = "-10";

    for (let l = 0; l < width; l++) {
      let sqs = document.createElement("div");
      sqs.classList.add("sq-intro2");
      intro2.appendChild(sqs);
    }

    gsap.to(".intro2 div", {
      height: "0%",
      opactiy: 0,
      stagger: {
        from: "start",
        amount: 1,
        // repeat: 1,
        // yoyo: true,
      },
      duration: 0.1,
    });

    intro2.style.overflowY = "hidden";
    setTimeout(() => {
      intro2.style.zIndex = "-1";
      intro2.innerHTML = "";
    }, 1000);
    intro1.classList.remove("intro1");
  };
}, 3000);
