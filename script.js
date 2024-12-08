// List of boss images
const bossImages = [
    "boss1.jpg",
    "boss2.jpg",
    "boss3.jpg",
    "boss4.jpg",
]; // Add your image filenames here

// Function to get a random number in a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize variables
let maxHP = getRandomNumber(1000, 9999); // Random HP between 1000–9999
let currentHP = maxHP; // Start with random HP
let winCount = 0; // Track wins

// Select a random boss image
let randomImage = bossImages[Math.floor(Math.random() * bossImages.length)];
document.getElementById("boss-image").src = randomImage; // Set initial boss image

// DOM elements
const hpAmountEl = document.getElementById("hp-amount");
const hpFillEl = document.getElementById("hp-fill");
const fightBtn = document.getElementById("fight-btn");
const winCounterEl = document.getElementById("win-counter");

// Function to handle attack logic
fightBtn.addEventListener("click", () => {
    const damage = getRandomNumber(1, 20); // Random damage 1–20
    currentHP -= damage;

    if (currentHP <= 0) {
        winCount++;
        maxHP = getRandomNumber(1000, 9999); // Reset with new random max HP
        currentHP = maxHP; // Set current HP to the new max HP
        randomImage = bossImages[Math.floor(Math.random() * bossImages.length)];
        document.getElementById("boss-image").src = randomImage; // Set new random image

        alert("You defeated the boss! A new one appears!");
        winCounterEl.textContent = winCount; // Update win counter
    }

    // Update HP display
    hpAmountEl.textContent = currentHP;
    hpFillEl.style.width = (currentHP / maxHP) * 100 + "%"; // Calculate width based on new maxHP
});

// Initialize the page
function init() {
    hpAmountEl.textContent = currentHP;
    hpFillEl.style.width = "100%";
    winCounterEl.textContent = winCount;
}

init();
