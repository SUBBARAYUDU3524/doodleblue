function smoothScroll(target) {
  document.getElementById(target).scrollIntoView({ behavior: "smooth" });
}
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  document.querySelector(".carousel").style.transform = `translateX(-${
    currentSlide * 100
  }vw)`;
}

// Next & front Buttons
function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Slide Change Automatically
setInterval(() => {
  nextSlide();
}, 5000);
