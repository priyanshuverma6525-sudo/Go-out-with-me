const screens =
  document.querySelectorAll(".screen");

const progress =
  document.querySelectorAll(".progress span");

const nextButtons =
  document.querySelectorAll(".next-btn");

const yesButton =
  document.querySelector(".yes-btn");

const noButton =
  document.querySelector(".no-btn");

const restartButton =
  document.querySelector(".restart-btn");


let currentScreen = 0;


/* SHOW SCREEN */

function showScreen(number) {

  screens.forEach(
    (screen, index) => {

      screen.classList.toggle(
        "active",
        index === number
      );

    }
  );


  progress.forEach(
    (bar, index) => {

      bar.classList.toggle(
        "active",
        index <= number
      );

    }
  );


  currentScreen = number;

  createHearts();
}


/* YES */

yesButton.addEventListener(
  "click",
  function () {

    showScreen(1);

  }
);


/* NEXT */

nextButtons.forEach(
  function (button) {

    button.addEventListener(
      "click",
      function () {

        if (
          currentScreen <
          screens.length - 1
        ) {

          showScreen(
            currentScreen + 1
          );

        }

      }
    );

  }
);


/* NO */

let noClicks = 0;

const noMessages = [
  "Are you sure? 🥺",
  "Think again! 💕",
  "Really? 🥹",
  "Please? 💗",
  "One more chance? 😭"
];


noButton.addEventListener(
  "click",
  function () {

    noClicks++;

    const index =
      Math.min(
        noClicks - 1,
        noMessages.length - 1
      );

    noButton.textContent =
      noMessages[index];


    if (noClicks >= 2) {

      noButton.style.transform =
        "scale(0.9)";

    }


    if (noClicks >= 4) {

      noButton.style.transform =
        "scale(0.75)";

    }


    if (noClicks >= 6) {

      noButton.style.display =
        "none";

    }

  }
);


/* RESTART */

restartButton.addEventListener(
  "click",
  function () {

    noClicks = 0;

    noButton.style.display =
      "block";

    noButton.style.transform =
      "scale(1)";

    noButton.textContent =
      "No";

    showScreen(0);

  }
);


/* FLOATING HEARTS */

function createHearts() {

  for (
    let i = 0;
    i < 12;
    i++
  ) {

    const heart =
      document.createElement("div");

    heart.textContent = "♥";

    heart.style.position =
      "fixed";

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.top =
      "100vh";

    heart.style.fontSize =
      15 +
      Math.random() * 25 +
      "px";

    heart.style.color =
      "#ff6fa8";

    heart.style.zIndex =
      "50";

    heart.style.pointerEvents =
      "none";


    document.body.appendChild(
      heart
    );


    const duration =
      2000 +
      Math.random() * 2500;


    heart.animate(
      [
        {
          transform:
            "translateY(0) scale(1)",

          opacity: 1
        },

        {
          transform:
            `translateY(-${window.innerHeight + 150}px) scale(1.5)`,

          opacity: 0
        }
      ],

      {
        duration: duration,

        easing: "ease-out"
      }
    );


    setTimeout(
      function () {

        heart.remove();

      },
      duration
    );

  }

}
