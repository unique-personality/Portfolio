// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// script.js
const projectsContainer = document.querySelector('.projects');
const projectCards = document.querySelectorAll('.project-card');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;

// Show the first project initially
showProject(currentIndex);

// Right Arrow Click
rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % projectCards.length;
  showProject(currentIndex);
});

// Left Arrow Click
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + projectCards.length) % projectCards.length;
  showProject(currentIndex);
});

// Function to show the current project
function showProject(index) {
  // Hide all projects
  projectCards.forEach((card) => card.classList.remove('active'));

  // Show the current project
  projectCards[index].classList.add('active');
}