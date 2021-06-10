import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import './style.css'

function Confirmation(props) {
    const history = useHistory()
    const [confirmedCity, setConfirmedCity] = useState({})

    useEffect(() => {
        setConfirmedCity(props.location.state)
    }, [])

    return (
        <div className="confirmation-conteiner">
            <img src={logo} alt="Logo" />
            <span>Confirmar visita?</span>
            <div>
                <button className="btn-cancel" onClick={()=> history.goBack()}>Cancelar</button>
                <button className="btn-confirm" onClick={()=> history.push('/')}>Confirmar</button>
            </div>
        </div>
    )
}
export default Confirmation