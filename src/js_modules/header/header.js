import './header.scss'
import logo from '../../texure/icons/logo.png'
import qr from '../../texure/icons/qr.png'

export const Header = (props) => {

 return (
  <header className="header">
      <div className="header__logo"><img src={logo}></img></div>
      <div className="header__qr"><img src={qr}></img></div>
  </header>
 )
}

