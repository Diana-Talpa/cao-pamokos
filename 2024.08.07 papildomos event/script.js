const numbersElement = document.querySelector('#numbers');

const displey = document.createElement('h3');
displey.textContent = 5;
numbersElement.append(displey);

const minusButton = document.createElement('button');
minusButton.textContent = '-';
minusButton.classList.add('minus');
displey.after(minusButton);

const plusButton = document.createElement('button');
plusButton.textContent = '+';
plusButton.classList.add('plus');
minusButton.after(plusButton);

const resetAll = document.createElement('button');
resetAll.classList.add('reset');
resetAll.textContent = 'Reset all';
plusButton.after(resetAll);

const minusButton2 = document.createElement('button');
minusButton2.classList.add('minus2');
minusButton2.textContent = '-2';
resetAll.after(minusButton2);

const plusButton2 = document.createElement('button');
plusButton2.classList.add('plus2');
plusButton2.textContent = '+2';
minusButton2.after(plusButton2);

const minusButton3 = document.createElement('button');
minusButton3.classList.add('minus3');
minusButton3.textContent = '-5';
plusButton2.after(minusButton3);

const plusButton3 = document.createElement('button');
plusButton3.classList.add('plus3');
plusButton3.textContent = '+5';
minusButton3.after(plusButton3);

function changeColor() {
    let currentNumber = parseInt(displey.textContent);
    if (currentNumber >= 5) {
        displey.style.color = 'green';
    } else {
        displey.style.color = 'red';
    }
}

function updateButtonStates() {
    let currentNumber = parseInt(displey.textContent);
   
    minusButton.disabled = currentNumber <= 0;
    plusButton.disabled = currentNumber >= 10;

    minusButton2.disabled = currentNumber < 2;
    plusButton2.disabled = currentNumber >= 9; 

    minusButton3.disabled = currentNumber <= 4;
    plusButton3.disabled = currentNumber >= 6; 

}

function updateAll() {
    changeColor();
    updateButtonStates();
}

resetAll.addEventListener('click', () => {
    displey.textContent = 5;
    updateAll();
});

minusButton.addEventListener('click', () => {
    let currentNumber = parseInt(displey.textContent);
    if (currentNumber > 0) {
        displey.textContent = currentNumber - 1;
        updateAll();
    }
});

plusButton.addEventListener('click', () => {
    let currentNumber = parseInt(displey.textContent);
    if (currentNumber < 10) {
        displey.textContent = currentNumber + 1;
        updateAll();
    }
});

minusButton2.addEventListener('click', () => {
    let currentNumber = parseInt(displey.textContent);
    if (currentNumber > 1) {
        displey.textContent = currentNumber - 2;
        updateAll();
    }
});

plusButton2.addEventListener('click', () => {
    let currentNumber = parseInt(displey.textContent);
    if (currentNumber <= 8) { 
        displey.textContent = currentNumber + 2;
        updateAll();
    }
});

minusButton3.addEventListener('click', () => {
    let currentNumber = parseInt(displey.textContent);
    if (currentNumber > 4) {
        displey.textContent = currentNumber - 5;
        updateAll();
    }
});

plusButton3.addEventListener('click', () => {
    let currentNumber = parseInt(displey.textContent);
    if (currentNumber <= 5) {
        displey.textContent = currentNumber + 5;
        updateAll();
    }
});


