import './sertificate.scss'
import warning from '../../../texure/cards/warning.png'

export const Sertificate = (props) => {
 return (
          <div className="card sertificate">
             <div className="sertificate__wrapper">
                 <div className="sertificate__top">
                     <div className="sertificate__warning"><img src={warning} alt={''}></img></div>
                     <div className="sertificate__text">У вас ще немає <br/> COVID-сертифікатів</div>
                     <div className="sertificate__smalltext">Додайте жовтий або зелений <br/> сертифікат, якщо вакцинувалися.</div>
                 </div>
                 <div className="sertificate__bottom">
                     <div className="sertificate__button">+</div>
                     <div className="sertificate__text">Додати <br/> COVID-сертифікат</div>
                 </div>
             </div>
          </div>
           )
}

