import { useState } from "react"

export const CounterPage = () => {
    const initialNum = 8
    let [num, setNum] = useState(initialNum)
    const[grades, setGrades] = useState([])

    // const plusOneHandler = () => {setNum(num +1)}
    // const minusOneHandler = () => {setNum(num -1)}
    // const plusTwoHandler = () => {setNum(num +2)}
    // const minusTwoHandler = () => {setNum(num -2)}
    // const plusFiveHandler = () => {setNum(num +5)}
    // const minusFiveHandler = () => {setNum(num -5)}
    // const resetButton = () => {setNum(5)}

  
    const numChangeHandler = changeNum => setNum(prevState => prevState + changeNum)

    const addGradeHandler = () => setGrades(prevState => [num, ...prevState])

    const resetHandler = () => setNum(initialNum)

    const removeAllGradesHandler = () => setGrades([])

    const removeGradeHandler = (index) => {
        setGrades(prevState => {
            const newState = [...prevState]
            newState.splice(index, 1)
            return newState
        })
    }

    const inputChangeHandler = event => setNum(Number(event.target.value))

    const changeDisplayColor = (data) => {
        if (data < 5) {
            return 'red'
        }

        if (data < 7) {
            return 'orange'
        }

        return 'green'
    }

    // const input = document.querySelector('input')

    // input.addEventListener('change', (event) => {})

    return (
        <div>
            {/* <input min={1} max={10} type="number" value={num} onChange={(event) => {setNum(Number(event.target.value))}} /> */}
            {/* <input min={1} max={10} type="number" value={num} onChange={event => setNum(Number(event.target.value))} /> */}
            <input min={1} max={10} type="number" value={num} onChange={inputChangeHandler} />

            <h3 style={{ color: changeDisplayColor(num) }}>{num}</h3>

            {/* <button onClick={plus5Handler} disabled={num > 5}>+5</button>
            <button onClick={plus2Handler} disabled={num > 8}>+2</button>
            <button onClick={plus1Handler} disabled={num > 9}>+1</button>
            <button onClick={minus1Handler} disabled={num <= 1}>-1</button>
            <button onClick={minus2Handler} disabled={num <= 2}>-2</button>
            <button onClick={minus5Handler} disabled={num <= 5}>-5</button> */}

            <button onClick={() => numChangeHandler(5)} disabled={num > 5}>+5</button>
            <button onClick={() => numChangeHandler(2)} disabled={num > 8}>+2</button>
            <button onClick={() => numChangeHandler(1)} disabled={num > 9}>+1</button>
            <button onClick={() => numChangeHandler(-1)} disabled={num <= 1}>-1</button>
            <button onClick={() => numChangeHandler(-2)} disabled={num <= 2}>-2</button>
            <button onClick={() => numChangeHandler(-5)} disabled={num <= 5}>-5</button>

            <button onClick={resetHandler}>Reset</button>
            <button onClick={addGradeHandler}>Add Grade</button>
            <button onClick={removeAllGradesHandler}>Remove All Grades</button>

            {/* {buttonNums.map((buttonNum, index) => <button key={index}>{buttonNum}</button>)} */}

            <h3>{grades.length > 0 ? 'Grades:' : 'No grades yet...'}</h3>

            {grades.length > 0 && (
                <ul>
                    {grades.map((grade, index) => (
                        <li key={index} style={{ color: changeDisplayColor(grade) }}>
                            Index: {index}, Grade: {grade}

                            <button onClick={() => removeGradeHandler(index)}>X</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CounterPage


