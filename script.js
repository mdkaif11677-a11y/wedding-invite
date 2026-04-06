let current = 0;
let interval;

const slides = document.querySelectorAll(".slide");
const music = document.getElementById("music");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function startInvite() {
  // hide start screen
  document.getElementById("start").style.display = "none";

  // play music
  if (music) {
    music.play().catch(() => {});
  }

  // prevent multiple intervals
  if (interval) return;

  // start sliding
  interval = setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 6000);
}

// make button work
window.startInvite = startInvite;