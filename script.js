const malaCountElement = document.getElementById('malaCount');
const pointsContainer = document.getElementById('points');
const mantraElement = document.getElementById('mantra');

const totalPoints = 108;

let counter = 0;
let malaCounter = 0;
let mantraVisible = false;

// Create Rudraksha points
for (let i = 0; i < totalPoints; i++) {
    const point = document.createElement('div');
    point.className = 'rudraksha-point';
    pointsContainer.appendChild(point);
    point.style.display = 'none'; 
}

// Tap function
function tap() {
    const points = document.getElementsByClassName('rudraksha-point');
    if (counter < totalPoints) {
        points[counter].style.display = 'inline-block';
        counter++;
        if (counter === totalPoints) {
            updateMalaCount();
            resetPoints();
        }
    }
    toggleMantraVisibility(); 
    updateTapCounter();
    setTimeout(toggleMantraVisibility, 1600); 
}

// Update tap counter
function updateTapCounter() {
    const tapCounterElement = document.getElementById('tapCounter');
    tapCounterElement.textContent = counter;
}

// Update mala count
function updateMalaCount() {
    malaCounter++;
    malaCountElement.textContent = malaCounter;
}

// Reset points
function resetPoints() {
    counter = 0;
    const points = document.getElementsByClassName('rudraksha-point');
    for (let i = 0; i < points.length; i++) {
        points[i].style.display = 'none'; // Hide all Rudraksha points
    }
}

// Toggle mantra visibility
function toggleMantraVisibility() {
    const mantraText = document.getElementById('mantraText');
    mantraText.style.display = mantraText.style.display === 'none' ? 'block' : 'none'; // Toggle display property
}

