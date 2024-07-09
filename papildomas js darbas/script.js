

let passw = 'bangladesas#'

if(passw.lenght < 16) {
    alert('Slaptazodis per trumpas')
} else if(passw.lenght >= 20) {
    alert('Slaptazodis yra tinkamas')
} 




const simbolsNeeded = ["#"];
const password = "Patrick#";
let specialCharacterCheck = false;


//reikiaq naudoti include o ne sita visa pieva 
const special = (c) => {
  for (i = 0; i < simbolsNeeded.length; i++) {
    if (c === simbolsNeeded[i]) {
      return true;
    }
  }
  return false;
}

for (i = 0; i < password.length; i++) {
  if (special(password[i])) {
    specialCharacterCheck = true;
  }
}
console.log(specialCharacterCheck);

if(password.length < 16){
    console.log('Slaptazodis per trumpas')
} else if(password.length > 21) {
    console.log ('Slaptazodis tinkamas')
} else if(password.length < 21) {
    console.log ('Slaptazodis tinkamas , bet rekomenduojame naudoti bent 20 simboliu')
}




// const amzius = 6

// if(amzius <= 0) {
// console.log('Yvestas amzius per mazas')
// }
// else if(amzius < 7 ) {
//     console.log ('I mokykla neina')
// }
//  else if( amzius <= 10) {
//     console.log('Eina i pradine klase')
// }
//  else if( amzius <= 14) {
//     console.log('Eina i pagrindine')
// }
//  else if( amzius <= 18) {
//     console.log('Eina i gimnazija')
// }
//  else if(amzius >= 19) {
//     console.log('Mokykla baigeS')
// }
//  else if  (amzius > 120) {
//     console.log('Amzius yra per didelis')
// }


//  else if(amzius = 10) {
//     console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
// }
//  else if(amzius = 14) {
//     console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
// }
//  else if(amzius = 18) {
//     console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
// }



const amzius = 19;

if (amzius <= 0) {
    console.log('Yvestas amzius per mazas');
} else if (amzius == 6) {
    console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.');
} else if (amzius < 7) {
    console.log('I mokykla neina');
} else if (amzius < 10) {
    console.log('Eina i pradine klase');
} else if (amzius == 10) {
    console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.');
} else if (amzius < 15) {
    console.log('Eina i pagrindine');
} else if (amzius == 14) {
    console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.');
} else if (amzius < 19) {
    console.log('Eina i gimnazija');
} else if (amzius == 18) {
    console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.');
} else if (amzius > 120) {
    console.log('Amzius yra per didelis');
} else if (amzius >= 19) {
    console.log('Mokykla baigęs');
}

//reikejo naudoti 120 pabaigoje beveik typo > 120 o poto else jau butu negalimas nes perdidelis





