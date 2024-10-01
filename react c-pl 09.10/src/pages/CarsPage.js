import React, {useState} from 'react'
import CarsList from '../components/Cars/CarsList'
import CarsForm from '../components/Cars/CarsForm'


const CarsPage = () => {
    const [cars, setCars] = useState([])

    const newCarHandler = newCarData => {
        setCars(prevState => [newCarData, ...prevState])
    }

    return (
        <div>
            <CarsForm onNewCar={newCarHandler} />
            <CarsList data={cars} />
        </div>
    )
}

export default CarsPage