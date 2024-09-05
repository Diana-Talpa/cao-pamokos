/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';


document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');
    const output = document.getElementById('output');
    const message = document.getElementById('message');
    

    btn.addEventListener('click', () => {
      fetchUsers(); 
    });
  
    function fetchUsers() {
      const ENDPOINT = 'https://api.github.com/users';
  
      fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
          
          message.style.display = 'none';
                   
          output.innerHTML = '';
   
          data.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
  
            userCard.innerHTML = `
              <img src="${user.avatar_url}" alt="${user.login}'s avatar" class="avatar">
              <h2>${user.login}</h2>
            `;
  
            output.appendChild(userCard);
          });
        })
        .catch(error => {
          output.innerHTML = `<p style="color: red;">Error: Unable to fetch users.</p>`;
          console.error('Error fetching users:', error);
        });
    }
  });
  