
const studentListDiv = document.getElementById('students-list');
const testForm = document.getElementById('test-form');

testForm.addEventListener('submit', event => {
    event.preventDefault(); 

    const studentInfoDiv = document.createElement('div');
    studentInfoDiv.classList.add('student-item');

    const formData = new FormData(testForm);
    const name = formData.get('name');
    const surname = formData.get('surname');
    const age = formData.get('age');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const knowledge = formData.get('knowledge');
    const group = formData.get('group');

    const interests = formData.getAll('interests'); 
    
    
    studentInfoDiv.innerHTML = `
        <h3>Student Information</h3>
        <p><strong>Name:</strong> ${name} ${surname}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>IT Knowledge:</strong> ${knowledge}/10</p>
        <p><strong>Group:</strong> ${group}</p>
        <p><strong>Interests:</strong> ${interests.length > 0 ? interests.join(', ') : 'None'}</p>
    `;

    
    studentListDiv.prepend(studentInfoDiv);

   
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('submission-message');
    messageDiv.innerText = 'Sukurtas studentas';
    
    
    messageDiv.style.color = 'green';
    messageDiv.style.fontWeight = 'bold'; 

    
    studentListDiv.prepend(messageDiv);

    
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);

    
    testForm.reset();
});
