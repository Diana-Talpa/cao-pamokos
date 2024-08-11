// const numbersElement = document.querySelector('#numbers');

// const displey = document.createElement('h3');
// displey.textContent = '5';
// numbersElement.append(displey);

// const minusButton = document.createElement('button');
// minusButton.textContent = '-';
// minusButton.classList.add('minus');
// displey.after(minusButton);

// const plusButton = document.createElement('button');
// plusButton.textContent = '+';
// plusButton.classList.add('plus');
// minusButton.after(plusButton);

// const resetAll = document.createElement('button');
// resetAll.classList.add('reset');
// resetAll.textContent = 'Reset all';
// plusButton.after(resetAll);

// const minusButton2 = document.createElement('button');
// minusButton2.classList.add('minus2');
// minusButton2.textContent = '-2';
// resetAll.after(minusButton2);

// const plusButton2 = document.createElement('button');
// plusButton2.classList.add('plus2');
// plusButton2.textContent = '+2';
// minusButton2.after(plusButton2);

// const minusButton3 = document.createElement('button');
// minusButton3.classList.add('minus3');
// minusButton3.textContent = '-5';
// plusButton2.after(minusButton3);

// const plusButton3 = document.createElement('button');
// plusButton3.classList.add('plus3');
// plusButton3.textContent = '+5';
// minusButton3.after(plusButton3);

// function changeColor() {
//     let currentNumber = parseInt(displey.textContent);
//     if (currentNumber >= 5) {
//         displey.style.color = 'green';
//     } else {
//         displey.style.color = 'red';
//     }
// }

// function updateButtonStates() {
//     let currentNumber = parseInt(displey.textContent);
   
//     minusButton.disabled = currentNumber <= 0;
//     plusButton.disabled = currentNumber >= 10;

//     minusButton2.disabled = currentNumber < 2;
//     plusButton2.disabled = currentNumber >= 9; 

//     minusButton3.disabled = currentNumber <= 4;
//     plusButton3.disabled = currentNumber >= 6; 

// }

// function updateAll() {
//     changeColor();
//     updateButtonStates();
// }

// resetAll.addEventListener('click', () => {
//     displey.textContent = 5;
//     updateAll();
// });

// //geriau naudot rebume atribute kad nebebutu disabled kai paspaudi reseta


// //padaryti be parse

// minusButton.addEventListener('click', () => {
//     let currentNumber = parseInt(displey.textContent);
//     if (currentNumber > 0) {
//         displey.textContent = currentNumber - 1;
//         updateAll();
//     }
// });

// plusButton.addEventListener('click', () => {
//     let currentNumber = parseInt(displey.textContent);
//     if (currentNumber < 10) {
//         displey.textContent = currentNumber + 1;
//         updateAll();
//     }
// });

// minusButton2.addEventListener('click', () => {
//     let currentNumber = parseInt(displey.textContent);
//     if (currentNumber > 1) {
//         displey.textContent = currentNumber - 2;
//         updateAll();
//     }
// });

// plusButton2.addEventListener('click', () => {
//     let currentNumber = parseInt(displey.textContent);
//     if (currentNumber <= 8) { 
//         displey.textContent = currentNumber + 2;
//         updateAll();
//     }
// });

// minusButton3.addEventListener('click', () => {
//     let currentNumber = parseInt(displey.textContent);
//     if (currentNumber > 4) {
//         displey.textContent = currentNumber - 5;
//         updateAll();
//     }
// });

// plusButton3.addEventListener('click', () => {
//     let currentNumber = parseInt(displey.textContent);
//     if (currentNumber <= 5) {
//         displey.textContent = currentNumber + 5;
//         updateAll();
//     }
// });





const numbersElement = document.querySelector('#numbers')

const input = document.createElement('input')
const display = document.createElement('h3')
const minus5Button = document.createElement('button')
const minus2Button = document.createElement('button')
const minus1Button = document.createElement('button')
const plus1Button = document.createElement('button')
const plus2Button = document.createElement('button')
const plus5Button = document.createElement('button')
const resetButton = document.createElement('button')
const addGradeButton = document.createElement('button')
const gradesTitle = document.createElement('h4')
const removeAllGradesButton = document.createElement('button')
const gradesList = document.createElement('ul')


input.setAttribute('type', 'number')
input.min = 1
input.max = 10

minus5Button.textContent = '-5'
minus2Button.textContent = '-2'
minus1Button.textContent = '-'
plus1Button.textContent = '+'
plus2Button.textContent = '+2'
plus5Button.textContent = '+5'
resetButton.textContent = 'Reset'
addGradeButton.textContent = 'Add Grade'
removeAllGradesButton.textContent = 'Remove All Grades'
gradesTitle.textContent = 'Grades:'

numbersElement.append(input, display, minus5Button, minus2Button, minus1Button, plus1Button, plus2Button, plus5Button, resetButton, addGradeButton, removeAllGradesButton, gradesTitle, gradesList)

const initialCounter = 3
let counter = initialCounter
checkData(0)

input.addEventListener('input', () => {
    counter = Number(input.value)
    checkData(0)
})
minus5Button.addEventListener('click', () => checkData(-5))
minus2Button.addEventListener('click', () => checkData(-2))
minus1Button.addEventListener('click', () => checkData(-1))
plus1Button.addEventListener('click', () => checkData(1))
plus2Button.addEventListener('click', () => checkData(2))
plus5Button.addEventListener('click', () => checkData(5))

resetButton.addEventListener('click', () => {
    counter = initialCounter
    checkData(0)
})

addGradeButton.addEventListener('click', () => {
    const gradeItem = document.createElement('li')
    gradeItem.textContent = counter
    // gradeItem.style.color = display.style.color
    gradeItem.style.color = setColor(counter)

    const deleteGradeButton = document.createElement('button')
    deleteGradeButton.textContent = 'x'
    gradeItem.append(deleteGradeButton)

    deleteGradeButton.addEventListener('click', () => {
        gradeItem.remove()
    })

    gradesList.append(gradeItem)
})

removeAllGradesButton.addEventListener('click', () => {
    // gradesList.innerHTML = ''
    const gradeItems = document.querySelectorAll('li')
    gradeItems.forEach(gradeItem => gradeItem.remove())
})

function checkData(num) {
    counter = counter + num
    input.value = counter
    display.textContent = counter
    display.style.color = setColor(counter)
    checkCounter()
}

function checkCounter() {
    if (counter <= 1) {
        minus1Button.setAttribute('disabled', true)
    } else {
        minus1Button.removeAttribute('disabled')
    }

    if (counter <= 2) {
        minus2Button.setAttribute('disabled', true)
    } else {
        minus2Button.removeAttribute('disabled')
    }

    if (counter <= 5) {
        minus5Button.setAttribute('disabled', true)
    } else {
        minus5Button.removeAttribute('disabled')
    }

    if (counter > 5) {
        plus5Button.setAttribute('disabled', true)
    } else {
        plus5Button.removeAttribute('disabled')
    }

    if (counter > 8) {
        plus2Button.setAttribute('disabled', true)
    } else {
        plus2Button.removeAttribute('disabled')
    }

    if (counter > 9) {
        plus1Button.setAttribute('disabled', true)
    } else {
        plus1Button.removeAttribute('disabled')
    }
}

function setColor(num) {
    let color

    if (num < 5) {
        color = 'red'
    } else if (num < 7) {
        color = 'orange'
    } else {
        color = 'green'
    }

    return color
}