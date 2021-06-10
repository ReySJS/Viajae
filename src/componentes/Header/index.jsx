import { useHistory } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import './style.css'

function Header() {

    const history = useHistory()
    function navigateToHome() {
        history.push('/')
    }

    return (
        <header className="city-list-header">
                <img src={logo} alt="Logo" onClick={navigateToHome}/>
                <span onClick={() => history.goBack()}>voltar</span>
            </header>
    )
}
export default Header