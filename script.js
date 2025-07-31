// Scroll-to-top button
const scrollBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Testimonial Slider Logic
const sliderTrack = document.getElementById('sliderTrack');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const cards = document.querySelectorAll('.testimonial-card');

let currentIndex = 0;

// Get cards per slide based on screen width
function getCardsPerSlide() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024) return 3;
  if (screenWidth >= 768) return 2;
  return 1;
}

function updateSliderPosition() {
  const cardWidth = cards[0].offsetWidth + 30; // 30px = horizontal margin
  const offset = -(cardWidth * currentIndex);
  sliderTrack.style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener('click', () => {
  const maxIndex = cards.length - getCardsPerSlide();
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSliderPosition();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

// Reset slider on window resize
window.addEventListener('resize', () => {
  currentIndex = 0;
  updateSliderPosition();
});