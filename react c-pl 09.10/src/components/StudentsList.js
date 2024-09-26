import React from 'react'
import StudentItem from './StudentItem'

const StudentsList = ({ data, onDeleteStudent }) => {
    if (!data || data.length === 0) {
        return (
            <div>
                <h1>No students yet...</h1>
                <p>Create new student.</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Students list:</h1>
            {data.map((item, index) => (
                <StudentItem key={index} data={item} onDeleteStudent={onDeleteStudent} />
            ))}
        </div>
    )
}

export default StudentsList