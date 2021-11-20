import './footer.scss'
import menu from '../../texure/icons/menu.png'
import services from '../../texure/icons/services.png'
import notification from '../../texure/icons/notification.png'  
import documents from '../../texure/icons/documents.png'




export const Footer = (props) => {

 return (
  <footer className="footer">
      <ul className="footer__list">
          <li><img src={documents} alt={''}></img></li>
          <li><img src={services} alt={''}></img></li>
          <li><img src={notification} alt={''}></img></li>
          <li><img src={menu} alt={''}></img></li>
      </ul>
  </footer>
 )
}

