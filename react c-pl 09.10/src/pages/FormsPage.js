import { useState } from "react"

const FormsPage = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [peopleList, setPeopleList] = useState([])

    const nameHandler = event => setName(event.target.value)
    const ageHandler = event => setAge(event.target.value)

    const formHandler = (event) => {
        event.preventDefault()

        const newPerson = { name, age }
        setPeopleList(prevState => [newPerson, ...prevState])

        setName('')
        setAge('')
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <div className="form-control">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" value={name} onChange={nameHandler} />
                </div>

                <div className="form-control">
                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" id="age" value={age} onChange={ageHandler} />
                </div>

                {/* <input type="submit" value="Submit" /> */}
                <button type="submit">Submit</button>
            </form>

            <div>
                <h2>{peopleList.length > 0 ? 'People:' : 'No people :('}</h2>

                {peopleList.length > 0 && (
                    <div className="people-list">

                        {peopleList.map((person, index) => (
                            <div key={index} className="person-item">
                                <h3>{person.name}</h3>
                                <p>Age is {person.age}</p>
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </div>
    )
}

export default FormsPage