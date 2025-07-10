const text = "Shailesh Kharola";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typed").textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100); // Typing speed (ms)
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
