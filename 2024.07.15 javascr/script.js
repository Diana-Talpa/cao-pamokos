// function myFirst () {
//     alert('Diana')
// }


// myFirst()



// function alertName (name) {
//     alert(name);
// }
// alertName('Diana')


// function generateRandomNumber () {
//     return Math.floor(Math.random() * 5) + 1;
// }
// generateRandomNumber()


function getNameAndSurnameLength(name, surname) {
    return name.length + surname.length;
  }
  getNameAndSurnameLength('John', 'Snow');



  function getLetterByIndex(index) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return alphabet[index];
  }
  getLetterByIndex(0);




  function calculate(n1, n2, operator) {
    switch(operator){
      case 'sum':
        return n1 + n2;
      case 'sub':
        return n1 - n2;
      case 'div':
        return n1 / n2;
      case 'multi':
        return n1 * n2;
    }
  }
  calculate(1, 2, 'sum');






  function generateRandomNumber() {
    return Math.floor(Math.random() * 10 + 1);
  }
  
  function squareNumber(number) {
    return Math.pow(number, 2);
  }
  
  squareNum(generateRandomNumber());