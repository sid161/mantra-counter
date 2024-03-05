
const malaCountElement = document.getElementById('malaCount');
const pointsContainer = document.getElementById('points');


const totalPoints = 108;


let counter = 0;
let malaCounter = 0;

for (let i = 0; i < totalPoints; i++) {
    const point = document.createElement('div');
    point.className = 'rudraksha-point';
    pointsContainer.appendChild(point);
}

// Tap function
function tap() {
    const points = document.getElementsByClassName('rudraksha-point');
    if (counter < totalPoints) {
        points[counter].style.display = 'none';
        counter++;
        if (counter === totalPoints) {
            updateMalaCount();
            resetPoints();
        }
    }
}

// Update mala 
function updateMalaCount() {
    malaCounter++;
    malaCountElement.textContent = malaCounter;
}

function resetPoints() {
    counter = 0;
    const points = document.getElementsByClassName('rudraksha-point');
    for (let i = 0; i < points.length; i++) {
        points[i].style.display = 'inline-block';
    }
}
