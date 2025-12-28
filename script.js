const heartBox = document.getElementById("hearts");

if (heartBox) {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heartBox.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 500);
}