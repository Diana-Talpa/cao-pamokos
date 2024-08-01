alert( null || 2 || undefined );


alert( alert(1) || 2 || alert(3) );

// Atsakymas: iš pradžių 1, paskui 2.

// alert iškvietimas negrąžina reikšmės. Arba, kitaip tariant, jis grįžta undefined.

// Pirmasis ARBA || įvertina kairiojo operando alert(1). Tai rodo pirmąjį pranešimą su 1.

// alert grąžinamas undefined, todėl ARBA pereina prie antrojo operando, ieškančio teisingos reikšmės.

// Antrasis operandas 2 yra teisingas, todėl vykdymas sustabdomas, 2 yra grąžinamas ir tada rodomas išoriniu alert.

// 3 nebus, nes tikrinimas nepasiekia alert(3).


if (age >= 14 && age <= 90)


    // apie diapozona


    if (!(age >= 14 && age <= 90))

        if (age < 14 || age > 90)