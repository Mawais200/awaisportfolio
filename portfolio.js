const typingText = document.querySelector('.typing');
const digitalMarketerText = document.querySelector('.digital-marketer');

const typingStrings = ['Front-end Developer', 'Digital Marketer'];
let typingIndex = 0;
let charIndex = 0;

function typingEffect() {
    if (charIndex < typingStrings[typingIndex].length) {
        typingText.textContent += typingStrings[typingIndex][charIndex];
        charIndex++;
        setTimeout(typingEffect, 100);
    } else {
        charIndex = 0;
        typingIndex = (typingIndex + 1) % typingStrings.length;
        typingText.textContent = '';
        setTimeout(typingEffect, 2000); // pause for 2 seconds
    }
}

typingEffect();

// Show/Hide Digital Marketer text
function toggleDigitalMarketer() {
    digitalMarketerText.classList.toggle('visible');
}

// Initially hide Digital Marketer text
digitalMarketerText.classList.remove('visible');

// Show Digital Marketer text after typing effect finishes
setTimeout(() => {
    toggleDigitalMarketer();
}, 4000); // adjust timing according to typing effect duration

// Add event listener to nav toggler
const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', () => {
    // Add functionality here, e.g., toggle navigation menu
});

// Other JavaScript functionality (e.g., smooth scrolling, animations)
// can be added here
