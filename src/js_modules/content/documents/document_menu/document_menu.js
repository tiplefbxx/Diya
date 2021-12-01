import { NavLink } from 'react-router-dom'
import './document_menu.scss'

export const DocumentMenu = (props) => {
let activeBody = props.menuStyle == 'active'? 'documentMenu-active' : ''
let activeMenu = props.menuStyle == 'active'? 'documentMenu__menu-active': ''

 return (
     <div className={"documentMenu" + ' ' + activeBody}>
       <div className={"documentMenu__menu" + ' ' + activeMenu}>
           <ul className="documentMenu__list">
               <li>Повна інформація</li>
               <li>Коди для перевірки</li>
               <li>Питання та відповіді</li>
               <li>Змінити порядок відображення</li>
               <li><NavLink to={'/*'}><div className="documentMenu__button"></div></NavLink></li>
           </ul>
       </div>
     </div>
 )
}


