// let arr = [2, 3, 4]

// arr.unshift(1)

// console.log(arr)


// let arrLength = arr.length

// console.log(arrLength)

// const arr = [1, 2, 2, 3, 3, 3, 4];

// const uniqueElements = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!uniqueElements.includes(arr[i])) {
//         uniqueElements.push(arr[i])
//     }
//     }

//     console.log(uniqueElements.length)

    // const arr = [-3, 1, -2, 4, -5, 6];

    // const positiveNumbers = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 0) {
    //         positiveNumbers.push(arr[i]);
    //     }
    // }
    
    // console.log(positiveNumbers);




//     let arr = 
//     [12, 34, 13, -1, -4, 45, -55, -66];
 
// for (let i = 0; i < arr.length; i++) 
//     if (arr[i] > 0) {
//         console.log(arr[i]);
//     }



// const arr = [1, 2, 3, 4, 3, 5];

// const element =3

// const doesRepeat = arr.indexOf(element) !== arr.lastIndexOf(element);


// console.log(doesRepeat)





// const arr = [1, 2, 3, 4, 3, 5];
// const element = 3;

// function hasDuplicates(arr) {
//     const counts = {};
    
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         if (counts[item]) {
//             return true; 
//         }
//         counts[item] = 1;
//     }
    
//     return false; 
// }

// console.log(hasDuplicates(arr)); 



// const arr = [1, 2, 3, 4, 5]


// const transformed = []

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         transformed.push(arr[i] / 2)
//     } else {
//         transformed.push(arr[i] * 3)
//     }
// }

// console.log(transformed);




// let arr = 1

// for (let i = 1; i < 6; i++){
//     console.log(i)
// }


// let i = 1;
// let sum = 0;
// while (i <= 5) {
//     sum += i;
//     i++;
// }

// console.log(sum);


// for (let i = 2; i <= 10; i += 2) {
//     console.log(i)
// }


// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }


let count = 0;
let i = 1;
while (i <= 20) {
    if(i%3 === 0) {
        count++;
    }

    i++;
}

console.log(count);