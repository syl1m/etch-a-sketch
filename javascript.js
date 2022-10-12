// Create grid of divs

const grid = document.querySelector('.grid');

for (let i = 1; i <= 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 1; j <= 16; j++) {
        const col  = document.createElement('div');
        col.classList.add('col');
        row.appendChild(col);
    }
    grid.appendChild(row);
}

// Hover + Mousedown effect
let mouseIsDown = false;
const gridBoxes = document.querySelectorAll('.col');

// Check if mouse is down
window.addEventListener('mousedown', () => mouseIsDown = true);
window.addEventListener('mouseup', () => mouseIsDown = false);

// Check if hovering while mouse is down
gridBoxes.forEach(box => box.addEventListener('mouseover', addHoverEffect));
gridBoxes.forEach(box => box.addEventListener('mousedown', addHoverEffect));

function addHoverEffect(e) {
    if (mouseIsDown || e.type === 'mousedown') e.target.classList.add('hover');
}