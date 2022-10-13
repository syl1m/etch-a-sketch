let mouseIsDown = false;
const grid = document.querySelector('.grid');
setGridSize();

// Create an n-by-n size grid
function setGridSize(n = 16) {
    for (let i = 1; i <= n; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 1; j <= n; j++) {
            const col  = document.createElement('div');
            col.classList.add('col');
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
    checkHover();
}

// Hover + Mousedown effect
function checkHover() {
    const gridBoxes = document.querySelectorAll('.col');

    // Check if mouse is down
    window.addEventListener('mousedown', () => mouseIsDown = true);
    window.addEventListener('mouseup', () => mouseIsDown = false);

    // Check if hovering while mouse is down
    gridBoxes.forEach(box => box.addEventListener('mouseover', addHoverEffect));
    gridBoxes.forEach(box => box.addEventListener('mousedown', addHoverEffect));
}

function addHoverEffect(e) {
    if (mouseIsDown || e.type === 'mousedown') e.target.classList.add('hover');
}

// Change Grid Size
const changeSizeBtn = document.querySelector('.change-size');
changeSizeBtn.addEventListener('click', changeSize);

function changeSize() {
    const gridSize = prompt('Enter a number between 1 and 64 to change the grid size');
    resetGrid(gridSize);
}

// Reset Grid
function resetGrid(n = 16) {
    grid.replaceChildren();
    setGridSize(n);
}