import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Loading from '../../componentes/Loading'
import logo from '../../assets/images/logo.svg'
import './style.css'

function Home() {

    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    function showCities(event) {
        event.preventDefault()

        setLoading(true)
        
        try {
            fetch('https://my-json-server.typicode.com/srsantosdev/viajaefakeapi/cities')
                .then(response => response.json())
                .then(data => {
                    history.push({
                        pathname: '/cities/',
                        state: data,
                    })
                })
                .catch(error => setErrorMessage(error))
                .finally(() => setLoading(false))
        }
        catch (error) {
            setErrorMessage("Falha na requisição")
        }
    }

    return (
        <div className="home-conteiner">
            <div className="home-conteiner-left">
                <img src={logo} alt="Logo" />
            </div>
            {loading ?
                (
                    <div className="home-conteiner-right">
                    <Loading />
                    </div>
                ) :
                (
                    <form className="home-conteiner-right" onSubmit={showCities}>
                        <span>Meus dados</span>
                        <input type="text" placeholder="Nome" onChange={event => setName(event.target.value)}  required="required" />
                        <input type="text" placeholder="E-mail" onChange={event => setEmail(event.target.value)} required="required" />
                        <input type="submit"  className="submit" value="Ver cidades disponíveis" />
                    </form>
                )}
        </div>
    )
}
export default Home