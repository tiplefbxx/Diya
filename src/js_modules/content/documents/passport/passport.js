import './passport.scss'
import img from '../../../../texure/testimg.jpg'
import { NavLink } from 'react-router-dom'
import { PassportBack } from './passport_back'
import { useState } from 'react'

export const Passport = (props) => {
let [cardStatus, setCardStatus] = useState(false)
let activeStyle = cardStatus? "card__front-turned" : null


 return (
      <div className={"card undercard__passport"}>
          <div className={"card__front" + ' ' + activeStyle} onClick={ () => setCardStatus(true)}>
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
                     <NavLink to={'passportmenu'} onClick={(event) => event.stopPropagation()} className="passport__button"><span>...</span></NavLink>
                 </div>
             </div>
             </div>
          </div>
          <PassportBack qrCode={props.qrCode} barcode={props.barcode} barcodeNumber={props.barcodeNumber} cardStatus={cardStatus} setCardStatus={setCardStatus} />
        </div> )
}

