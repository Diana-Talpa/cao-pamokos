// const h1Element = document.querySelector('h1')
// const h2Element = document.querySelector('h2')
// const h3Element = document.querySelector('h3')
// const h4Element = document.querySelector('h4')
// const h5Element = document.querySelector('h5')

// h1Element.addEventListener('click', function() {
//     // h1Element.style = `color: pink; 
//     //                    font-size: 50px;
//     //                    border: 2px solid black;`

//     h1Element.style.color = 'pink'
//     h1Element.style.backgroundColor = 'green'
//     h1Element.textContent = 'Clicked'
    
//     // setInterval(function() {
//     //     h1Element.style.color = ''
//     //     h1Element.style.backgroundColor = ''
//     //     h1Element.textContent = 'Pirmas elementas'
//     // }, 3000)
// })

// h2Element.addEventListener('click', () => {
//     h2Element.style.fontSize = '40px'
// })

// // h3Element.addEventListener('click', () => {
// //     h3Element.style.color = 'purple'
// //     h1Element.style.color = 'purple'
// // })

// h3Element.addEventListener('click', clickedH3Element)
// function clickedH3Element() {
//     h3Element.style.color = 'purple'
//     h1Element.style.color = 'purple'
// }

// // h4Element.addEventListener('click', () => {
// //     h4Element.style.border = '2px dashed black'
// //     h1Element.style.border = '2px dashed black'
// // })

// // h5Element.addEventListener('click', () => {
// //     h4Element.style.border = '2px dashed black'
// //     h1Element.style.border = '2px dashed black'
// // })

// h4Element.addEventListener('click', changeBorders)
// h5Element.addEventListener('click', changeBorders)

// function changeBorders() {
//     h4Element.style.border = '2px dashed black'
//     h1Element.style.border = '2px dashed black'

//     const paragraph = document.createElement('p')
//     paragraph.textContent = 'Cia yra paragrafas'

//     h5Element.after(paragraph)
// }
// const bodyElement = document.querySelector('body')

// const alertNameClick = document.createElement('button')
// bodyElement.append(alertNameClick)


// alertNameClick.addEventListener('click', function() {
//     alert('Diana')
//     const pElement = document.createElement('p')
//     pElement.textContent = 'As mokausi javascripto'
//     alertNameClick.after(pElement)
    
// })

// const plusOne = document.createElement('h1')
// plusOne.textContent = 5
// bodyElement.append(plusOne)

// const plusOneButton = document.createElement('button')
// plusOneButton.textContent = '+1'
// bodyElement.append(plusOneButton)


// plusOneButton.addEventListener('click',  () => {
//     let counter = 5
//     counter++
//     document.querySelector('h1').innerText = counter
// // })

// let counter = 5;

// document.querySelector('button').addEventListener('click', () => {
//   counter++;
//   document.querySelector('h1').innerText = counter;
// });



// let alertNoCopy = document.querySelector('p')
// alertNoCopy.addEventListener('copy', function() {
//     alert('Kopijuoti negalima')
    
// })

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
  

// const randomElement = document.querySelector('randomas.button')

// const h2Element = document.querySelector('h2')

// randomElement.addEventListener('click', function () {
    
//     let randomnr= getRandomInt(100)
//     h2Element.innerText = randomnr

// })

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 100) + 1;
// }

// document.querySelector('button').addEventListener('click', () => {
//   const randomNumber = generateRandomNumber();
//   document.querySelector('h1').innerText = randomNumber;
// });



// document.getElementById('suauges').addEventListener('click', () => {
//     document.querySelector('h1').innerText = 'Alus'
// })

// document.getElementById('vaikas').addEventListener('click', () => {
//     alert('nepilnametis nieko neturime')
// })


// function getRandomInt() {
//     return Math.floor(Math.random() * 3 ) + 1;
//   }

//  console.log(getRandomInt()) 
  
// const maybeWorks = document


// function generateRandomNumber() {
//     return Math.floor(Math.random() * 3) + 1
// }

// const randomNumber = generateRandomNumber()
// console.log(randomNumber)

// document.getElementById('one').addEventListener('click', () => randomNumber === 1 ? alert('Yay') : alert ('Nope :('))

// document.getElementById('two').addEventListener('click', () => randomNumber === 2 ? alert('Yay') : alert ('Nope :('))


// document.getElementById('three').addEventListener('click', () => randomNumber === 3 ? alert('Yay') : alert ('Nope :('))

// function atertNeklausai() {
//     alert('Neklausai manes')
// }

// const paspaudei = atertNeklausai
// document.getElementById('pirmas').addEventListener('click', () => atertNeklausai)


// document.body.addEventListener('click', () => {
//     const isButton = event.target.nodeName === 'BUTTON';
//     if (isButton) {
//       document.getElementById('output').innerText = 'Neklausote manęs';
//     }
//   });


document.body.addEventListener('mousemove', () => document.getElementById('output').innerText = 'Kiek galima neklausyti?!');