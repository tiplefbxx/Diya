import { Message } from './message/message'
import './notification.scss'



export const Notification = (props) => {

 return( 
   <div className="notification">
      <div className="notification__content">
         <Message />
         <Message />
         <Message />
      </div>
     </div>
)
 
}

