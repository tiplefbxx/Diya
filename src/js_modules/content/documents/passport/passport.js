import './passport.scss'
import img from '../../../../texure/testimg.jpg'

export const Passport = (props) => {

 return (
          <div className="card passport">
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
                 </div>
             </div>
          </div>
           )
}

