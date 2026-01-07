const words = [
  "SOC Analyst",
  "Security Analyst",
  "Blue Team Analyst",
  "Incident Responder"
];

let i = 0; // word index
let j = 0; // letter index
let isDeleting = false;

const el = document.getElementById("typewriter");

function typeEffect() {
  const currentWord = words[i];

  if (!isDeleting) {
    el.textContent = currentWord.substring(0, j + 1);
    j++;
  } else {
    el.textContent = currentWord.substring(0, j - 1);
    j--;
  }

  // When word is fully typed
  if (j === currentWord.length && !isDeleting) {
    setTimeout(() => isDeleting = true, 1200);
  }

  // When word is fully deleted
  if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();
