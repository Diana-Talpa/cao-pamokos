// fetch('https://catfact.ninja/breeds')
//     .then(res => res.json())
//     .then(apiData => {
//         const catsList1 = document.createElement('ul')
//         document.body.prepend(catsList1)
    
        
//         apiData.data.forEach(cat => {
//             const catElement1 = document.createElement('li')
//             catElement1.textContent = cat.breed
//         catsList1.append(catElement1)
//     })
// })



// CATS LIST
// fetch('https://catfact.ninja/breeds')
//     .then(res => res.json())
//     .then(apiData => {
//         const catsList = document.createElement('ul')
//         document.body.prepend(catsList)

//         apiData.data.forEach(cat => {
//             const catElement = document.createElement('li')
//             catElement.textContent = cat.breed
//             catsList.append(catElement)
//         })
//     })





const catButton = document.querySelector('#cat-facts button' )

catButton.addEventListener('click', () => {

        fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(data => {
            const factElement = document.querySelector
            ('#cat-facts p')
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
        const randUser = document.querySelector('#random-user img')
        randUser.src = data.results[0]
    })


    

    