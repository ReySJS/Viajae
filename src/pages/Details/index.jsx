import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import './style.css'
import Header from '../../componentes/Header'
import Loading from '../../componentes/Loading';
import CityDetails from '../../componentes/CityDetails'

function Details() {
    const { city_id } = useParams()
    const history = useHistory()
    const [city, setCity] = useState({})
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        async function loadData() {
            try {
                if (city_id) {
                    const response = await fetch(`https://my-json-server.typicode.com/srsantosdev/viajaefakeapi/cities/${city_id}`)
                    const data = await response.json()
                    setCity(data)
                    setLoading(false)
                }
            }
            catch (error) {
                setErrorMessage("Cidade não encontrada.")
            }
        }

        loadData()
    }, [city_id])

    if(loading) {
        return <Loading />
    }

    if (!city_id || !city.id) {
        return (
            <div className="container">
                <p>Cidade não encontrada.</p>
            </div>
        )
    }

    return (
        <>
        <Header />
        <CityDetails city={city} />
        </>
    )
}
export default Details