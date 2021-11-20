import './content.scss'
import warning from '../../texure/cards/warning.png'

export const Content = (props) => {

 return (
  <main className="content">
      <div className="content__line">
          <div className="card">
             <div className="card__wrapper">
                 <div className="card__top">
                     <div className="card__warning"><img src={warning} alt={''}></img></div>
                     <div className="card__text">У вас ще немає <br/> COVID-сертифікатів</div>
                     <div className="card__smalltext">Додайте жовтий або зелений <br/> сертифікат, якщо вакцинувалися.</div>
                 </div>
                 <div className="card__bottom">
                     <div className="card__button">+</div>
                     <div className="card__text">Додати <br/> COVID-сертифікат</div>
                 </div>
             </div>
          </div>
      </div>
  </main>
 )
}

