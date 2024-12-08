// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvX9PUPDZbjrFciimBZ2sX0j7jbLZAhg",
    authDomain: "raidbossgame-59ed1.firebaseapp.com",
    databaseURL: "https://raidbossgame-59ed1-default-rtdb.firebaseio.com",
    projectId: "raidbossgame-59ed1",
    storageBucket: "raidbossgame-59ed1.appspot.com",
    messagingSenderId: "692473703930",
    appId: "1:692473703930:web:b89bac49b4c9a30c804843",
    measurementId: "G-JGG8BQEL92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Test writing to Firebase
const testRef = ref(db, "test/");
set(testRef, { message: "Hello, Firebase!" });


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
