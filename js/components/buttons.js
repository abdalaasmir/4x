let getSquars = document.querySelectorAll(".sq-anime");
getSquars.forEach((element) => {
  element.onmouseenter = function () {
    makingSq(element);
    SquarsAnimationIn(element);
  };
  element.onmouseleave = function () {
    element.innerHTML = `
    <span style="background-color: ${element.firstElementChild.id};display:none"id="${element.firstElementChild.id}">${element.firstElementChild.textContent}</span>
    <div class="flex justify-center ">
      <h1 class="h1" style="z-index: 2" id="">${element.firstElementChild.textContent}</h1>
    </div>
      `;
  };
});

function makingSq(sq) {
  let sqWidth = sq.offsetWidth;

  let sqHight = sq.offsetHeight;

  let childColor = sq.firstElementChild;
  let childStyle = window.getComputedStyle(childColor);
  // Get the parent element's background color
  let color = childStyle.backgroundColor;

  let childCount = Math.floor((sqWidth * sqHight) / 100);

  for (l = 0; l < childCount; l++) {
    let child = document.createElement("div");
    child.classList.add("child");
    child.style.backgroundColor = "orange";

    sq.appendChild(child);
    child.id = l;
  }
}

function SquarsAnimationIn(element) {
  gsap.from(".sq-anime .child", {
    opacity: 0,
    stagger: {
      amount: 0.2,
      from: "end",
      scale: 0,
      // repeat: 1,
      // yoyo: true,
    },
    duration: 0.5,
  });
}
