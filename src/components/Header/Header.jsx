import AnderLogo from '../../assets/img/logo-anderson-home.svg'
import NFLogo from '../../assets/img/nfl-logo.png'

import './Header.css'
const Header = () => {
  return (
    <header className='header'>
        <img src={AnderLogo} alt="Grupo Andersons logo" />
        <img src={NFLogo} alt="NFL logo" />
    </header>
  )
}

export default Header