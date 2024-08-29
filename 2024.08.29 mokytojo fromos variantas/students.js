const studentForm = document.querySelector('#student-form')
const studentsList = document.querySelector('#students-list')

const INITIAL_DATA = [
    {
        name: 'Sam',
        surname: 'Buca',
        age: 24,
        phone: '869268973',
        email: 'rokas@gmail.com',
        itKnowledge: 7,
        interests: ['JavaScript', 'PHP', 'C++'],
        group: 'FEUA-16',
    },
    {
        name: 'Kick',
        surname: 'Ass',
        age: 22,
        phone: '+37069268973',
        email: 'arunas@gmail.com',
        itKnowledge: 9,
        interests: ['C', 'C++'],
        group: 'FEUA-17',
    },
    {
        name: 'Bil',
        surname: 'Asde',
        age: 20,
        phone: '869987529',
        email: 'pricepas@gmail.com',
        itKnowledge: 10,
        interests: ['JavaScript', 'PHP', 'C++', 'Python'],
        group: 'FEU 16',
    },
    {
        name: 'Alus',
        surname: 'Sula',
        age: 30,
        phone: '+370612141',
        email: 'Petras@gmail.com',
        itKnowledge: 6,
        interests: ['C#'],
        group: 'FEU 14',
    },
    {
        name: 'Sam',
        surname: 'Buca',
        age: 24,
        phone: '869268973',
        email: 'rokas@gmail.com',
        itKnowledge: 7,
        interests: ['JavaScript', 'PHP', 'C++'],
        group: 'FEU 14',
    },
]

function itKnowledgeInputHandler() {
    const input = studentForm.querySelector('#it-knowledge')
    const output = studentForm.querySelector('#it-knowledge-output')

    output.value = input.value

    input.addEventListener('input', () => {
        output.value = input.value
    })
}

itKnowledgeInputHandler()

studentForm.addEventListener('submit', event => {
    event.preventDefault()

    const form = event.target

    let formIsValid = true

    const requiredInputs = form.querySelectorAll('input:required')
    requiredInputs.forEach(input => {
        input.classList.remove('invalid-input')

        if (!input.value) {
            input.classList.add('invalid-input')
            formIsValid = false
        }
    })

    if (!formIsValid) {
        console.log('Forma nevalidi')
        return
    }

    
    const nameInput = form.name
    const surnameInput = form.surname
    const ageInput = form.age
    const phoneInput = form.phone
    const emailInput = form.email
    const itKnowledgeInput = form['it-knowledge']
    const groupInput = form.group
    const interestInputs = form.querySelectorAll('[name="interest"]:checked')

    const name = nameInput.value
    const surname = surnameInput.value
    const age = ageInput.value
    const phone = phoneInput.value
    const email = emailInput.value
    const itKnowledge = itKnowledgeInput.value
    const group = groupInput.value

    // const interests = []
    // for (let i = 0; i < interestInputs.length; i++) {
    //     interests.push(interestInputs[i].value)
    // }

    // const interests = Array.from(interestInputs).map(input => input.value)
    const interests = [...interestInputs].map(input => input.value)
    
    const studentItem = document.createElement('div')
    studentItem.classList.add('student-item')

    const nameElement = document.createElement('h2')
    nameElement.textContent = `${name} ${surname}`

    const ageElement = document.createElement('p')
    ageElement.textContent = `Age: ${age}`

    const phoneElement = document.createElement('p')
    phoneElement.textContent = `Phone: ****`

    const emailElement = document.createElement('p')
    emailElement.textContent = `Email: ****`

    const itKnowledgeElement = document.createElement('p')
    itKnowledgeElement.textContent = `IT Knowledge: ${itKnowledge}`

    const groupElement = document.createElement('p')
    groupElement.textContent = `Group: ${group}`

    const interestsElement = document.createElement('p')
    interestsElement.textContent = `Interests: ${interests.join(', ')}`

    const privateInfoButton = document.createElement('button')
    privateInfoButton.textContent = 'Show private info'

    let privateInfoIsHidden = true

    privateInfoButton.addEventListener('click', () => {
        if (privateInfoIsHidden) {
            privateInfoButton.textContent = 'Hide private info'
            phoneElement.textContent = `Phone: ${phone}`
            emailElement.textContent = `Email: ${email}`
        } else {
            privateInfoButton.textContent = 'Show private info'
            phoneElement.textContent = `Phone: ****`
            emailElement.textContent = `Email: ****`
        }
        
        privateInfoIsHidden = !privateInfoIsHidden
    })

    const removeStudentButton = document.createElement('button')
    removeStudentButton.textContent = 'Remove Student'

    removeStudentButton.addEventListener('click', () => {
        studentItem.remove()

        alertMessage(`Student (${name} ${surname}) was successfully removed!`, 'color-danger')
    })

    studentItem.append(nameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsElement, privateInfoButton, removeStudentButton)
    studentsList.prepend(studentItem)

    form.reset()
    itKnowledgeInputHandler()

    alertMessage(`Student (${name} ${surname}) was successfully created!`, 'color-success')
})

function alertMessage(text, className) {
    const alertMessage = document.querySelector('#alert-message')
    alertMessage.className = ''
    
    alertMessage.textContent = text
    alertMessage.classList.add(className)

    setTimeout(() => {
        alertMessage.textContent = ''
    }, 5000)
}