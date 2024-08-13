const myPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random()

    setTimeout(() => {
        if (randomNumber > 0.5) {
            resolve('Hello')
        } else {
            reject('Error...')
        }
    }, 1000)
})

myPromise
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })

myPromise
    .then(data => {
        return 'Duomenys teisingi: ' + data
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })


API
fetch('student.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })

fetch('student.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })


// CATS LIST

fetch('https://catfact.ninja/breeds')
    .then(res => res.json())
    .then(apiData => {
        const catsList = document.createElement('ul')
        document.body.prepend(catsList)

        apiData.data.forEach(cat => {
            const catElement = document.createElement('li')
            catElement.textContent = cat.breed
            catsList.append(catElement)
        })
    })



const catButton = document.querySelector('#cat-facts button')

catButton.addEventListener('click', () => {
    fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(data => {
            const factElement = document.querySelector('#cat-facts p')
            factElement.textContent = data.fact
        })
})

fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
        const dogImg = document.querySelector('#dog-image img')
        dogImg.src = data.message
    })

fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        console.log(data.results[0])
    })




const renderUserCard = (user) => {
    const img = document.createElement ('img')
    img.src = user.picture.large
    img.alt = `${user.name.first} profile picture`

    const intro = document.createElement ('h4')
intro.innerText = `${user.name.first} ${user.name.last}, ${user.dob.age}`

const contacts = document.createElement('h5')
contacts.innerText = user.email

const card = document.createElement ('div')
card.append(img, intro, contacts)
document.body.append(card)
}

const fetchRandomUser = async () => {
     try {
        const response = await fetch('https://randomuser.me/api/')
        if (response.ok) {
            const data = await response.json()
            renderUserCard(data.results[0])   
            }
        }catch(error) {
            console.error(error)
        }
}

fetchRandomUser ()



const checkIfPersonVIP = (guests, guestName) => {
    const guest = guests.find(guest => guest.name === guestName);
    document.body.innerText = guest ? `${guestName} ${guest.vip ? 'is' : 'isn\'t'} a VIP` : `${guestName} isn't found in the guest list`;
  }
  
  const fetchPartyGuests1 = async () => {
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
  
  1();
  




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
  