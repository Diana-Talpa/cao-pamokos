import React, { useState } from 'react'
import StudentsList from '../components/StudentsList'
import StudentForm from '../components/StudentForm'

const StudentsPage = () => {
    const studentsList = [
        {
            id: Math.random(),
            name: 'John',
            surname: 'Doe',
            age: 25,
            group: 'FEUA-16',
            itKnowledge: 8,
            email: 'info@email.com',
            phone: '+370456465446',
            interests: ['Vienas', 'Du']
        },
        {
            id: Math.random(),
            name: 'John',
            surname: 'Doe',
            age: 25,
            group: 'FEUA-16',
            itKnowledge: 8,
            email: 'info@email.com',
            phone: '+370456465446',
            interests: ['Vienas', 'Du']
        },
        {
            id: Math.random(),
            name: 'John',
            surname: 'Doe',
            age: 25,
            group: 'FEUA-16',
            itKnowledge: 8,
            email: 'info@email.com',
            phone: '+370456465446',
            interests: ['Vienas', 'Du']
        }
    ]
    
    const [students, setStudents] = useState(studentsList)

    const newStudentHandler = newStudentData => {
        setStudents(prevState => [newStudentData, ...prevState])
    }

    const removeStudentHandler = studentId => {
        setStudents(prevState => {
            const updatedStudents = prevState.filter(student => student.id !== studentId)

            return updatedStudents
        })
    }

    return (
        <div>
            <StudentForm onNewStudent={newStudentHandler} />
            <StudentsList data={students} onDeleteStudent={removeStudentHandler} />
        </div>
    )
}

export default StudentsPage