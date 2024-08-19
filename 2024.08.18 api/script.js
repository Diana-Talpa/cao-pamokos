// // fetch('https://randomuser.me/api/')
// // .then(res => res.json())
// // .then(dara => {})


// const renderUserCard = (user) => {
//     const img = document.createElement('img')
//     img.src = user.picture.large
//     img.alt = `${user.name.first} profile picture`

//     const intro = document.createElement('h4')
//     intro.innerText = `${user.name.first} ${user.name.last}, ${user.dob.age}`

//     const contacts = document.createElement('h5')
//     contacts.innerText = user.email

//     const card = document.createElement('div')
//     card.append(img, intro, contacts)
//     document.body.append(card)
// }

// const fetchRandomUser = async () => {
//     try {
//         const response = await fetch ('https://randomuser.me/api/')
//         if (response.ok) {
//             const data = await response.json()
//             renderUserCard(data.results[0])
//         }
//     } catch(error) {
//         console.error(error)
//     }
    
// }

// fetchRandomUser()




fetch('https://official-joke-api.appspot.com/random_joke')
.then(res => res.json())
.then(data => {
    const jokes = document.getElementById('joke')

    jokes.textContent = `${data.setup} - ${data.punchline}`
})
.catch(error => {
    console.error('Error geting joke:', error)
})
