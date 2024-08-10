const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 5000)
  })
  
  myPromise.then(() => alert("yes, it works!"));
  
  console.log("This code will run first, even though it is the last one. This is our asynchrony")


  const myPromise2 = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 5) + 1;
  
    setTimeout(() => {
      if(random === 1){
        reject();
      }
      else{
        resolve();
      }
    }, 5000)
  })
  
  myPromise
    .then(() => alert("yes, it works!"))
    .catch(() => alert("Oops, promise rejected"))




    const myPromise1 = new Promise((resolve, reject) => {
        const random = Math.floor(Math.random() * 5) + 1;
      
        setTimeout(() => {
          if(random === 1){
            reject();
          }
          else{
            resolve();
          }
        }, 5000)
      })
      
      myPromise
        .then(() => "This is a message")
        .then((message) => alert(message))
        .catch(() => alert("Oops, promise rejected"))




        const renderUserCard = (user) => {
            const img = document.createElement('img');
            img.src = user.picture.large;
            img.alt = `${user.name.first} profile picture`;
          
            const intro = document.createElement('h4');
            intro.innerText = `${user.name.first} ${user.name.last}, ${user.dob.age}`;
          
            const contacts = document.createElement('h5');
            contacts.innerText = user.email;
          
            const card = document.createElement('div');
            card.append(img, intro, contacts);
            document.body.append(card);
          };
          
          const fetchRandomUser = async () => {
            try {
              const response = await fetch('https://randomuser.me/api/');
              if (response.ok) {
                const data = await response.json();
                renderUserCard(data.results[0]);
              }
            } catch(error) {
              console.error(error);
            }
          };
          
          fetchRandomUser();
          



          const checkIfPersonVIP = (guests, guestName) => {
            const guest = guests.find(guest => guest.name === guestName);
            document.body.innerText = guest ? `${guestName} ${guest.vip ? 'is' : 'isn\'t'} a VIP` : `${guestName} isn't found in the guest list`;
          }
          
          const fetchPartyGuests = async () => {
            try {
              const response = await fetch('https://party-wedding.glitch.me/v1/party');
              if (response.ok) {
                const guests = await response.json();
                checkIfPersonVIP(guests, 'Kristupas Lapeika')
              }
            } catch (error) {
              console.error(error);
            }
          };
          
          fetchPartyGuests();
          




          const displayGuests = (guests) => {
            const tbody = document.querySelector('tbody');
            guests.forEach(guest => {
              const name = document.createElement('td');
              name.innerText = guest.name;
          
              const attending = document.createElement('td');
              attending.innerText = guest.attending ? '+' : '-';
          
              const plusOne = document.createElement('td');
              plusOne.innerText = guest.plusOne ? '+' : '-';
          
              const tr = document.createElement('tr');
              tr.append(name, attending, plusOne);
              tbody.append(tr);
            })
          }
          
          const fetchPartyGuests = async () => {
            try {
              const response = await fetch('https://party-wedding.glitch.me/v1/wedding');
              if (response.ok) {
                const guests = await response.json();
                displayGuests(guests);
              }
            } catch (error) {
              console.error(error);
            }
          };
          
          fetchPartyGuests();
          