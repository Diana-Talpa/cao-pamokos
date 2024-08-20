  
   fetch('https://jsonplaceholder.typicode.com/users/8')
   .then(response => response.json())
   .then(user => {
       const userInfo = document.getElementById('userInfo');

      
       const nameItem = document.createElement('li');
       nameItem.textContent = `Name: ${user.name}`;
       
       const usernameItem = document.createElement('li');
       usernameItem.textContent = `Username: ${user.username}`;
       
       const emailItem = document.createElement('li');
       const emailLink = document.createElement('a');
       emailLink.href = `mailto:${user.email}`;
       emailLink.textContent = `Email: ${user.email}`;
       emailItem.appendChild(emailLink);
       
       const addressItem = document.createElement('li');
       addressItem.textContent = `Address: ${user.address.street}, ${user.address.city}`;

       const phoneItem = document.createElement('li');
       phoneItem.textContent = `Phone: ${user.phone}`;

       const websiteItem = document.createElement('li');
       websiteItem.textContent = `Website: ${user.website}`;

       const companyItem = document.createElement('li');
       companyItem.textContent = `Company: ${user.company.name}`;

     
       userInfo.appendChild(nameItem);
       userInfo.appendChild(usernameItem);
       userInfo.appendChild(emailItem);
       userInfo.appendChild(addressItem);
       userInfo.appendChild(phoneItem);
       userInfo.appendChild(websiteItem);
       userInfo.appendChild(companyItem);
   })
   .catch(error => console.error('Error fetching user data:', error));