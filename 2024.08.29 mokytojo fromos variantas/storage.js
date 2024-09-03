export function storeFormDataInStorage(form) {
    form.addEventListener('input', event => {
        const { name, value, type } = event.target

        if (type === 'checkbox') {
            const checkedInputs = form.querySelectorAll(`[name="${name}"]:checked`)
            const checkedInputsData = [...checkedInputs].map(input => input.value)
            localStorage.setItem(name, JSON.stringify(checkedInputsData))
        } else {
            localStorage.setItem(name, value)
        }
    })
}

export function getFormDataFromStorage(form) {
    getInputDataFromStorage('student-name', form)
    getInputDataFromStorage('student-surname', form)
    getInputDataFromStorage('student-age', form)
    getInputDataFromStorage('student-it-knowledge', form)
    getInputDataFromStorage('student-phone', form)
    getInputDataFromStorage('student-email', form)
    getInputDataFromStorage('group', form)
    getInputArrayDataFromStorage('interest', form)
}

export function getInputDataFromStorage(key, form) {
    const localValue = localStorage.getItem(key)

    if (!localValue) {
        return
    }

    form[key].value = localValue
}

// export function getInputArrayDataFromStorage(key, form) {
//     const localValue = JSON.parse(localStorage.getItem(key))
    
//     if (!localValue) {
//         return
//     }

//     localValue.forEach(value => {
//         const input = form.querySelector(`[value="${value}"]`)
//         input.checked = true
//     })
// }

export function getInputArrayDataFromStorage(key, form) {
    let localValue
    try {
        localValue = JSON.parse(localStorage.getItem(key))
    } catch (e) {
        console.error(`Error parsing localStorage data for key: ${key}`, e)
        return
    }

    if (!localValue) {
        return
    }

    localValue.forEach(value => {
        const input = form.querySelector(`[value="${value}"]`)
        if (input) {
            input.checked = true
        }
    })
}

export function getStudentsFromStorage() {
    const localStorageData = localStorage.getItem('students-list')
    const studentsData = localStorageData ? JSON.parse(localStorageData) : []

    return studentsData
}

export function addStudentToStorage(studentData) {
    const studentsData = getStudentsFromStorage()
    studentsData.push(studentData)
    localStorage.setItem('students-list', JSON.stringify(studentsData))
}

export function removeStudentFromStorage(studentId) {
    const studentsData = getStudentsFromStorage()
    const updatedStudentsData = studentsData.filter(student => student.id !== studentId)
    localStorage.setItem('students-list', JSON.stringify(updatedStudentsData))
}

export function clearFormStorageData() {
    localStorage.removeItem('student-name')
    localStorage.removeItem('student-surname')
    localStorage.removeItem('student-age')
    localStorage.removeItem('student-it-knowledge')
    localStorage.removeItem('student-phone')
    localStorage.removeItem('student-email')
    localStorage.removeItem('group')
    localStorage.removeItem('interest')
}