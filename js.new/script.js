// let vardas = 'Diana'
// let kiekKartu = 10

// // for (let i = 0; i < kiekKartu; i++) {
// //     console.log(vardas)
// // }



// // function saysomething() {
// //     document.writeln('hello!')
// // }

// for (let i = 0; i < kiekKartu; i++) {
//     console.log(`${i}. ${vardas}`)
// }
// const name = 'Gedas';
// const count = 10;
// for (let i = 0; i < count; i++) {
//   console.log(`${i}. ${name}`);
// }


// for (let i = 10; i > 0; i--) {
//     console.log(i)
// // }


// let arry = [2,3,4]

// arry.unshift(1)

// console.log(arry)



///kodas kuris isskiria unikalius elementus

// const arr = [1, 2, 3, 3, 3, 4];

// const uniqueElements =[]

// for (let i = 0; i < arr.length; i++) {
//     if (!uniqueElements.includes(arr[i])) {
//         uniqueElements.push(arr[i])
//     }
// }

// console.log(uniqueElements.length)



// const arr = [-3, 1, -2, 4, -5, 6]


// const positiveNumbers = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         positiveNumbers.push(arr[i])
//     }
// }

// console.log(positiveNumbers)


// const arr = [1, 2, 3, 4, 3, 5];
// const element = 4;

// const doesRepeat = arr.indexOf(element) !== arr.lastIndexOf(element);

// // console.log(doesRepeat);


// const arr = [1, 2, 3, 4, 5]

// const transformed = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         transformed.push(arr[i] / 2);
//     } else {
//         transformed.push(arr[i] * 3);
//     }
// }

// console.log(transformed);




// let i = 1;
// let sum = 0;
// while (i <= 5) {
//     sum += i;
//     i++;
// }
// console.log(sum);


// for(let i = 2; i <= 10; i += 2) {
//     console.log(i)
// }


// let count = 0;
// let i = 1;
// while (i <= 20) {
//     if (i % 3 === 0) {
//         count++;
//     }

//     i++;
// }

// console.log(count);

// const numbers = [3, 7, 2, 8, 5]
// let max = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i]
//     }
// }

// console.log(max);


// for (let i = 1; i <= 15; i++) {
//     if (num % i === 0) {
//         console.log(i);
//     }
// }


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         oddNumbers.push(numbers[i]);
//     }
// }



// for (let i = 1; i <= 20; i++) {
//     let isPrime = true;
//     if (i > 1) {
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(i);
//         }
//     }
// }


// let n1 = 0, n2 = 1, nextTerm;
// for (let i = 1; i <= 10; i++) {
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//     console.log(nextTerm);
// }

// const area = function areaHelper(width, height) {
//     return width * height;
//   }
  
//   alert(area(4, 5)); // still displays "20"



// function vardas(name) {
//     alert(name)
// }

// alert('Diana')


// function generateRandomNumber() {
//     return Math.floor(Math.random() * 5) + 1;
//   }
//   generateRandomNumber();



//   function getNameAndSurnameLength(name, surname) {
//     return name.length + surname.length;
//   }
//   getNameAndSurnameLength('John', 'Snow');


//   function getLetterByIndex(index) {
//     const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     return alphabet[index];
//   }
//   getLetterByIndex(0);


//   function calculate(n1, n2, operator) {
//     switch(operator){
//       case 'sum':
//         return n1 + n2;
//       case 'sub':
//         return n1 - n2;
//       case 'div':
//         return n1 / n2;
//       case 'multi':
//         return n1 * n2;
//     }
//   }
//   calculate(1, 2, 'sum');

//   function generateRandomNumber() {
//     return Math.floor(Math.random() * 10 + 1);
//   }
  
//   function squareNumber(number) {
//     return Math.pow(number, 2);
//   }
  
//   squareNum(generateRandomNumber());




// const convertMStoKMH = (speedMS) => speedMS * 3.6;


// console.log(convertMStoKMH(10)); // 36


// console.log(compareNumber(4, 7)); // 7
// console.log(compareNumber(5, 5)); // "equal"
// console.log(compareNumber("5", 5)); // "Error: most arguments must be numbers"





// if (4 < 7) {
//   console.log(7)
// } else if (5 === 5) {
//   console.log('equal')
// } else 


// const compareNumber = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//       return "Error: most arguments must be numbers";
//   }
//     if (a === b) {
//       return 'equal';
//     }
//     return a > b ? a : b;
//   };

///// numeriu palyginimas
//   const compareNumber = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return "Error: most arguments must be numbers";
//     }
//     if (a === b) {
//         return "equal";
//     }
//     return a > b ? a : b;
   

// };

// console.log(compareNumber(4, 7));
// console.log(compareNumber(5, 5)); 
// console.log(compareNumber("5", 5)); 

///// kelemieji metai

const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(isLeapYear(2020));
console.log(isLeapYear(2021)); 

///didziausias masyvo elementas

const findMaxInArray = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
  }
  return max;
};

console.log(findMaxInArray([1, 3, 2, 5, 4]));
console.log(findMaxInArray([-1, -3, -2, -5, -4]));

//// masyvo elementu suma

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
};

console.log(sumArray([1, 2, 3, 4, 5])); // 15


///ar masyvai yra lygus

const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }
  return true;
};

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [1, 2, 4])); // false



////eilutes apvertimas

const reverseString = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
  }
  return reversed;
};

console.log(reverseString("Labas")); // "sabaL"

/// ar zodis yra palindromas

const isPalindrome = (word) => {
  for (let i = 0; i < word.length / 2; i++) {
      if (word[i] !== word[word.length - 1 - i]) {
          return false;
      }
  }
  return true;
};

console.log(isPalindrome("savas")); // true
console.log(isPalindrome("svetimas")); // false

//skaiciu piramide



const printPyramid = (height) => {
  for (let i = 1; i <= height; i++) {
      let line = '';
      for (let j = 0; j < i; j++) {
          line += i;
      }
      console.log(line);
  }
};

1
22
333