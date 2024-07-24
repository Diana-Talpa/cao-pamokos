

// for (let i = 1; i < 6; i++) {
//     console.log(i)
// }




// let i = 1;
// let sum = 0;
// while (i <= 5) {
//     sum += i;
//     i++;
// }

// console.log(sum)



// for (let i = 2; i <= 10; i += 2) {
//     console.log(i)
// }


// for (let j = 10; j >= 0; j--) {
//     console.log (j)
// }


// let count = 0;
// let i = 1;
// while (i <=20 ) {
//     if (i % 3 === 0) {
//         count++;
//     }
//     i++;
// }
// console.log(count)


// const numbers = [5, 8, 10, 22, 4]
// let max = numbers[0]
// for (let i = 1; i < numbers.length; i++) {
//         if (numbers [i] > max) {
//             max = numbers[i];
//         }
// }

// console.log(max)


// for (let i = 1; i <= 15; i++) {
//     if (num % i === 0) {
//         console.log(i);
//     }
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const oddNumbers = [0]

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         oddNumbers.push(numbers[i]);
//     }
// }
// console.log (oddNumbers)





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


// const alertName = name => {
//     alert(name)
// }

// alertName ('Diana')


// const generateRandomNumber = () => Math.floor(Math.random() * 5) + 1;
// generateRandomNumber();

// const getNameAndSurnameLength = (name, surname) => name.leght + surname.lenght;
// // getNameAndSurnameLength('Diana', 'Talpa');

// const getLetterByIndex = index => {
//     const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     return alphabet[index];
//   };
//   getLetterByIndex(0);


//   const calculate = (n1, n2, operator) => {
//     switch (operator) {
//             case 'sum':
//                 return n1 + n2;
//             case 'sub':
//                 return n1 - n2;
//             case 'div':
//                 return n1 / n2;
//             case 'multi':
//                  return n1 * n2;
//                  default:
//                     throw new Error('Invalid operator')
//     }
//   };
//   calculate(1, 2, 'sum');


//   const generateRandomNumber = () => Math.floor(Math.random() * 10 + 1);

// const squareNumber = number => Math.pow(number, 2);

// squareNum(generateRandomNumber());



// const convertToUpperCase = (text) => text.toUpperCase();





// console.log(extractSubstring("Sveikas pasauli"));

// const extractSubstring = (text) => text.substring(2, 7);





// const capitalizeFirstLetter = (text) => {
//     const words = text.split(' ');
//     let result = '';

//     for (let i = 0; i < words.length; i++) {
//         const word = words[i];
//         if (word) {
//             result += word.charAt(0).toUpperCase() + word.slice(1);
//         }
//         if (i < words.length - 1) {
//             result += ' ';
//         }
//     }

//     return result;
// };

// console.log(capitalizeFirstLetter("labas rytas, pasauli!"));




// console.log(censorCurseWords("This is a badword and another badword.", ["badword"]));


// const censorCurseWords = (text, curseWords) => {
//     let censoredText = text;
//     for (let i = 0; i < curseWords.length; i++) {
//         const curseWord = curseWords[i];
//         while (censoredText.includes(curseWord)) {
//             censoredText = censoredText.replace(curseWord, '****');
//         }
//     }
//     return censoredText;


// };



// const milkPrice = 3.49; // Vėliau pakeisti kainą į 3

// if (Number.isInteger(milkPrice)) {
//   alert("Centų nereikia")
// } else{
//   alert("Centų prireiks...")
// }




// const milkPrice = 3.677; // Vėliau pakeisti kainą į 3

// if (Number.isInteger(milkPrice)) {
//   alert("Centų nereikia")
// } else{
//   alert("Centų prireiks...")
// }

// alert(milkPrice.toFixed(2))


// const findMax = (...numbers) => Math.max(...numbers);




// // Function that simulates data retrieval with a delay
// function fetchData(callback) {
//     setTimeout(() => {
//         // Simulate retrieved data
//         const data = "Sample data";
//         // Call the callback function with the retrieved data
//         callback(data);
//     }, 2000); // 2-second delay to simulate data retrieval
// }

// // Callback function to process the data
// function processData(data) {
//     console.log("Processing data: " + data);
// }

// // Using the fetchData function with processData as the callback
// fetchData(processData);



// function getLocation(callback) {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position => {
//         const { latitude, longitude } = position.coords;
//         callback(latitude, longitude);
//       }, error => {
//         console.error(error);
//         callback(null, null);
//       });
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//       callback(null, null);
//     }
//   }
  
//   // pass a callback function to getLocation
//   getLocation((latitude, longitude) => {
//     if (latitude && longitude) {
//       console.log(`Your location is: ${latitude}, ${longitude}`);
//       // call a function to get the current weather for the user's location
//       getWeather(latitude, longitude);
//     } else {
//       console.log("Failed to get your location.");
//     }
//   });



//   function alertName(text) {
//     alert(text)
//   }
  
//   function consoleName(text) {
//     console.log(text)
//   }
  
//   function coreFunction(name, callback) {
//     const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     callback(capitalizedName)
//   }
  
//   coreFunction("peTras", consoleName)


//   const cars = ["BMW", "VW", "Audi"];
// cars.forEach((v) => console.log(v));

// const cars = ["BMW", "VW", "Audi"];
// cars.forEach((v, i) => console.log(i + ": " + v));


// const names = ["peTras", "Jonas", "aNTanaS"];
// const newNames = names.map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase());
// console.log(newNames);




// const ages = [1, 20, 5, 10, 22, 50, 40, 39];
// console.log(ages.filter((x) => x >= 18));


// const cities = ["Vilnius", "Kaunas", "Klaipeda"];
// console.log(cities.find(v => v.charAt(0) === "K"));



// const cities = ["Vilnius", "Kaunas", "klaipeda"];
// console.log(cities.some(v => v.charAt(0) === v.charAt(0).toLowerCase()));



// const cities = ["Vilnius", "Kaunas", "klaipeda"];
// console.log(cities.every(v => v.charAt(0) === v.charAt(0).toUpperCase()));



// const friends = ["Jonas", "Paulius", "Antanas"];
// friends.sort();
// console.log(friends);



// const friends = ["Jonas", "Paulius", "Antanas"];
// friends.sort((a, b) => b > a ? 1 : -1);
// console.log(friends);


// const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];
// numbers.sort((a, b) => b - a);
// console.log(numbers);



// const numbers = [10, 5, 20, 4];
// numbers.sort((a, b) => b - a);
// console.log(numbers[0]);

const people = [
    {
      name: "Petras",
      age: "18"
    },
    {
      name: "Jonas",
      age: 15
    },
    {
      name: "Antanas",
      age: 20
    },
    {
      name: "Urtė",
      age: 10
    },
    {
      name: "Diana",
      age: 25
    },
    {
      name: "Ieva",
      age: 16
    }
  ];

console.log(people.filter(x => x.age >= 18))


console.log(people.filter(x => x.age >= 18).map(person => person.name))


console.log(people.filter(x => x.age >= 18).map(person => person.name).sort())



const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
  ]
  
  function fn(items) {
    items.sort((a, b) => a.price - b.price)
    return {pigiausias: items[0].name, brangiausias: items[items.length - 1].name}
  }
  
  console.log(fn(drinks))



  const addElement = (arr, element) => {
    arr.push(element);
    return arr;
};
console.log(addElement([1, 2, 3], 4)); // [1, 2, 3, 4]



console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];




console.log(addMultipleElements([1, 2, 3], 4, 5, 6)); // [1, 2, 3, 4, 5, 6]

const addMultipleElements = (arr, ...elements) => [...arr, ...elements];


console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
const doubleNumbers = (arr) => arr.map(number => number * 2);



console.log(findUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
const findUnique = (arr) => [...new Set(arr)];


console.log(planTrip([30, 70, 90])); // true
console.log(planTrip([100, 85, 60])); // false

const planTrip = (items) => items.reduce((total, item) => total + item, 0) <= 200;



console.log(optimizeQueue([{ id: 1, size: 5 }, { id: 2, size: 3 }, { id: 3, size: 8 }])); // [2, 1, 3]


const optimizeQueue = (orders) => orders.sort((a, b) => a.size - b.size).map(order => order.id);







console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3])); // 1

const findMostFrequent = (arr) => {
    const counts = {};
    let maxCount = 0;
    let mostFrequent;

    arr.forEach((item) => {
        counts[item] = (counts[item] || 0) + 1;
        if (counts[item] > maxCount) {
            maxCount = counts[item];
            mostFrequent = item;
        }
    });

    return mostFrequent;
};



console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
console.log(findMissingNumber([1, 2, 3, 4, 5, 6])); // 7

const findMissingNumber = (arr) => {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    return expectedSum - actualSum;
};






console.log(generateChessBoard(3)); // [['W', 'B', 'W'], ['B', 'W', 'B'], ['W', 'B', 'W']]

const generateChessBoard = (size) => {
    const board = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push((i + j) % 2 === 0 ? 'W' : 'B');
        }
        board.push(row);
    }
    return board;
};