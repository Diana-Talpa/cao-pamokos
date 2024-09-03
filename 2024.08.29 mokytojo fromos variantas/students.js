import renderSingleStudentItem from './renderStudent.js'
import { addStudentToStorage, clearFormStorageData, getFormDataFromStorage, getStudentsFromStorage, removeStudentFromStorage, storeFormDataInStorage } from './storage.js'

const studentForm = document.querySelector('#student-form')
const studentsList = document.querySelector('#students-list')

getFormDataFromStorage(studentForm)
storeFormDataInStorage(studentForm)
renderInitialData()
itKnowledgeInputHandler()

studentForm.addEventListener('submit', event => {
    event.preventDefault()

    const form = event.target

    const formIsValid = validateForm(form)

    if (!formIsValid) {
        alertMessage('Form is invalid', 'color-danger')
        return
    }
    
    createNewStudent(form)
})

function createNewStudent(form) {
    const newStudentData = getStudentFormData(form)
    const studentElement = renderSingleStudentItem(newStudentData)
    studentsList.prepend(studentElement)

    addStudentToStorage(newStudentData)
    clearFormStorageData()
    itKnowledgeInputHandler()
    form.reset()

    alertMessage(`Student (${newStudentData.name} ${newStudentData.surname}) was successfully created!`, 'color-success')
}

function validateForm(form) {
    let formIsValid = true

    form.querySelectorAll('.input-error-message').forEach(element => element.remove())

    const requiredInputs = form.querySelectorAll('input:required')
    requiredInputs.forEach(input => {
        input.classList.remove('invalid-input')

        if (!input.value) {
            input.classList.add('invalid-input')
            formIsValid = false

            const inputErrorMessage = document.createElement('span')
            inputErrorMessage.classList.add('input-error-message')
            inputErrorMessage.textContent = 'This field is required'
            input.after(inputErrorMessage)
        }
    })

    return formIsValid
}

function getStudentFormData(form) {
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

    const interests = [...interestInputs].map(input => input.value)

    const newStudentData = {
        name,
        surname,
        age,
        phone,
        email,
        itKnowledge,
        group,
        interests,
        id: Math.random()
    }

    return newStudentData
}

export function alertMessage(text, className) {
    const alertMessage = document.querySelector('#alert-message')
    alertMessage.className = ''
    
    alertMessage.textContent = text
    alertMessage.classList.add(className)

    setTimeout(() => {
        alertMessage.textContent = ''
    }, 5000)
}

function itKnowledgeInputHandler() {
    const input = studentForm.querySelector('#it-knowledge')
    const output = studentForm.querySelector('#it-knowledge-output')

    output.value = input.value

    input.addEventListener('input', () => {
        output.value = input.value
    })
}

function renderInitialData() {
    const studentsData = getStudentsFromStorage()

    studentsData.forEach(item => {
        const studentElement = renderSingleStudentItem(item)
        studentsList.prepend(studentElement)
    })
}