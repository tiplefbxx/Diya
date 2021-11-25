import './menu.scss'
import key from '../../../texure/menu/key.png'
import lock from '../../../texure/menu/lock.png'
import idea from '../../../texure/menu/idea.png'
import questions from '../../../texure/menu/questions.png'
import message from '../../../texure/menu/message.png'
import twoBlocks from '../../../texure/menu/twoBlocks.png'
import options from '../../../texure/menu/options.png'
import info from '../../../texure/menu/info.png'
import blockArrow from '../../../texure/menu/blockArrow.png'
import arrows from '../../../texure/menu/arrows.png'
import warning from '../../../texure/menu/key.png'
import exit from '../../../texure/menu/exit.png'

export const Menu = (props) => {

 return( 
   <div className="menu">
     <div className="menu__wrapper">
       <section className="menu__top">
         <div>Дія підпис<span><img src={key} alt=''></img></span></div>
         <div>Підключені пристрої<span><img src={lock} alt=''></img></span></div>
       </section>
       <section className="menu__support">
          <div>Функції та підсказки<span><img src={idea} alt=''></img></span></div>
          <div>Питання та відповіді<span><img src={questions} alt=''></img></span></div>
          <div>Служба підтримки<span><img src={message} alt=''></img></span></div>
       </section>
       <section className="menu__middle">
          <div>Копіювати номер пристрою<span><img src={twoBlocks} alt=''></img></span></div>
          <div>Налаштування<span><img src={options} alt=''></img></span></div>
       </section>
       <section className="menu__bottom">
          <div>Про Дію<span><img src={info} alt=''></img></span></div>
          <div>Розповісти друзям<span><img src={blockArrow} alt=''></img></span></div>
          <div>Оновити застосунок<span><img src={arrows} alt=''></img></span></div>
          <div>Повідомлення про обробку персональних даних<span><img src={warning} alt=''></img></span></div>
       </section>
       <section className="menu__exit">
          <div>Вийти<span><img src={exit} alt=''></img></span></div>
       </section>
       <footer className="menu__footer">
          <p className="footer__version">Version 3.0.20.622</p>
       </footer>
     </div>
   </div>
)
 
}

