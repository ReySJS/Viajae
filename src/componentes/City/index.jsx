import { useHistory } from 'react-router-dom'
import React from 'react';
import './style.css'

function City({ city }) {

    const history = useHistory()

    function navigateToPageDetails(id) {
        history.push(`/details/${id}`)
    }

    return (
        <figure className="city-conteiner" onClick={() => navigateToPageDetails(city.id)}>
            <img src={city.image} alt={`Imagem de ${city.name}`} />
            <figcaption>
                <span className="details-name">{city.name}</span>
                <span className="details-state">{city.state}</span>
            </figcaption>
        </figure>
    )
}
export default City