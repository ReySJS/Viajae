import { useHistory } from 'react-router-dom'
import './style.css'

function CityDetails({ city }) {

    const history = useHistory()

    function goToConfirm() {
        history.push({
            pathname: '/confirmation',
            state: city
        })
    }

    return (
        <div className="details-conteiner">
            <img src={city.image} alt={`Foto do ${city.name}`} />
            <div className="details-mid">
                <div>
                    <h1 className="city-name">{city.name}</h1>
                    <span className="city-state">{city.state}</span>
                </div>

                <span className="confirm" onClick={goToConfirm}>Confirmar visita</span>
            </div>
            <p className="city-description">{city.description}</p>
        </div>
    )
}
export default CityDetails