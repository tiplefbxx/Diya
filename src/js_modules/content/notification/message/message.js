import './message.scss'



export const Message = (props) => {

 return( 
   <div className="message">
      <div className="message__top">
        <h2 className="message__title">Зверніть увагу</h2>
      </div>
      <div className="message__bottom">
         <div className="message__text">Немає данних про вас</div>
       </div>
     </div>
)
 
}

