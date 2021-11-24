import { useEffect } from "react"
import { compose } from "redux"
import { Services } from "./services"



 const ServicesContainer = (props) => {
 
 useEffect( () => {
  props.appBodyRef.current.className = "services__background" 
 },[])


 
 return <Services />
}

export default compose()(ServicesContainer)