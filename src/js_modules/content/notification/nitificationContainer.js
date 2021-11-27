import { Notification } from './notification'
import { compose } from 'redux';
import { useEffect, useRef } from 'react';
import { titleRef } from "../../header/header"

 const NotificationContainer = (props) => {
   let headerRef = useRef(titleRef)

  useEffect( () => {
     props.appBodyRef.current.className = "services__background" 
     headerRef.current.current.innerText = 'Повідомлення' 
  }, [])

  
 return <Notification />
}


export default compose(

)(NotificationContainer)