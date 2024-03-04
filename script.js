const totalPoints = 108;
const malaCountElement = document.getElementById('malaCount');
const pointsContainer = document.getElementById('points');

for (let i = 0; i < totalPoints; i++) {
    const point = document.createElement('div');
    point.className = 'rudraksha-point';
    pointsContainer.appendChild(point);
}

let counter = 0;

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

function updateMalaCount() {
    const currentCount = parseInt(malaCountElement.textContent);
    malaCountElement.textContent = currentCount + 1;
}

function resetPoints() {
    const points = document.getElementsByClassName('rudraksha-point');
    for (let i = 0; i < points.length; i++) {
        points[i].style.display = 'inline-block';
    }
}