import { Notification } from './notification'
import { compose } from 'redux';
import { useEffect } from 'react';

 const NotificationContainer = (props) => {
  useEffect( () => {
     props.appBodyRef.current.className = "services__background"  
  }, [])

  
 return <Notification />
}


export default compose(

)(NotificationContainer)