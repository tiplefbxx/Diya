import './idcard.scss'
import idImg from '../../../../texure/menu/twoBlocks.png'

export const Idcard = (props) => {
 return (
          <div className="card idcard">
             <div className="idcard__wrapper">
                 <div className="idcard__top">
                   <h2 className="idcard__title">Картка платника податків</h2>
                   <p>РНОКПП</p>
                 </div>
                 <div className="idcard__info">
                     <div className="idcard__name">Андрій Самойленко Олегович</div>
                     <div className="idcard__date">
                         <p>Дата народження:</p>
                         <p>02.01.2003</p>
                     </div>
                 </div>
                 <div className="idcard__bottom">
                    <div className="idcard__moveline">
                        <p>РНОКПП дійсний. Перевірено Державною податковою службою</p>
                    </div>
                    <div className="idcard__id"><span>3612451003</span><span><img src={idImg}alt="1"></img></span></div>
                 </div>
             </div>
          </div>
        )
}

