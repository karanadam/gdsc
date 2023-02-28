// import { app as firebase } from "./Auth/firebase";

alert(
  "Please reduce the zoom level (around 80%) on your browser *if* the content doesnt fit"
);

document.addEventListener("DOMContentLoaded", () => {
  let mouseX, mouseY;
  const ww = window.innerWidth;
  const wh = window.innerHeight;
  let traX, traY;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = (40 * mouseX) / 570 + 40;
    traY = (40 * mouseY) / 570 + 50;
    // console.log(traX);
    const title = document.querySelector(".title");
    title.style.backgroundPosition = `${traX}% ${traY}%`;
  });
});

// typewriter
var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(80)
  .typeString("GDSC is a global program by Google that supports stoodent")
  .pauseFor(100)
  .deleteChars(8)
  .typeString(
    " student developers in enhancing their technical and professional skills, forest"
  )
  .deleteChars(6)
  .typeString(
    "fostering innovation and creating impact through resources and community."
  )
  .pauseFor(5000)
  .start();

// hacker
//home
// {
//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   let interval = null;

//   document.querySelector(".nav-home").onmouseover = (event) => {
//     let iteration = 0;

//     clearInterval(interval);

//     interval = setInterval(() => {
//       event.target.innerText = event.target.innerText
//         .split("")
//         .map((letter, index) => {
//           if (index < iteration) {
//             return event.target.dataset.value[index];
//           }

//           return letters[Math.floor(Math.random() * 26)];
//         })
//         .join("");

//       if (iteration >= event.target.dataset.value.length) {
//         clearInterval(interval);
//       }

//       iteration += 1 / 3;
//     }, 32);
//   };
// }
//teams
{
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  document.querySelector(".nav-teams").onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 32);
  };
}
//events
{
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  document.querySelector(".nav-events").onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 32);
  };
}
//community
{
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  document.querySelector(".nav-comm").onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 32);
  };
}

// const hackerEffect = (id) => {
//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   let interval = null;
//   text = document.getElementById("id");

//   text.onmouseover = (event) => {
//     let iteration = 0;

//     clearInterval(interval);

//     interval = setInterval(() => {
//       event.target.innerText = event.target.innerText
//         .split("")
//         .map((letter, index) => {
//           if (index < iteration) {
//             return event.target.dataset.value[index];
//           }

//           return letters[Math.floor(Math.random() * 26)];
//         })
//         .join("");

//       if (iteration >= event.target.dataset.value.length) {
//         clearInterval(interval);
//       }

//       iteration += 1 / 3;
//     }, 30);
//   };
// };
