// initialize default 16x16 grid

const container = document.querySelector('.grid-container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.style.width = '30px';
        grid.style.height = '30px';
        grid.classList.add('grid');
        container.appendChild(grid);
    }
}

// adding functionality of  set size button

function setSize() {
    let size = prompt("Set amount of squares per side of grid:");
    while (size > 100) {
        size = prompt("ERROR: Amount must be 100 squares or less!");
    }
    const side = 480 / size;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.style['grid-template-rows'] = `repeat(${size}, ${side}px)`;
    container.style['grid-template-columns'] = `repeat(${size}, ${side}px)`;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const grid = document.createElement('div');
            grid.style.width = `${side}px`;
            grid.style.height = `${side}px`;
            grid.classList.add('grid');
            container.appendChild(grid);
        }
    }
    const pixels = document.querySelectorAll('.grid');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', addColor);
    });
}

const sizeButton = document.querySelector('button#size');
sizeButton.addEventListener('click', setSize);

// adding functionality of hover to draw

function addColor(e) {
    e.target.style.backgroundColor = '#000';
}

const pixels = document.querySelectorAll('.grid');
pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', addColor);
});

// adding functionality to clear button

function clear() {
    const pixels = document.querySelectorAll('.grid');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = '#fff';
    });
}

const clearButton = document.querySelector('button#clear');
clearButton.addEventListener('click', clear);