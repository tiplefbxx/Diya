import { useRef } from 'react'
import { titleRef } from '../../header/header'
import { Message } from './message/message'
import './notification.scss'



export const Notification = (props) => {
let headerTitleRef = useRef(titleRef)
console.log(headerTitleRef.current.innerText)
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

