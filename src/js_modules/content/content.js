import { useRef } from 'react'
import { Route, Routes } from 'react-router'
import { backgroundRef } from '../main'
import './content.scss'
import  DocumentsContainer  from './documents/documentsContainer'
import  NotificationContainer  from './notification/nitificationContainer'
import  ServicesContainer  from './services/servicesContainer'



export const Content = (props) => {


 return(
 <div className="content">
  <Routes> 
    <Route path={'*'}  element={<DocumentsContainer {...props} appBodyRef={props.appBodyRef}/>} ></Route>
    <Route path={'services'} element ={<ServicesContainer {...props} appBodyRef={props.appBodyRef}/>} ></Route>
    <Route path={'notification'} element = {<NotificationContainer {...props} appBodyRef={props.appBodyRef}/>} ></Route>
 </Routes>
 </div>
)
 
}

