import { removeStudentFromStorage } from './storage.js'
import { alertMessage } from './students.js'

export default function renderSingleStudentItem(data) {
    const { name, age, surname, phone, email, itKnowledge, group, interests, id } = data
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

        removeStudentFromStorage(id)

        alertMessage(`Student (${name} ${surname}) was successfully removed!`, 'color-danger')
    })

    studentItem.append(nameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsElement, privateInfoButton, removeStudentButton)
    return studentItem
}