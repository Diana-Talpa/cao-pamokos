import CityItem from "./CityItems.js"

const CitiesList = ({data}) => {
    const citiesListElements = data.map((city, index) => {
        const isLastItem = data.lenght === index + 1

        return (
            <CityItem
            lastItem={isLastItem}
            index={index}
            data={city}
            key={index}
            />
        )
    }
    )

    return(
        <div>
            <h1> {data.length > 0 ? 'Cities' : 'No cities...'}</h1>

            {data.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}} className="cities=list">
                    {citiesListElements}
                </div>
            )}
        </div>
    )
}

export default CitiesList