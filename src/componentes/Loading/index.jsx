import React from 'react'
import loadingImage from '../../assets/images/loading.gif'
import './style.css'

function Loading() {
    return (
        <div className="home-conteiner-loading">
            <img src={loadingImage} alt="Loading" />
        </div>
    )
}
export default Loading