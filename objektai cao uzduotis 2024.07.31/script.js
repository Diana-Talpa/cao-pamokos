let createPerson = {

    name: 'Jonas',
    lastName: 'Jonaitis',
    age: 30,
}

console.log(createPerson)




const createPerson2 = (name, lastname, age) => {
    return {
        name,
        lastname,
        age
    };
};


console.log(createPerson2("Jonas", "Jonaitis", 30))



const printCarInfo = (car) => {

    return `Brand: ${car.brand}, Model: ${car.model}, ${car.year}`
        

    

}


// console.log(printCarInfo({ brand: 'Toyota', model: 'Corolla', year: 2020 }))



const printCarInfo2 = (car) => {
    return `Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`;
};
console.log(printCarInfo2({ brand: "Toyota", model: "Corolla", year: 2020 })); // "Brand: Toyota, Model: Corolla, Year: 2020"




const printEmployeeInfo = (employees) => {
    const names = Object.keys(employees);
    names.forEach(name => {
        console.log(`Name: ${name}, Position: ${employees[name]}`);
    });
};



printEmployeeInfo({ "Jonas": "Engineer", "Petras": "Manager" });
// "Name: Jonas, Position: Engineer"
// "Name: Petras, Position: Manager"



const findBook = (books, searchQuery) => books.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

console.log(findBook([{ title: "Haris Poteris ir išminties akmuo", author: "J.K. Rowling" }, { title: "Hobitas", author: "J.R.R. Tolkien" }], "Poteris"));





const countAverages = (studentGroups) => {
    const averages = {};
    for (const group in studentGroups) {
        const average = studentGroups[group].reduce((sum, score) => sum + score, 0) / studentGroups[group].length;
        averages[group] = average;
    }
    return averages;
};


console.log(countAverages({ "Group A": [80, 90, 100], "Group B": [70, 80, 90] }));
// { "Group A": 90, "Group B": 80 }




const updateInventory = (inventory, changes) => {
    changes.forEach(change => {
        if (change.action === "add") {
            inventory[change.item] = (inventory[change.item] || 0) + change.change;
        } else if (change.action === "remove") {
            inventory[change.item] = (inventory[change.item] || 0) - change.change;
        }
    });
    return inventory;
};

console.log(updateInventory({ "apples": 5, "bananas": 8 }, [{ item: "apples", change: 3, action: "add" }, { item: "bananas", change: 2, action: "remove" }]));
// { "apples": 8, "bananas": 6 }







function Car(brand, model, engine){
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.turOn = function (){
        alert('Wrooom!')
    }
}

const myCar = new Car('BMW', 'X3', 'Diesel')


console.log(myCar)
myCar.turOn()