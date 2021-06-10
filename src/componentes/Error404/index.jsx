import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'

function Error404() {
    
    const history = useHistory()

    function refreshHome() {
        setTimeout(() => {
            history.push('/')
        }, 3000)
    }

    return (
        <>
            <h1 className="error-title">Página não encontrada.</h1>
            <p className="error-info">Você será redirecionado para a página inicial.</p>
            {refreshHome()}
        </>
    )
}
export default Error404