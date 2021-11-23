import { Route, Routes } from 'react-router'
import './content.scss'
import { Documents } from './documents/documents'
import { Services } from './services/services'



export const Content = (props) => {


 return(
 <div className="content">
  <Routes> 
   <Route path={'*'}  element={<Documents />} ></Route>
   <Route path={'services'} element ={<Services />} ></Route>
 </Routes>
 </div>
)
 
}

