

let password = 'fgdfgdfdfggvjhvhvgg#'
let passwordLength = password.trim( ).length

if (!password.includes('#')) {
  console.log('Nėra grotažymių :(')
} else if (passwordLength < 16) {
  console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
} else if (passwordLength < 21) {
  console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
} else {
  console.log('Slaptažodis tinkamas')
}



let age = Number('asdasd')

if (isNaN(age)) {
  console.log('Netinkamai nurodytas amžius, amžius privalo būti skaičius.')
} else if (age < 0) {
  console.log('Amžius privalo būti teigiamas skaičius')
} else if (age < 6) {
  console.log('Neina mokykla')
} else if (age < 7) {
  console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
} else if (age < 10) {
  console.log('Eina į pradinę klasę')
} else if (age < 11) {
  console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
} else if (age < 14) {
  console.log('Eina į pagrindinę')
} else if (age < 15) {add
  console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
} else if (age < 18) {
  console.log('Eina į gimnaziją')
} else if (age < 19) {
  console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
} else if (age < 120) {
  console.log('Mokykla baigė')
} else {
  console.log('Amžius negali būti didesnis už 120 metų')
}


//////Aciu Aldai uz koda! :)

const gameFirstLvl = 1
const gameSecondLvl = 2
const gameThirdLvl = 3

let userAnswer1, userAnswer2, userAnswer3

//// 1 lygis
if (gameFirstLvl == 1) {
   userAnswer1 = +prompt('Kiek yra 1 + 1?')
   console.log(userAnswer1)

   userAnswer2 = +prompt('Kiek yra 1 + 2?')
   console.log(userAnswer2)

   if (userAnswer1 === 2 && userAnswer2 === 3) {
      console.log('Teisingai! Atsakei į abu klausimus!')
      console.log('Patekai i kita lygi!')
   } else if (userAnswer1 === 2 && userAnswer2 !== 3) {
      console.log('Patekai i kita lygi: pirmas atsakymas buvo teisingas, o antras buvo neteisingas.')
   } else if (userAnswer1 !== 2 && userAnswer2 === 3) {
      console.log('Patekai i kita lygi: antras atsakymas buvo teisingas, o pirmas buvo neteisingas.')
   } else {
      console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
   }
} else {
   console.log('Klaida. Nepavyko patekti i kita lygi.')
}

//// 2 lygis
if (gameSecondLvl == 2) {
   userAnswer2 = +prompt('Kiek yra 2 + 2?')
   console.log(userAnswer2)

   userAnswer3 = +prompt('Kiek yra 2 + 3?')
   console.log(userAnswer3)

   if (userAnswer2 === 4 && userAnswer3 === 5) {
      console.log('Teisingai! Atsakei į abu klausimus!')
      console.log('Patekai i kita lygi!')
   } else if (userAnswer2 !== 4 && userAnswer3 === 5) {
      console.log('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
   } else if (userAnswer2 === 4 && userAnswer3 !== 5) {
      console.log('Nepatekai i kita lygi: pirmas atsakymas buvo teisingas, o antras buvo neteisingas.')
   } else {
      console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
   }
} else {
   console.log('Klaida. Nepavyko patekti i kita lygi.')
}

//// 3 lygis
if (gameThirdLvl == 3) {
   userAnswer1 = +prompt('Kiek yra 3 + 3?')
   console.log(userAnswer1)

   userAnswer2 = +prompt('Kiek yra 3 + 4?')
   console.log(userAnswer2)

   userAnswer3 = +prompt('Kiek yra 3 + 5?')
   console.log(userAnswer3)

   if (userAnswer1 === 6 && userAnswer2 === 7 && userAnswer3 === 8) {
      console.log('Teisingai! Atsakei į visus klausimus!')
      console.log('Laimejote!')
   } else if (userAnswer1 === 6 && userAnswer2 === 7 && userAnswer3 !== 8) {
      console.log('Patekai i kita lygi: pirmas ir antras atsakymai buvo teisingi, o trecias buvo neteisingas.')
   } else if (userAnswer1 === 6 && userAnswer2 !== 7 && userAnswer3 === 8) {
      console.log('Patekai i kita lygi: pirmas ir trecias atsakymai buvo teisingi, o antras buvo neteisingas.')
   } else if (userAnswer1 !== 6 && userAnswer2 === 7 && userAnswer3 === 8) {
      console.log('Patekai i kita lygi: antras ir trecias atsakymai buvo teisingi, o pirmas buvo neteisingas.')
   } else if (userAnswer1 === 6 && userAnswer2 !== 7 && userAnswer3 !== 8) {
      console.log('Nepatekai i kita lygi: pirmas atsakymas buvo teisingas, o kiti buvo neteisingi.')
   } else if (userAnswer1 !== 6 && userAnswer2 === 7 && userAnswer3 !== 8) {
      console.log('Nepatekai i kita lygi: antras atsakymas buvo teisingas, o kiti buvo neteisingi.')
   } else if (userAnswer1 !== 6 && userAnswer2 !== 7 && userAnswer3 === 8) {
      console.log('Nepatekai i kita lygi: trecias atsakymas buvo teisingas, o kiti buvo neteisingi.')
   } else {
      console.log('Nepatekai i kita lygi: visi atsakymai buvo neteisingi.')
   }
} else {
   console.log('Klaida. Nepavyko patekti i kita lygi.')
}
 //////Aciu Aldai uz koda! :)
