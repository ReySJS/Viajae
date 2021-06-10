import React from 'react';
import Header from '../../componentes/Header';
import CityList from '../../componentes/CityList'
import Error404 from '../../componentes/Error404';
import './style.css'

function Cities(props) {

    const cities = props.location.state

    if (!cities) {
        return (
            <>
                <Header />
                <Error404 />
            </>
            )
    }

    return (
        <>
            <Header />
            <CityList cities={cities} />
        </>
    )
}
export default Cities