import './footer.scss'
import menu from '../../texure/icons/menu.png'
import services from '../../texure/icons/services.png'
import notification from '../../texure/icons/notification.png'  
import documents from '../../texure/icons/documents.png'
import { NavLink } from 'react-router-dom'




export const Footer = (props) => {
    

 return (
  <footer className="footer">
      <ul  className="footer__list">
          <NavLink to={''} className="documents-link"><img src={documents} alt={''}></img></NavLink>
          <NavLink to={'/services'} className="services-link"><img src={services} alt={''}></img></NavLink>
          <NavLink to={'/notification'} className="notification-link"><img src={notification} alt={''}></img></NavLink>
          <NavLink to={'/menu'} className="menu-link"><img src={menu} alt={''}></img></NavLink>
      </ul>
  </footer>
 )
}

