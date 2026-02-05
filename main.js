const generateBtn = document.getElementById('generate-btn');
const numbersDisplay = document.getElementById('numbers-display');
const modeToggle = document.getElementById('mode-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Function to set the theme
function setTheme(isDarkMode) {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        document.body.classList.remove('dark-mode');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
    localStorage.setItem('darkMode', isDarkMode);
}

// Check for saved theme preference on load
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    setTheme(true);
} else {
    setTheme(false);
}

modeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    setTheme(!isDarkMode);
});

generateBtn.addEventListener('click', () => {
    generateAndDisplayNumbers();
});

function generateAndDisplayNumbers() {
    numbersDisplay.innerHTML = '';
    // Ensure numbers are unique and sorted
    const numbers = generateUniqueNumbers(6, 1, 49).sort((a, b) => a - b);
    numbers.forEach(number => {
        const numberElement = createNumberElement(number);
        numbersDisplay.appendChild(numberElement);
    });
}

function generateUniqueNumbers(count, min, max) {
    const numbers = new Set();
    while (numbers.size < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNumber);
    }
    return Array.from(numbers);
}

function createNumberElement(number) {
    const numberElement = document.createElement('div');
    numberElement.classList.add('number');
    numberElement.textContent = number;
    numberElement.style.backgroundColor = getRandomColor();
    return numberElement;
}

function getRandomColor() {
    const colors = [
        '#ff7979', '#ffbe76', '#f6e58d', '#badc58', '#7ed6df',
        '#e056fd', '#686de0', '#30336b', '#95afc0', '#22a6b3'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}