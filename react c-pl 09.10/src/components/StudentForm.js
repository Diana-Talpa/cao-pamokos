import React, { useState } from 'react'

const StudentForm = ({ onNewStudent }) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')
    const [group, setGroup] = useState('FEUA-15')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [itKnowledge, setItKnowledge] = useState(5)
    const [interests, setInterests] = useState([])

    const nameHandler = event => setName(event.target.value)
    const surnameHandler = event => setSurname(event.target.value)
    const ageHandler = event => setAge(event.target.value)
    const groupHandler = event => setGroup(event.target.value)
    const emailHandler = event => setEmail(event.target.value)
    const phoneHandler = event => setPhone(event.target.value)
    const itKnowledgeHandler = event => setItKnowledge(event.target.value)
    const interestsHandler = event => {
        setInterests(prevState => {
            const selectedInterest = event.target.value
            const isChecked = event.target.checked

            if (isChecked) {
                return [...prevState, selectedInterest]
            }

            return prevState.filter(interest => interest !== selectedInterest)
        })
    }

    const submitHandler = event => {
        event.preventDefault()

        const newStudent = {
            name,
            surname,
            age,
            group,
            itKnowledge,
            email,
            phone,
            interests,
            id: Math.random()
        }

        onNewStudent(newStudent)

        setName('')
        setSurname('')
        setAge('')
        setGroup('FEUA-15')
        setEmail('')
        setPhone('')
        setItKnowledge(5)
        setInterests([])
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={name} onChange={nameHandler} />
            </div>
            
            <div>
                <label htmlFor="surname">Surname:</label>
                <input type="text" name="surname" id="surname" value={surname} onChange={surnameHandler} />
            </div>
            
            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" name="age" id="age" value={age} onChange={ageHandler} />
            </div>
            
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={email} onChange={emailHandler} />
            </div>
            
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" id="phone" value={phone} onChange={phoneHandler} />
            </div>
            
            <div>
                <label htmlFor="itKnowledge">IT Knowledge</label>
                <input type="range" min={1} max={10} name="itKnowledge" id="itKnowledge" value={itKnowledge} onChange={itKnowledgeHandler} />
                <output>{itKnowledge}</output>
            </div>
            
            <fieldset>
                <legend>Group:</legend>

                <div>
                    <input type="radio" name="group" id="group-1" value="FEUA-15" checked={group === "FEUA-15"} onChange={groupHandler} />
                    <label htmlFor="group-1">FEUA-15</label>
                </div>

                <div>
                    <input type="radio" name="group" id="group-2" value="FEUA-16" checked={group === "FEUA-16"} onChange={groupHandler} />
                    <label htmlFor="group-2">FEUA-16</label>
                </div>

                <div>
                    <input type="radio" name="group" id="group-3" value="FEUA-17" checked={group === "FEUA-17"} onChange={groupHandler} />
                    <label htmlFor="group-3">FEUA-17</label>
                </div>
            </fieldset>


            <fieldset>
                <legend>IT Knowledge:</legend>

                <div>
                    <input type="checkbox" name="interests" id="interests-1" value="JavaScript" checked={interests.includes('JavaScript')} onChange={interestsHandler} />
                    <label htmlFor="interests-1">JavaScript</label>
                </div>

                <div>
                    <input type="checkbox" name="interests" id="interests-2" value="PHP" checked={interests.includes('PHP')} onChange={interestsHandler} />
                    <label htmlFor="interests-2">PHP</label>
                </div>

                <div>
                    <input type="checkbox" name="interests" id="interests-3" value="React" checked={interests.includes('React')} onChange={interestsHandler} />
                    <label htmlFor="interests-3">React</label>
                </div>
            </fieldset>

            <button type="submit">Create New Student</button>
        </form>
    )
}

export default StudentForm