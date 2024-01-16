const container = document.querySelector('#container');
const gridSizeBtn = document.querySelector('.btn');
let gridNumberSide;
let gridCreated = false;

gridSizeBtn.addEventListener ('click', () => {
    if (gridCreated == false) {
        let gridSizePromptValue = prompt('Choose Grid Size (1-100): ');
        gridNumberSide = gridSizePromptValue;
        creategrid();
        gridCreated = true;
    } else {
        container.innerHTML = '';
        let gridSizePromptValue = prompt('Choose Grid Size (1-100): ');
        gridNumberSide = gridSizePromptValue;
        creategrid();
    }
});

function creategrid () {
    if (gridNumberSide <= 100) {
        for (let i = 0; i < gridNumberSide; i++) {
            const newSquare = document.createElement('div');
            newSquare.setAttribute('class', 'grid-box');
            container.appendChild(newSquare);
            for (let j = 0; j < gridNumberSide; j++) {
                const newSquareChild = document.createElement('div');
                newSquareChild.setAttribute('class', 'grid-box');
                newSquare.appendChild(newSquareChild);
            }
        }
        
        let gridBoxes = document.querySelectorAll('.grid-box');
        gridBoxes = Array.from(gridBoxes);
        
        for (let i = 0; i < gridBoxes.length; i++) {

            gridBoxes[i].addEventListener ('mouseover', (event) => {
                if (event.buttons == 1) {
                    let randColor = '(' + randomPixelColor() + ')'
                    console.log(randColor);
                    gridBoxes[i].style.backgroundColor = 'rgb' + randColor;
                } else if (event.buttons == 2) {
                    gridBoxes[i].style.backgroundColor = 'white';
                }
            });
        }
    } else {
        alert('please input a number smaller than or equal to 100');
    }
}

function randomPixelColor () {
    let rgbValue = [];

    for (let i = 0; i < 3; i++) {
        let randomValue = Math.round(Math.random() * 255);
        rgbValue.push(randomValue);
    }
    rgbValue = rgbValue.toString();
    return rgbValue;
}

document.addEventListener ('contextmenu', (event) => {
    event.preventDefault();
})