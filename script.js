function createBoard(dimension) {
    const container = document.querySelector('#container');
    const newBoard = document.querySelector('#new-board');
    const black = document.querySelector('#black');
    const random = document.querySelector('#random');
    const shader = document.querySelector('#shader');

    newBoard.addEventListener('click', askBoardSize);
    container.textContent = '';

    for (let i = 0; i < dimension; i++) {
        const row = document.createElement('div');

        row.classList.add('row'); 
        container.appendChild(row);

        for (let j = 0; j < dimension; j++) {
            const col = document.createElement('div');

            col.classList.add('col'); 
            row.appendChild(col);
        };
    };

    black.addEventListener('click', drawBlack);
    random.addEventListener('click', drawRandom);
    shader.addEventListener('click', drawShader);
    drawBlack();
};

function askBoardSize() {
    let size = +prompt("Choose a new board size (under 100)", 0);

    if (size > 100) {
        return askBoardSize();
    };
    createBoard(size);
};

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};

function drawBlack() {
    const blackCell = document.querySelectorAll('.col');
    
    for (let i = 0; i < blackCell.length; i++) {
        blackCell[i].addEventListener('mouseover', () => {
            blackCell[i].style.cssText = 'background-color: black; border: 1px solid black;';
        });
    };
};

function drawRandom() {
    const randomCell = document.querySelectorAll('.col');
    
    for (let i = 0; i < randomCell.length; i++) {
        randomCell[i].addEventListener('mouseover', () => {
            randomCell[i].style.cssText = `border: 1px solid black; background-color: ${getRandomColor()};`;
        });
    };
};

function drawShader() {
    const shaderCell = document.querySelectorAll('.col');
    
    for (let i = 0; i < shaderCell.length; i++) {
        shaderCell[i].addEventListener('mouseover', () => {

        });
        
    };
};



createBoard(20);
drawBlack();