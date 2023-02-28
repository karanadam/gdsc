// text-clip effect
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

// hacker
//home
{
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  document.querySelector(".nav-home").onmouseover = (event) => {
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
//   {
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     let interval = null;

//     document.querySelector(".nav-events").onmouseover = (event) => {
//       let iteration = 0;

//       clearInterval(interval);

//       interval = setInterval(() => {
//         event.target.innerText = event.target.innerText
//           .split("")
//           .map((letter, index) => {
//             if (index < iteration) {
//               return event.target.dataset.value[index];
//             }

//             return letters[Math.floor(Math.random() * 26)];
//           })
//           .join("");

//         if (iteration >= event.target.dataset.value.length) {
//           clearInterval(interval);
//         }

//         iteration += 1 / 3;
//       }, 32);
//     };
//   }
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
