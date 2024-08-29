
// const studentListDiv = document.getElementById('students-list');
// const testForm = document.getElementById('test-form');

// testForm.addEventListener('submit', event => {
//     event.preventDefault(); 

//     const studentInfoDiv = document.createElement('div');
//     studentInfoDiv.classList.add('student-item');

//     const formData = new FormData(testForm);
//     const name = formData.get('name');
//     const surname = formData.get('surname');
//     const age = formData.get('age');
//     const phone = formData.get('phone');
//     const email = formData.get('email');
//     const knowledge = formData.get('knowledge');
//     const group = formData.get('group');

//     const interests = formData.getAll('interests'); 
    
//     //perdaryt su paprastais elementais be innerhtml
//     studentInfoDiv.innerHTML = `
//         <h3>Student Information</h3>
//         <p><strong>Name:</strong> ${name} ${surname}</p>
//         <p><strong>Age:</strong> ${age}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>IT Knowledge:</strong> ${knowledge}/10</p>
//         <p><strong>Group:</strong> ${group}</p>
//         <p><strong>Interests:</strong> ${interests.length > 0 ? interests.join(', ') : 'None'}</p>
//     `;

    
//     studentListDiv.prepend(studentInfoDiv);

   
//     const messageDiv = document.createElement('span');
//     messageDiv.classList.add('submission-message');
//     messageDiv.innerText = 'Sukurtas studentas';
    
    
//     messageDiv.style.color = 'green';
//     messageDiv.style.fontWeight = 'bold'; 

    
//     studentListDiv.prepend(messageDiv);

    
//     setTimeout(() => {
//         messageDiv.remove();
//     }, 5000);

    
//     testForm.reset();
// });



// 1. Priduodant formą (submit) patikrinti ar privalomi laukeliai nėra tušti.
// 2. Jeigu bent vienas privalomas formos laukelis yra tuščias:
//     2.1. Formos alert žinutėje reikia parašyti, jog ne visi laukeliai yra užpildyti. Šis tekstas turi būti raudonos spalvos.
//     2.2. Kiekvienas privalomas input laukelis, kuris nėra užpildytas:
//         2.2.1. Turi būti apvestas raudonu rėmeliu.
//         2.2.2. Šalia laukelio turi būti parašytas raudonas tekstas: „Šis laukelis yra privalomas".



const studentForm = document.querySelector('#student-form');
const studentsList = document.querySelector('#students-list');
const messageContainer = document.createElement('span');
messageContainer.id = 'form-message';
studentForm.after(messageContainer);

function itKnowledgeInputHandler() {
    const input = studentForm.querySelector('#it-knowledge');
    const output = studentForm.querySelector('#it-knowledge-output');

    output.value = input.value;

    input.addEventListener('input', () => {
        output.value = input.value;
    });
}

itKnowledgeInputHandler();

studentForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.target;

    const nameInput = form.name;
    const surnameInput = form.surname;
    const ageInput = form.age;
    const phoneInput = form.phone;
    const emailInput = form.email;

    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();
    const age = ageInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

    let isValid = true; 
   
    function clearErrorStyles(input) {
        input.style.border = ''; 
        const errorMessage = input.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains('error-message')) {
            errorMessage.remove(); 
        }
    }

    clearErrorStyles(nameInput);
    clearErrorStyles(surnameInput);
    clearErrorStyles(ageInput);
    clearErrorStyles(phoneInput);
    clearErrorStyles(emailInput);
 
    function showError(input, message) {
        input.style.border = '1px solid red'; 
    
        const errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        
        errorMessage.textContent = message;
        
        
        if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
            input.after(errorMessage);
        }
    }

    if (!name) {
        showError(nameInput, 'This input is required!');
        isValid = false;
    }

    if (!surname) {
        showError(surnameInput, 'This input is required!');
        isValid = false;
    }

    if (!age) {
        showError(ageInput, 'This input is required!');
        isValid = false;
    }

    if (!phone) {
        showError(phoneInput, 'This input is required!');
        isValid = false;
    }

    if (!email) {
        showError(emailInput, 'This input is required!');
        isValid = false;
    }

    if (!isValid) {
        messageContainer.textContent = 'Not all information given';
        messageContainer.classList.add('message-container')   
        return; 
    }

    const itKnowledgeInput = form['it-knowledge'];
    const groupInput = form.group;
    const interestInputs = form.querySelectorAll('[name="interest"]:checked');

    const itKnowledge = itKnowledgeInput.value;
    const group = groupInput.value;

    const interests = [...interestInputs].map(input => input.value);

    const studentItem = document.createElement('div');
    studentItem.classList.add('student-item');

    const nameElement = document.createElement('h2');
    nameElement.textContent = `${name} ${surname}`;

    const ageElement = document.createElement('p');
    ageElement.textContent = `Age: ${age}`;

    const phoneElement = document.createElement('p');
    phoneElement.textContent = `Phone: ****`;

    const emailElement = document.createElement('p');
    emailElement.textContent = `Email: ****`;

    const itKnowledgeElement = document.createElement('p');
    itKnowledgeElement.textContent = `IT Knowledge: ${itKnowledge}`;

    const groupElement = document.createElement('p');
    groupElement.textContent = `Group: ${group}`;

    const interestsElement = document.createElement('p');
    interestsElement.textContent = `Interests: ${interests.join(', ')}`;

    const privateInfoButton = document.createElement('button');
    privateInfoButton.textContent = 'Show private info';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    let isPrivateInfoVisible = false;
    privateInfoButton.addEventListener('click', () => {
        if (isPrivateInfoVisible) {
            phoneElement.textContent = `Phone: ****`;
            emailElement.textContent = `Email: ****`;
            privateInfoButton.textContent = 'Show private info';
        } else {
            phoneElement.textContent = `Phone: ${phone}`;
            emailElement.textContent = `Email: ${email}`;
            privateInfoButton.textContent = 'Hide private info';
        }
        isPrivateInfoVisible = !isPrivateInfoVisible;
    });

    deleteButton.addEventListener('click', () => {
        studentItem.remove();

        messageContainer.textContent = `Student (${name} ${surname}) was successfully deleted`;
        

        setTimeout(() => {
            messageContainer.textContent = '';
        }, 5000);
    });

    studentItem.append(nameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsElement, privateInfoButton, deleteButton);
    studentsList.prepend(studentItem);

    form.reset();
    itKnowledgeInputHandler();

    const alertMessage = document.querySelector('#alert-message');
    alertMessage.classList.add('created');
    alertMessage.textContent = `Student (${name} ${surname}) was successfully created!`;

    setTimeout(() => {
        alertMessage.textContent = '';
    }, 5000);

    messageContainer.textContent = '';
});
