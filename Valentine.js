const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const success = document.getElementById("success");

let noClicks = 0;

yesBtn.addEventListener("click", () => {
  success.classList.add("show");

  createHearts();
});

noBtn.addEventListener("click", () => {
  noClicks++;

  const messages = [
    "Are you sure? 🥺",
    "Think again! 💕",
    "Please? 🥹",
    "Don't say no! 😭",
    "One more chance? 💗"
  ];

  noBtn.textContent =
    messages[Math.min(noClicks - 1, messages.length - 1)];

  if (noClicks >= 3) {
    noBtn.style.transform =
      `scale(${Math.max(0.55, 1 - noClicks * 0.1)})`;
  }

  if (noClicks >= 6) {
    noBtn.style.display = "none";
  }
});


function createHearts() {
  for (let i = 0; i < 25; i++) {

    const heart = document.createElement("div");

    heart.textContent = "♥";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (15 + Math.random() * 30) + "px";
    heart.style.color = "#ff6fa8";
    heart.style.zIndex = "100";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    const duration = 2 + Math.random() * 3;

    heart.animate(
      [
        {
          transform: "translateY(0) scale(1)",
          opacity: 1
        },
        {
          transform:
            `translateY(-${window.innerHeight + 150}px) scale(1.5)`,
          opacity: 0
        }
      ],
      {
        duration: duration * 1000,
        easing: "ease-out"
      }
    );

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }
}
