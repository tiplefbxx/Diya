import { Route, Routes } from 'react-router'
import './content.scss'
import { Documents } from './documents/documents'
import { Services } from './services/services'
import { Notification } from './notification/notification'


export const Content = (props) => {


 return(
 <div className="content">
  <Routes> 
    <Route path={'*'}  element={<Documents {...props}/>} ></Route>
    <Route path={'services'} element ={<Services {...props} />} ></Route>
    <Route path={'notification'} element = {<Notification />} ></Route>
 </Routes>
 </div>
)
 
}

