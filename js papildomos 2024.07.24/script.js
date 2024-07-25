// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
// 1.16. Į masyvo vidurį pridėti skaičių 0.
// 1.17. Pašalinti pirmą masyvo narį.
// 1.18. Pašalinti paskutinį masyvo narį.
// 1.19. Į masyvo pradžią pridėti žodį "start".
// 1.20. Į masyvo pabaigą pridėti žodį "end".


let data = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

console.log(data)


let task11 = data.shift()
console.log('task11')
console.log(task11)
console.log(data)




let task12 = data.pop()
console.log('task12')
console.log(task12)
console.log(data)




let midleIndex = Math.floor(data.lenght / 2)
let task13 = data.splice(10, 1)
console.log('task13')
console.log(task13)
console.log(data)



let task14 = data.splice(18, 1)
console.log('task14')
console.log(task14)
console.log(data)


let task15 = data.splice(1, 1)
console.log('task15')
console.log(task15)
console.log(data)



let task16 = data.splice (6, 1)
console.log('task16')
console.log(task16)
console.log(data)

let task161 = data.splice (6,1)
console.log(task161)
console.log(data)






let task17 = data.splice(-4, 1)
console.log('task17')
console.log(task17)

let task171 = data.splice(-4, 1)
console.log(task171)

let task172 = data.splice(-4, 1)
console.log(task172)



let task18 = data[2] = 888
console.log('task18')
console.log(task18)
console.log (data)




let task19 = data.splice(9, 1, 33, 789, 6543)
console.log('task19')
console.log(task19)
console.log (data)


let task20 = data.splice(14, 1, 321, 654, 987)
console.log('task20')
console.log(task20)
console.log(data)




let task21 = data.splice(1, 0, 11)
console.log('task21')
console.log(task21)
console.log(data)


let task22 = data.splice(13, 0, 1)
console.log('task22')
console.log(task22)
console.log(data)





let task23 = data.splice(18, 0, -1)
console.log('task23')
console.log(task23)
console.log(data)






let task24 = data.unshift(1, 2, 3)
console.log('task24')
console.log(task24)
console.log(data)






let task25 = data.push(-333, -321, -312)
console.log('task25')
console.log(task25)
console.log(data)






let midleIndex2 = Math.floor(data.lenght / 2)

let task26 = data.splice(13, 0, 0)
console.log('task26')
console.log(task26)
console.log(data)






let task27 = data.shift()
console.log('task27')
console.log(task27)
console.log(data)




let task28 = data.pop()
console.log('task28')
console.log(task28)
console.log(data)




let task29 = data.unshift('start')
console.log('task29')
console.log(task29)
console.log(data)


let task291 = data.push('end')
console.log('task291')
console.log(task291)
console.log(data)



if (data === 'start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end')

    console.log('viskas sutampa')

    else {
        console.log('Klaida')
    }









    /////////////Pirma dalis baigta



// Step 1: Define the original array

// Step 2: Use the slice method to extract the first element
// Note: Slice syntax is array.slice(start, end), for the first element use array.slice(0, 1)
let slicedElement = data.slice(0, 1);

// Step 3: Save the sliced element in a new array
let newArray = slicedElement;

// Output the new array to verify
console.log('task31')
console.log("New array:", newArray);










let slicedElement2 = data.slice(26, );


let newArray2 = slicedElement2;

console.log('task32')
console.log("New array:", newArray2);














let slicedElement3 = data.slice(1, 2);


let newArray3 = slicedElement3;

console.log('task33')
console.log("New array:", newArray3);













let slicedElement4 = data.slice(25, 26);


let newArray4 = slicedElement4;

console.log('task34')
console.log("New array:", newArray4);










let slicedElement5 = data.slice(7, 8);


let newArray5 = slicedElement5;

console.log('task35')
console.log("New array:", newArray5);









let slicedElement6 = data.slice(-9, -8);


let newArray6 = slicedElement6;

console.log('task36')
console.log("New array:", newArray6);







let slicedElement7 = data.slice(12, 13);


let newArray7 = slicedElement7;

console.log('task37')
console.log("New array:", newArray7);









let slicedElement8 = data.slice(0, 3);


let newArray8 = slicedElement8;

console.log('task38')
console.log("New array:", newArray8);










let slicedElement9 = data.slice(-3);


let newArray9 = slicedElement9;

console.log('task39')
console.log("New array:", newArray9);





let slicedElement10 = data.slice(0, 10);


let newArray10 = slicedElement10;

console.log('task310')
console.log("New array:", newArray10);








let slicedElement11 = data.slice(-10, );


let newArray11 = slicedElement11;

console.log('task311')
console.log("New array:", newArray11);









let slicedElement12 = data.slice(2, 8);


let newArray12 = slicedElement12;

console.log('task312')
console.log("New array:", newArray12);







let slicedElement13 = data.slice(-9,-4);


let newArray13 = slicedElement13;

console.log('task313')
console.log("New array:", newArray13);








let slicedElement14 = data.slice(10,);


let newArray14 = slicedElement14;

console.log('task314')
console.log("New array:", newArray14);









let slicedElement15 = data.slice(-17, -8);


let newArray15 = slicedElement15;

console.log('task315')
console.log("New array:", newArray15);








let slicedElement16 = data.slice(1,);


let newArray16 = slicedElement16;

console.log('task316')
console.log("New array:", newArray16);








let slicedElement17 = data.slice(1,26);


let newArray17 = slicedElement17;

console.log('task317')
console.log("New array:", newArray17);







let slicedElement18 = data.slice(6,);


let newArray18 = slicedElement18;

console.log('task318')
console.log("New array:", newArray18);








let slicedElement19 = data.slice(-5,);


let newArray19 = slicedElement19;

console.log('task319')
console.log("New array:", newArray19);






let slicedElement20 = data.slice(0,13);


let newArray20 = slicedElement20;

console.log('task320')
console.log("New array:", newArray20);







let slicedElement21 = data.slice(-13,);


let newArray21 = slicedElement21;

console.log('task321')
console.log("New array:", newArray21);








let slicedElement22 = data.slice(1, 26);


let newArray22 = slicedElement22;

console.log('task322')
console.log("New array:", newArray22);









let slicedElement23 = data.slice(2, 19);


let newArray23 = slicedElement23;

console.log('task323')
console.log("New array:", newArray23);








let slicedElement24 = data.slice(7, 26);


let newArray24 = slicedElement24;

console.log('task324')
console.log("New array:", newArray24);













let slicedElement25 = data.slice(9, 15);


let newArray25 = slicedElement25;

console.log('task325')
console.log("New array:", newArray25);







let slicedElement26 = data.slice(7, 19);


let newArray26 = slicedElement26;

console.log('task326')
console.log("New array:", newArray26);










let slicedElement27 = data.slice(0, 5);


let newArray27 = slicedElement27;

console.log('task327')

let slicedElement271 = data.slice(20);

let newArray28 = slicedElement271;

let combinedArrays = newArray27.concat(newArray28)


console.log(combinedArrays)












let slicedElement29 = data.slice(2, 5);
let newArray29 = slicedElement29;
console.log('task328')
let slicedElement272 = data.slice(14, 17);
let newArray291 = slicedElement272;
let combinedArrayssec = newArray29.concat(newArray291)
console.log(combinedArrayssec)











//task 2 baigtos








console.log(data)






const filteredArray = data.filter(item => {
  return typeof item === 'number' && item >= 0
})
console.log('filtermethod')
console.log(filteredArray)




const filteredArray1 = data.filter(item => {
    return typeof item === 'number' && item <= 0
})
console.log('filtermethod1')
console.log(filteredArray1)






const filteredArray2 = data.filter(item => {
    return typeof item === 'number' && item % 2 === 0;
  });
  console.log('filter metod2')
  console.log(filteredArray2);



  const filteredArray3 = data.filter(item => {
    return typeof item === 'number' && item % 3 === 0;
  });
  console.log('filter metod3')
  console.log(filteredArray3);



  const filteredArray4 = data.filter(item => {
    return typeof item === 'number' && item % 5 === 0;
  });
  console.log('filter metod4')
  console.log(filteredArray4);




  const filteredArray5 = data.filter(item => {
    return typeof item === 'number' && item % 11 === 0;
  });
  console.log('filter metod5')
  console.log(filteredArray5);





  const filteredArray6 = data.filter(item => {
    return typeof item === 'number' && item % 31 === 0;
  });
  console.log('filter metod6')
  console.log(filteredArray6);





  const filteredArray7 = data.filter(item => {
    return typeof item === 'number' && item % 2 === 0 && item % 3 === 0;
  });
  console.log('filter metod7')
  console.log(filteredArray7);





  const filteredArray8 = data.filter(item => {
    return typeof item === 'number' && item % 3 === 0 && item % 7 === 0;
  });
  console.log('filter metod8')
  console.log(filteredArray8);

 



  const filteredArray9 = data.filter(item => {
    return typeof item === 'number' && item % 5 === 0 && item % 9 === 0;
  });
  console.log('filter metod9')
  console.log(filteredArray9);





  const filteredArray10 = data.filter(item => {
    return typeof item === 'number' && item % 5 === 0 && item % 11 === 0;
  });
  console.log('filter metod10')
  console.log(filteredArray10);


  const filteredArray11 = data.filter(item => {
    return typeof item === 'number' && item % 2 === 0 && item % 8 === 0  && item % 12 === 0;
  });
  console.log('filter metod11')
  console.log(filteredArray11);




  const filteredArray12 = data.filter(item => {
    return typeof item === 'number' && item % 2 === 0 || item % 3 === 0;
  });
  console.log('filter metod12')
  console.log(filteredArray12);








  
  const filteredArray13 = data.filter(item => {
    return typeof item === 'number' && item % 3 === 0 || item % 5 === 0;
  });
  console.log('filter metod13')
  console.log(filteredArray13);












  const filteredArray14 = data.filter(item => {
    return typeof item === 'number' && item % 5 === 0 || item % 6 === 0;
  });
  console.log('filter metod14')
  console.log(filteredArray14);








  
  const filteredArray15 = data.filter(item => {
    return typeof item === 'number' && item % 7 === 0 || item % 8 === 0;
  });
  console.log('filter metod15')
  console.log(filteredArray15);




  
  const filteredArray16 = data.filter(item => {
    return typeof item === 'number' && item % 9 === 0 || item % 13 === 0;
  });
  console.log('filter metod16')
  console.log(filteredArray16);







  
  const filteredArray17 = data.filter(item => {
    return typeof item === 'number' && item % 2 === 0 && item % 3 === 0 || item % 5 === 0;
  });
  console.log('filter metod17')
  console.log(filteredArray17);



  const filteredArray18 = data.filter(item => {
    return typeof item === 'number' && item % 5 === 0 && item % 7 === 0 || item % 9 === 0;
  });
  console.log('filter metod18')
  console.log(filteredArray18);





  const filteredArray19 = data.filter(item => {
    return typeof item === 'number' && item % 7 === 0 && item % 8 === 0 || item % 11 === 0;
  });
  console.log('filter metod19')
  console.log(filteredArray19);





  const filteredArray20 = data.filter(item => {
    return typeof item === 'number' && item % 9 === 0 && item % 12 === 0 || item % 13 === 0;
  });
  console.log('filter metod20')
  console.log(filteredArray20);






  const filteredArray21 = data.filter(item => {
    return typeof item === 'number' && item > 100
  });
  console.log('filter metod21')
  console.log(filteredArray21);






  
  const filteredArray22 = data.filter(item => {
    return typeof item === 'number' && item > 555
  });
  console.log('filter metod22')
  console.log(filteredArray22);







  
  const filteredArray23 = data.filter(item => {
    return typeof item === 'number' && item >= 888
  });
  console.log('filter metod23')
  console.log(filteredArray23);






  
  const filteredArray24 = data.filter(item => {
    return typeof item === 'number' && item >= 6789
  });
  console.log('filter metod24')
  console.log(filteredArray24);





  
  const filteredArray25 = data.filter(item => {
    return typeof item === 'number' && item < 50
  });
  console.log('filter metod25')
  console.log(filteredArray25);







  
  const filteredArray26 = data.filter(item => {
    return typeof item === 'number' && item < 1000
  });
  console.log('filter metod26')
  console.log(filteredArray26);







  
  const filteredArray27 = data.filter(item => {
    return typeof item === 'number' && item <= -1
  });
  console.log('filter metod27')
  console.log(filteredArray27);







  
  
  const filteredArray28 = data.filter(item => {
    return typeof item === 'number' && item <= -5564
  });
  console.log('filter metod28')
  console.log(filteredArray28);







  
  
  const filteredArray29 = data.filter(item => {
    return typeof item === 'number' && item < 1000 && item > 500
  });
  console.log('filter metod29')
  console.log(filteredArray29);






   
  const filteredArray30 = data.filter(item => {
    return typeof item === 'number' && item < 100 && item > 0
  });
  console.log('filter metod30')
  console.log(filteredArray30);







   
  const filteredArray31 = data.filter(item => {
    return typeof item === 'number' && item < 0 && item > -50
  });
  console.log('filter metod31')
  console.log(filteredArray31);



 
  const filteredArray32 = data.filter(item => {
    return typeof item === 'number' && item <= 0 && item > -100
  });
  console.log('filter metod32')
  console.log(filteredArray32);






   
  const filteredArray33 = data.filter(item => {
    return typeof item === 'number' && item >= 0 && item < 55
  });
  console.log('filter metod33')
  console.log(filteredArray33);



  


   
  const filteredArray34 = data.filter(item => {
    return typeof item === 'number' && item >= 444 && item <= 654
  });
  console.log('filter metod34')
  console.log(filteredArray34);







   
  const filteredArray35 = data.filter(item => {
    return typeof item === 'number' && item >= 0  && item % 2 === 0
  });
  console.log('filter metod35')
  console.log(filteredArray35);






  
  const filteredArray36 = data.filter(item => {
    return typeof item === 'number' && item >= 0  && item % 3 === 0
  });
  console.log('filter metod36')
  console.log(filteredArray36);





  
  const filteredArray37 = data.filter(item => {
    return typeof item === 'number' && item < 0  && item % 4 === 0
  });
  console.log('filter metod37')
  console.log(filteredArray37);




  
  const filteredArray38 = data.filter(item => {
    return typeof item === 'number' && item < 0  && item % 111 === 0
  });
  console.log('filter metod38')
  console.log(filteredArray38);







  const filteredArray39 = data.filter(item => {
    return typeof item === 'number' && item > 500  && item % 2 === 0
  });
  console.log('filter metod39')
  console.log(filteredArray39);





  const filteredArray40 = data.filter(item => {
    return typeof item === 'number' && item > 1000  && item % 3 === 0
  });
  console.log('filter metod40')
  console.log(filteredArray40);





  const filteredArray41 = data.filter(item => {
    return typeof item === 'number' && item < 1000  && item % 9 === 0
  });
  console.log('filter metod41')
  console.log(filteredArray41);





  const filteredArray42 = data.filter(item => {
    return typeof item === 'number' && item < 500  && item % 2 === 0
  });
  console.log('filter metod42')
  console.log(filteredArray42);







  const filteredArray43 = data.filter(item => {
    return typeof item === 'number' && item >= 33  && item % 3 === 0
  });
  console.log('filter metod43')
  console.log(filteredArray43);








  const filteredArray44 = data.filter(item => {
    return typeof item === 'number' && item >= 444  && item % 12 === 0
  });
  console.log('filter metod44')
  console.log(filteredArray44);







  const filteredArray45 = data.filter(item => {
    return typeof item === 'number' && item <= 155  && item % 5 === 0
  });
  console.log('filter metod45')
  console.log(filteredArray45);








  const filteredArray46 = data.filter(item => {
    return typeof item === 'number' && item <= -333  && item % 9 === 0
  });
  console.log('filter metod46')
  console.log(filteredArray46);




  const filteredArray47 = data.filter(item => {
    return typeof item === 'number' && item > 100  && item < 500 && item % 5 === 0
  });
  console.log('filter metod47')
  console.log(filteredArray47);







  
  const filteredArray48 = data.filter(item => {
    return typeof item === 'number' && item >= 888  && item < 1000 && item % 2 === 0
  });
  console.log('filter metod48')
  console.log(filteredArray48);








  
  const filteredArray49 = data.filter(item => {
    return typeof item === 'number' && item <= 888  && item >= -333 && item % 3 === 0 && item !== 0
  });
  console.log('filter metod49')
  console.log(filteredArray49);










  
  const filteredArray50 = data.filter(item => {
    return typeof item === 'number'
  });
  console.log('filter metod50')
  console.log(filteredArray50);







  
  const filteredArray51 = data.filter(item => {
    return typeof item === 'string'
  });
  console.log('filter metod51')
  console.log(filteredArray51);






  
  const filteredArray52 = data.filter(item => {
    return typeof item === 'string' && item.length > 5 
  });
  console.log('filter metod52')
  console.log(filteredArray52);








  
  const filteredArray53 = data.filter(item => {
    return typeof item === 'string' && item.length <= 5 
  });
  console.log('filter metod53')
  console.log(filteredArray53);








  
  const filteredArray54 = data.filter(item => {
    return typeof item === 'string' && item.length < 7 
  });
  console.log('filter metod54')
  console.log(filteredArray54);








  
  const filteredArray55 = data.filter(item => {
    return typeof item === 'string' && item.includes('t')
  });
  console.log('filter metod55')
  console.log(filteredArray55);










  const filteredArray56 = data.filter(item => {
    return typeof item === 'string' && item.includes('y')
  });
  console.log('filter metod56')
  console.log(filteredArray56);








  const filteredArray57 = data.filter(item => {
    return typeof item === 'string' && (item.includes('e') || item.includes('a'))
  });
  console.log('filter metod57')
  console.log(filteredArray57);





  const filteredArray58 = data.filter(item => {
    return typeof item === 'string' && (item.includes('t') && item.includes('i'))
  });
  console.log('filter metod58')
  console.log(filteredArray58);







  const filteredArray59 = data.filter(item => {
    return typeof item === 'string' && (item.includes('t') && !item.includes('k'))
  });
  console.log('filter metod59')
  console.log(filteredArray59);










  const filteredArray60 = data.filter(item => {
    return typeof item === 'string' && (item.includes('a') && !item.includes('s'))
  });
  console.log('filter metod60')
  console.log(filteredArray60);





  const hasMultipleTs = str => {
    let tCount = 0;
    
    for (let char of str) {
      if (char === 't') {
        tCount++;
      }
      if (tCount > 1) {
        return true; 
      }
    }
    
    return false;  
  };
  
  const filteredStrings = data.filter(item => {
    return typeof item === 'string' && hasMultipleTs(item);
  });
  console.log('filter metod61')
  console.log(filteredStrings);
  







  const filteredArray62 = data.filter(item => {
    return typeof item === 'string' && item.includes('st')
  });
  console.log('filter metod62')
  console.log(filteredArray62);







  const filteredArray63 = data.filter(item => {
    return typeof item === 'string' && item.includes('nd')
  });
  console.log('filter metod63')
  console.log(filteredArray63);






  const filteredArray64 = data.filter(item => {
    return typeof item === 'string' && !item.includes('s')
  });
  console.log('filter metod64')
  console.log(filteredArray64);






  
  const filteredArray65 = data.filter(item => {
    return typeof item === 'string' && !item.includes('t')
  });
  console.log('filter metod65')
  console.log(filteredArray65);










  const filteredArray66 = data.filter(item => {
    return typeof item === 'string' && (!item.includes('r') && !item.includes('l'))
  });
  console.log('filter metod66')
  console.log(filteredArray66);







  
const filteredArray67 = str => {
  return !isNaN(str.charAt(0));
};

const filteredStrings2 = data.filter(item => {
  return typeof item === 'string' && filteredArray67(item);
});

console.log(filteredStrings2);








const startsWithS = str => {
  return str.charAt(0).toLowerCase() === 's';
};

const filteredStrings3 = data.filter(item => {
  return typeof item === 'string' && startsWithS(item);
});

console.log(filteredStrings3);








const startsWithO = str => {
    return str.charAt(0).toLowerCase() === 'o';
  };
  
  const filteredStrings4 = data.filter(item => {
    return typeof item === 'string' && startsWithO(item);
  });
  
  console.log(filteredStrings4);
  
  
  
  



  
  const endsWithD = str => {
    return str.charAt(str.length -1).toLowerCase() === 'd';
  };
  
  const filteredStrings5 = data.filter(item => {
    return typeof item === 'string' && endsWithD(item);
  });
  
  console.log(filteredStrings5);
  
  
  





  
  const endsWithS = str => {
    return str.charAt(str.length - 1).toLowerCase() === 's';
  };
  
  const filteredStrings6 = data.filter(item => {
    return typeof item === 'string' && endsWithS(item);
  });
  
  console.log(filteredStrings6);
  
  
  






  
  const filteredArray71 = data.filter(item => {
    return typeof item === 'string' && (item.includes('o') && item.length > 4)
  });
  console.log('filter metod71')
  console.log(filteredArray71);












  
  const filteredArray72 = data.filter(item => {
    return typeof item === 'string' && (item.includes('a') && item.length >= 5)
  });
  console.log('filter metod72')
  console.log(filteredArray72);






  const hasEvenLength = str => {
    return str.length % 2 === 0;
  };


  const filteredArray73 = data.filter(item => {
    return typeof item === 'string' && hasEvenLength(item)
  });
  console.log('filter metod73')
  console.log(filteredArray73);







  const hasEvenLength1 = str => {
    return str.length % 2 !== 0  && str.includes('s')
  };


  const filteredArray74 = data.filter(item => {
    return typeof item === 'string'  && hasEvenLength1(item) 
  });
  console.log('filter metod74')
  console.log(filteredArray74);












  const hasThirdA = str => {
    return str.charAt(2 ).toLowerCase() === 'a';
  };
  
  const filteredStrings10 = data.filter(item => {
    return typeof item === 'string' && hasThirdA(item);
  });
  
  console.log(filteredStrings10);







  
  


  const hasFourthL = str => {
    return str.charAt(3 ).toLowerCase() === 'l';
  };
  
  const filteredStrings11 = data.filter(item => {
    return typeof item === 'string' && hasFourthL(item);
  });
  
  console.log(filteredStrings11);



  
  


  const hasIsNotT = str => {
    return str.charAt(4 ).toLowerCase() !== 't';
  };
  
  const filteredStrings12 = data.filter(item => {
    return typeof item === 'string' && (hasIsNotT(item) && item.length > 4);
  });
  
  console.log(filteredStrings12);



  


const atitinka = str => {
  return str.length < 6 && 
         !str.startsWith('e') && 
         isNaN(str.charAt(0));
};

const filteredStrings13 = data.filter(item => {
  return typeof item === 'string' && atitinka(item);
});

console.log(filteredStrings13);






/////third task end



console.log(data)



// Using a for loop
let numbersForLoop = [];
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
        numbersForLoop.push(data[i]);
    }
}




// Using map method with filter
let numbersMap = data.filter(item => typeof item === 'number').map(item => item);

// Print results
console.log("Using for loop:", numbersForLoop);
console.log("Using map method:", numbersMap);



// Using forEach
let numbersForEach = [];
data.forEach(item => {
    if (typeof item === 'number') {
        numbersForEach.push(item);
    }
});


console.log("Using forEach:", numbersForEach);










