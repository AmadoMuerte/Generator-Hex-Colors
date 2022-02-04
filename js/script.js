let hexCodeText = document.querySelector('.hex-code'),
    button = document.querySelector('.button'),
    background = document.querySelector('body');


let hexNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', 
                  '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ]; 

function createColor() {
    let hexCode = '#';
    for(let i=0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexNumbers.length);
        hexCode += hexNumbers[randomIndex]; 
    }
    return hexCode;
}

function changeColor(hexCode) {
    hexCodeText.textContent = '';
    hexCodeText.textContent = ' ' + hexCode;
    background.style.backgroundColor = hexCode;
}

button.addEventListener('click', () => {
    let hexCode = createColor();
    changeColor(hexCode);
});