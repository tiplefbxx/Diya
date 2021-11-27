import './footer.scss'
import menu from '../../texure/icons/menu.png'
import services from '../../texure/icons/services.png'
import notification from '../../texure/icons/notification.png'  
import documents from '../../texure/icons/documentss.png'
import menuActive from '../../texure/icons/menu_active.png'
import servicesActive from '../../texure/icons/services_active.png'
import notificationActive from '../../texure/icons/notification_active.png'  
import documentsActive from '../../texure/icons/documents_active.png'
import { NavLink, useLocation} from 'react-router-dom'
import { React} from 'react'


export const Footer = (props) => {
let pathName = useLocation().pathname


 return (
  <footer className="footer">
      <ul  className="footer__list">
          <NavLink to={''}  ><img src={pathName === '/'? documentsActive : documents} alt={''}></img></NavLink>
          <NavLink to={'/services'} ><img src={pathName === '/services'? servicesActive : services} alt={''}></img></NavLink>
          <NavLink to={'/notification'}  ><img src={pathName === '/notification'? notificationActive : notification} alt={''}></img></NavLink>
          <NavLink to={'/menu'} ><img src={pathName === '/menu'? menuActive : menu} alt={''}></img></NavLink>
      </ul>
  </footer>
 )
}



