const input = {
  img: document.getElementById("planet-img"),
  name: document.getElementById("planet-name"),
  info: document.getElementById("planet-info"),
};
let name = document.getElementById("planet-name");
const sun = {
  button: document.getElementById("sun-button"),
  color: "orange",
  name: "S U N",
  img: "",
  info: "The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma,[18][19] heated to incandescence by nuclear fusion reactions in its core. The Sun radiates this energy mainly as light, ultraviolet, and infrared radiation, and is the most important source of energy for life on Earth.",
};
const mercury = {
  button: document.getElementById("mercury-button"),
  color: "rgb(196, 196, 196)",
  name: "M e r c u r y",
  img: "https://planets-fact-site-mu.vercel.app/assets/planet-mercury.svg",
  info: "the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Eart",
};
const venus = {
  button: document.getElementById("venus-button"),
  color: "rgb(209, 173, 73)",
  name: "V e n u s",
  img: "https://planets-fact-site-mu.vercel.app/assets/planet-venus.svg",
  info: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight",
};
const Earth = {
  button: document.getElementById("earth-button"),
  color: "rgb(29, 26, 211)",
  name: "E a r t h",
  img: "https://planets-fact-site-mu.vercel.app/assets/planet-earth.svg",
  info: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
};
const Mars = {
  button: document.getElementById("mars-button"),
  color: " rgb(255, 51, 0)",
  name: "M a r s",
  img: "https://planets-fact-site-mu.vercel.app/assets/planet-mars.svg",
  info: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
};

const Jupiter = {
  button: document.getElementById("jupiter-button"),
  color: "rgb(255, 145, 0)",
  name: "J u p i t e r",
  img: "https://planets-fact-site-mu.vercel.app/assets/planet-jupiter.svg",
  info: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
};

const Saturn = {
  button: document.getElementById("saturn-button"),
  color: "rgb(255, 145, 0)",
  name: "S a t u r n",
  img: "https://planets-fact-site-mu.vercel.app/assets/planet-saturn.svg",
  info: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
};

const Uranus = {
  button: document.getElementById("uranus-button"),
  color: "rgb(0, 255, 242)",
  name: "U r a n u s",
  img: "https://planets-fact-site-mu.vercel.app/assets/planet-uranus.svg",
  info: "",
};

const Neptun = {
  button: document.getElementById("neptun-button"),
  color: "rgb(15, 79, 163)",
  name: "N e p t u n",
  img: "https://planets-fact-site-mu.vercel.app/assets/planet-neptune.svg",
  info: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
};
let lineC = "";
sun.button.onclick = function () {
  lineC = sun.color;
  transformstionAnime(lineC);
  setTimeout(() => {
    input.img.src = "";
    input.name.style.color = sun.color;
    input.name.textContent = sun.name;
    input.info.textContent = sun.info;
  }, 1000);
};
mercury.button.onclick = function () {
  lineC = mercury.color;

  transformstionAnime(lineC);
  setTimeout(() => {
    input.img.src = mercury.img;
    input.name.textContent = mercury.name;
    input.name.style.color = mercury.color;
    input.info.textContent = mercury.info;
  }, 1000);
};
venus.button.onclick = function () {
  lineC = venus.color;

  transformstionAnime(lineC);
  setTimeout(() => {
    input.img.src = venus.img;
    input.name.textContent = venus.name;
    input.name.style.color = venus.color;
    input.info.textContent = venus.info;
  }, 1000);
};
Earth.button.onclick = function () {
  lineC = Earth.color;

  transformstionAnime(lineC);
  setTimeout(() => {
    input.img.src = Earth.img;
    input.name.textContent = Earth.name;
    input.name.style.color = Earth.color;

    input.info.textContent = Earth.info;
  }, 1000);
};
Mars.button.onclick = function () {
  lineC = Mars.color;

  transformstionAnime(lineC);
  setTimeout(() => {
    input.img.src = Mars.img;
    input.name.textContent = Mars.name;
    input.name.style.color = Mars.color;
    input.info.textContent = Mars.info;
  }, 1000);
};
Jupiter.button.onclick = function () {
  lineC = Jupiter.color;

  transformstionAnime(lineC);
  setTimeout(() => {
    input.img.src = Jupiter.img;
    input.name.style.color = Jupiter.color;
    input.name.textContent = Jupiter.name;
    input.info.textContent = Jupiter.info;
  }, 1000);
};
Saturn.button.onclick = function () {
  lineC = Saturn.color;

  transformstionAnime(lineC);
  setTimeout(() => {
    input.img.src = Saturn.img;
    input.name.style.color = Saturn.color;
    input.name.textContent = Saturn.name;
    input.info.textContent = Saturn.info;
  }, 1000);
};
Uranus.button.onclick = function () {
  lineC = Uranus.color;

  transformstionAnime(lineC);
  setTimeout(() => {
    input.img.src = Uranus.img;
    input.name.style.color = Uranus.color;
    input.name.textContent = Uranus.name;
    input.info.textContent = Uranus.info;
  }, 1000);
};
Neptun.button.onclick = function () {
  lineC = Neptun.color;

  transformstionAnime(lineC);
  setTimeout(() => {
    input.img.src = Neptun.img;
    input.name.style.color = Neptun.color;
    input.name.textContent = Neptun.name;
    input.info.textContent = Neptun.info;
  }, 1000);
};
