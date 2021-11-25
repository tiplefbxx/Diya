import { useEffect } from "react"
import { compose } from "redux"
import { Menu } from "./menu"



 const MenuContainer = (props) => {

 useEffect( () => {
   props.appBodyRef.current.className = 'services__background'
 }, [])


 return <Menu />
  
 
}

export default compose()(MenuContainer)

