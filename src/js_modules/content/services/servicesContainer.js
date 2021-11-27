import { useEffect, useRef } from "react"
import { compose } from "redux"
import { Services } from "./services"
import { titleRef } from "../../header/header"


 const ServicesContainer = (props) => {
 let headerRef = useRef(titleRef)

 useEffect( () => {
  props.appBodyRef.current.className = "services__background" 
  headerRef.current.current.innerText = 'Послуги' 
 },[])


 
 return <Services />
}

export default compose()(ServicesContainer)