import './passport.scss'
import img from '../../../../texure/testimg.jpg'
import { DocumentMenu } from '../document_menu/document_menu'
import { NavLink } from 'react-router-dom'
import { PassportBack } from './passport_back'

export const Passport = (props) => {

 return (
      <div className="card undercard__passport">
          <div className="card__front">
          <div className="passport">
             <div className="passport__wrapper">
                 <div className="passport__top">
                     <h2 className="passport__title">Паспорт громадянина України</h2>
                 </div>
                 <div className="passport__middle">
                     <div className="passport__img"><img src={img}></img></div>
                     <div className="passport__date">
                         <div className="passport__birth">
                           <div>Дата <br/> народження:</div>
                           <div>09.02.14</div>
                         </div>
                         <div className="passport__number">
                            <div>Номер</div>
                            <div>000040238</div>
                         </div>
                     </div>
                 </div>
                 <div className="passport__bottom">
                     <div className="passport__name">Олександр <br/>Корніленко <br/> Петрович</div>
                     <NavLink to={'passportmenu'} className="passport__button"><span>...</span></NavLink>
                 </div>
             </div>
             </div>
          </div>
          <PassportBack qrCode={props.qrCode} />
        </div> )
}

