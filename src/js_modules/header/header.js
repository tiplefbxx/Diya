import './header.scss'
import logo from '../../texure/icons/logo.png'
import qr from '../../texure/icons/qr.png'
import { createRef } from 'react'

export let titleRef = createRef('')
export const Header = (props) => {


 return (
  <header className="header">
      <div className="header__logo">
        <img src={logo}></img>
        <h2 ref={titleRef} className="header__title"></h2>
      </div>
      <div className="header__qr"><img src={qr}></img></div>
  </header>
 )
}

