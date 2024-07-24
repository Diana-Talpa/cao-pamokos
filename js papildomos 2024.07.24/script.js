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































