
const value = prompt('Kokia yra mažiausia pasaulyje šalis?', '');

if (value == 'Vatikanas') {
  alert('Teisingai!');
} else {
  alert("Rimtai? Taigi Vatikanas!");
}


let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}


let result = (a + b < 4) ? 'Below' : 'Over';



let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

const message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';


  const clientAge = 16;
const legalAge = 20;
if (clientAge >= legalAge) {
  console.log(`Pasiekęs ${legalAge}`);
} else {
  console.log(`Nepasiekęs ${legalAge}`);
}



const name = 'Gedas';
if (name.length > 6) {
  console.log('Ilgas vardas');
}


const age = 30;
if (age > 100 || age < 0) {
  console.log('Invalid age');
} else if (age < 18) {
  console.log('Child');
} else {
  console.log('Adult')
}


const car = "BMW";
if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
  console.log('VW Group');
} else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
  console.log('BMW Group');
} else {
  console.log('Nei vienam');
}


const vardas = 'Gedas';
console.log(vardas.length < 5 ? "Short Name" : "Long Name")



const clientAge = 16;
const legalAge = 18;
clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");


const clientAge = 16;
const legalAge = 18;
clientAge < 0 || clientAge > 120 ? console.log("Invalid age") : clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");


const phone = 'iPhone';

const isIphoneUser = phone === 'iPhone';