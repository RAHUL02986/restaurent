// // script.js
// const slider = document.getElementById('slider');
// const slides = document.querySelectorAll('.slide');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const dotsContainer = document.getElementById('dotsContainer');

// let currentIndex = 0;
// const slideInterval = 3000; // Change slide every 3 seconds
// let autoSlide;

// // Create dots
// slides.forEach((_, index) => {
//     const dot = document.createElement('span');
//     dot.classList.add('dot');
//     dot.addEventListener('click', () => {
//         currentIndex = index;
//         updateSlider();
//     });
//     dotsContainer.appendChild(dot);
// });

// // Update the slider position and dots
// function updateSlider() {
//     const offset = -currentIndex * (500 +20); // 300 is slide width, 20 is margin
//     slider.style.transform = `translateX(${offset}px)`;

//     // Update dots
//     const dots = document.querySelectorAll('.dot');
//     dots.forEach((dot, index) => {
//         dot.classList.toggle('active', index === currentIndex);
//     });
// }

// // Navigation buttons
// prevBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
//     updateSlider();
//     resetAutoSlide();
// });

// nextBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
//     updateSlider();
//     resetAutoSlide();
// });

// // Automatic sliding
// function startAutoSlide() {
//     autoSlide = setInterval(() => {
//         currentIndex = (currentIndex < slides.length -1) ? currentIndex + 1 : 0;
//         updateSlider();
//     }, slideInterval);
// }

// // Reset auto slide on manual navigation
// function resetAutoSlide() {
//     clearInterval(autoSlide);
//     startAutoSlide();
// }

// // Initialize slider
// updateSlider();
// startAutoSlide();
