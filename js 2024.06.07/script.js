// let name = 'Jonas'

// let admin = name

// // alert(admin)
// let age = 18

// if (age < 3) {
//     message = 'Hi, baby!';
//   } else if (age < 18) {
//     message = 'Hello!';
//   } else if (age < 100) {
//     message = 'Greetings!';
//   } else {
//     message = 'What an unusual age!';
//   }

// const value = prompt('kokia maziausia salis', '')

// if (value == 'Vatikanas') {
//     console.log ('Teisigai')
// } else {hyryhnh
//     console.log('neteisingai')
// }


//   const legalAge = 20 
  
//   let clientAge = 21

//   if (clientAge >= legalAge) {
//     alert('Jus esate legalaus amziaus')
//   } else{
//     alert('Jus nepasiekete legalaus amziaus')
//   }

// let age = prompt('Koks jusu amzius?')
// if (age < 0 || age >100) {
//     alert('Invalide age')

// } else if (age < 18) {
//     alert('Child')
// } else {
//     alert('Adult')
// }

// let car = 'citroen'

// if(car == 'BMW' || car == 'Mini' || car == 'Rolls-Royce') {
//     console.log('BMW group')
// } else if(car == 'Audi' || car == 'VW' || car == 'Bantley') {
//     console.log('VW group')
// } else {
//     console.log('Nepriklauso neivienai')
// }

// let browser = "Chrome"
// // switch (browser) {
// //     case 'Edge':
// //       alert( "RIP Edge!" );
// //       break;
  
// //     case 'Chrome':
// //     case 'Firefox':
// //     case 'Safari':
// //     case 'Opera':
// //       alert( 'Šios naršykles palaikomos' );
// //       break;
  
// //     default:
// //       alert( 'Tikimės, kad šis puslapis atrodys puikiai!' );
// //   }

// if(browser == 'Edge') {
//     alert("RIP Edge!");
//   } else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//     alert( 'Šios naršykles palaikomos' );
//   } else {
//     alert( 'Tikimės, kad šis puslapis atrodys puikiai!' );
//   }


// let a = +prompt('a?', '');

// switch (a) {
//   case 0:
//     alert( 0 );
//     break;

//   case 1:
//     alert( 1 );
//     break;

//   case 2:
//   case 3:
//     alert( '2,3' );
//     break;
// }

// const car = 'Audi'
// switch(car) {
//   case 'VW':
//   case 'Audi':
//   case 'Bentley':
//   case 'Lamborghini':
//   case 'Porsche':
//     console.log("VW group");
//     break;
//   case 'BMW':
//   case 'Mini':
//   case 'Rolls-Royce':
//     console.log('BMW group');
//     break;
//   default:
//     console.log("Nei VW group, nei BMW group")
// }




// const userInput = 'Obuolys';
// switch (userInput) {
//   case 'Bulvė':
//   case 'Kopūstas':
//   case 'Česnakas':
//   case 'Svogūnas':
//   case 'Morka':
//     console.log("Daržovė");
//     break;
//   case 'Obuolys':
//   case 'Kriaušė':
//   case 'Avietė':
//   case 'Braškė':
//   case 'Vynuogė':
//     console.log('Vaisius');
//     break;
//   default:
//     console.log("Nei daržovė, nei vaisius")
// }




let weekDay = new Date().getDay();
switch (weekDay) {
  case 0:
    weekDay = 'Sekmadienis';
    break;
  case 1:
    weekDay = 'Pirmadienis';
    break;
  case 2:
    weekDay = 'Antradienis';
    break;
  case 3:
    weekDay = 'Trečiadienis';
    break;
  case 4:
    weekDay = 'Ketvirtadienis';
    break;
  case 5:
    weekDay = 'Penktadienis';
    break;
  case 6:
    weekDay = 'Šeštadienis';
    break;
}
console.log(weekDay);