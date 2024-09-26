import React, { useState } from 'react'

const StudentItem = ({ data, onDeleteStudent }) => {
    const [showPrivateInfo, setShowPrivateInfo] = useState(false)

    const { name, surname, age, group, itKnowledge, phone, email, interests, id } = data

    if (!name && !surname) {
        return
    }

    // let emailText = '****'
    // let phoneText = '****'

    // if (showPrivateInfo) {
    //     emailText = email
    //     phoneText = phone
    // }

    const emailText = showPrivateInfo ? email : '****'
    const phoneText = showPrivateInfo ? phone : '****'

    const showPrivateInfoHandler = () => setShowPrivateInfo(prevState => !prevState)

    const privateInfoButton = (phone || email) && (
        <button onClick={showPrivateInfoHandler}>{showPrivateInfo ? 'Hide Private Info' : 'Show Private Info'}</button>
    )

    const deleteHandler = () => {
        onDeleteStudent(id)
    }

    return (
        <div>
            <h2>{name} {surname}</h2>
            {id && <p>ID: {id}</p>}
            {email && <p>Email: {emailText}</p>}
            {phone && <p>Phone: {phoneText}</p>}
            {group && <p>Group: {group}</p>}
            {age && <p>Age: {age}</p>}
            {itKnowledge && <p>IT Knowledge: {itKnowledge}</p>}

            <div>
                <h3>{(interests && interests.length > 0) ? 'Interest:' : 'No interests...'}</h3>

                {(interests && interests.length > 0) && (
                    <ul>
                        {interests.map((interest, index) => (
                            <li key={index}>{interest}</li>
                        ))}
                    </ul>
                )}
            </div>

            {privateInfoButton}
            <button onClick={deleteHandler}>Remove Student</button>
        </div>
    )
}

export default StudentItem