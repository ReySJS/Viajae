import React from 'react'
import City from '../City'
import './style.css'

function CityList({ cities }) {
    return (
        <main className="city-list-conteiner">
            {
                cities.map(city => (
                    <City city={city} key={city.id} />
                ))
            }
        </main>
    )
}
export default CityList