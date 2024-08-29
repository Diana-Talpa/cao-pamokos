// const state = {};

// const createCheckbox = () => {
//   const checkbox = document.createElement('INPUT');
//   checkbox.setAttribute('type', 'checkbox');
//   checkbox.setAttribute('id', 'isVipCheckbox');
//   document.body.append(checkbox);

//   const checkboxLabel = document.createElement('label');
//   checkboxLabel.setAttribute('for', 'isVipCheckbox');
//   checkboxLabel.innerText = 'VIP';
//   document.body.append(checkboxLabel);
// }

// const createSearchForm = () => {
//   const searchBox = document.createElement('input');
//   searchBox.setAttribute('type', 'search');
//   searchBox.setAttribute('id', 'search');
//   searchBox.setAttribute('name', 'search');
//   document.body.appendChild(searchBox);

//   const searchButton = document.createElement('button');
//   searchButton.innerHTML = 'Search for name';
//   searchButton.setAttribute('id', 'searchButton');

//   const form = document.createElement('form');
//   form.append(searchBox, searchButton);
//   document.body.append(form);
// }

// const createTableSkeleton = () => {
//   const id = document.createElement('th');
//   id.innerText = 'ID';

//   const image = document.createElement('th');
//   image.innerText = 'Image';

//   const firstName = document.createElement('th');
//   firstName.innerText = 'First name';

//   const lastName = document.createElement('th');
//   lastName.innerText = 'Last name';

//   const city = document.createElement('th');
//   city.innerText = 'City ';

//   const favColor = document.createElement('th');
//   favColor.innerText = 'Fav color';

//   const tr = document.createElement('tr');
//   tr.append(id, image, firstName, lastName, city, favColor);

//   const thead = document.createElement('thead');
//   thead.append(tr);

//   const table = document.createElement('table');
//   table.append(thead, document.createElement('tbody'));
//   document.body.append(table);
// }

// function populateTable(robots) {
//   const tbody = document.querySelector('tbody');
//   tbody.innerHTML = '';

//   robots.forEach(robot => {
//     const id = document.createElement('td');
//     id.innerText = robot.id

//     const img = document.createElement('img');
//     img.src = robot.image;
//     img.setAttribute('alt', 'UserPicture');
//     const image = document.createElement('td');
//     image.append(img);

//     const [name, surname] = robot.name.split(' ');

//     const firstName = document.createElement('td');
//     firstName.innerText = name;

//     const lastName = document.createElement('td');
//     lastName.innerText = surname;

//     const city = document.createElement('td');
//     city.innerText = robot.city;

//     const favColor = document.createElement('td');
//     favColor.innerText = robot.fav_color;

//     const tr = document.createElement('tr')
//     tr.append(id, image, firstName, lastName, city, favColor);
//     tbody.append(tr);
//   });
// }

// createCheckbox();
// createSearchForm();
// createTableSkeleton();

// document.querySelector('form').addEventListener('submit', (event) => {
//   event.preventDefault();
//   const searchString = document.getElementById('search').value.toLowerCase();
//   populateTable(state.robots.filter(robot => robot.name.toLowerCase().includes(searchString)));
// })

// document.getElementById('isVipCheckbox').addEventListener('change', (event) => {
//   populateTable(event.target.checked ? state.robots.filter(robot => robot.vip) : state.robots);
// });

// async function fetchData() {
//   try {
//     let response = await fetch('https://polar-chartreuse-silverfish.glitch.me');
//     if (response.ok) {
//       state.robots = await response.json();
//       populateTable(state.robots);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();







//////teatro bilietai

// const ageInput = document.getElementById("age");
// const form = document.querySelector("form");
// const priceDisplay = document.getElementById("price");

// function handleFormSubmit(event) {
//   event.preventDefault()
//   const price = 6;
//   const age = Number(ageInput.value);

//   if (age >= 60) {
//     priceDisplay.textContent = (1/3 * price).toFixed(2);
//   } else if (age <= 16) {
//     priceDisplay.textContent = (0.5 * price).toFixed(2);
//   } else {
//     priceDisplay.textContent = price.toFixed(2);
//   }
// }

// form.addEventListener("submit", handleFormSubmit);






/////////////// armijos amziaus forma


// const ageInput = document.getElementById('age')
// const tInput = document.querySelector("input[type=checkbox]")
// const form = document.querySelector('form')
// const result = document.getElementById('result')

// form.addEventListener('submit', handleFormSubmit)

// function handleFormSubmit(event) {
//     event.preventDefault()
//     const age = Number(ageInput.value)
//     const isConcinted = tInput.checked

//     if (age >= 18 && age <= 30 && !isConcinted ) {
//         result.textContent = "Army's calling you"
//     } else {
//         result.textContent = "No army for you"
//     }
// }




////Raidziu zaidimas


document.addEventListener('DOMContentLoaded', function () {
    const words = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
    let currentWord = "";
    let guessesLeft = 6;
    let guessedLetterSet = new Set();
  
    const form = document.getElementById('guessForm');
    const letterInput = document.getElementById('letterInput');
    const wordToGuess = document.getElementById('wordToGuess');
    const result = document.getElementById('result');
    const guessedLetters = document.getElementById('guessedLetters');
    const guessesLeftElement = document.getElementById('guessesLeft');
  
    setupNewWord();
    form.addEventListener('submit', handleGuess);
    document.getElementById('newWordButton').addEventListener('click', setupNewWord);
  
    function setupNewWord() {
      currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
      guessedLetterSet.clear();
      guessesLeft = 6;
      updateDisplay();
    }
  
    function handleGuess(event) {
      event.preventDefault();
      const guess = letterInput.value.toUpperCase();
  
      if (guess.length === 1 && /^[A-Z]$/i.test(guess)) {
        if (!guessedLetterSet.has(guess)) {
          guessedLetterSet.add(guess);
          updateGame(guess);
        } else {
          result.textContent = "Ši raidė jau buvo spėta.";
        }
      } else {
        result.textContent = "Įveskite vieną raidę.";
      }
  
      letterInput.value = '';
      letterInput.focus();
    }
  
    function updateDisplay() {
      wordToGuess.textContent = currentWord.split('').map(letter => guessedLetterSet.has(letter) ? letter : '_').join(' ');
      guessedLetters.textContent = Array.from(guessedLetterSet).join(', ');
      guessesLeftElement.textContent = guessesLeft;
    }
  
    function updateGame(guess) {
      let correctGuess = false;
  
      for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === guess) {
          correctGuess = true;
          break;
        }
      }
  
      if (correctGuess) {
        updateDisplay();
        if (!wordToGuess.textContent.includes('_')) {
          result.textContent = "Sveikiname! Atspėjote žodį!";
          form.removeEventListener('submit', handleGuess);
        }
      } else {
        guessesLeft--;
        updateDisplay();
        if (guessesLeft === 0) {
          result.textContent += " Žaidimas baigtas. Žodis buvo: " + currentWord;
          form.removeEventListener('submit', handleGuess);
        } else {
          result.textContent = "Neteisingas spėjimas.";
        }
      }
    }
  });




  saveToDos([{ name: 'Išnešti šiukšles' }, { name: 'Susitikiti su draugais' }]);




  function saveToDos(todos) {
    const request = indexedDB.open('todos', 1);

    request.onupgradeneeded = function(event) {
        const db = event.target.result;
        const objectStore = db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
    };

    request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction('todos', 'readwrite');
        const objectStore = transaction.objectStore('todos');
        todos.forEach(todo => objectStore.add(todo));
    };

    request.onerror = function(event) {
        console.log('Error opening Indexed DB:', event);
    };
}





function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTask = taskInput.value.trim();
    if (newTask) {
      const taskList = document.getElementById('taskList');
      const li = document.createElement('li');
      li.textContent = newTask;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Ištrinti';
      deleteButton.onclick = function () { li.remove(); };
      li.appendChild(deleteButton);
      taskList.appendChild(li);
      taskInput.value = '';
      saveTasks();
    }
  }
  
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(taskItem => {
      tasks.push(taskItem.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      tasks.forEach(task => {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Ištrinti';
        deleteButton.onclick = function () { li.remove(); };
        li.appendChild(deleteButton);
        taskList.appendChild(li);
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadTasks);
  