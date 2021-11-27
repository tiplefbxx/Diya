import { useEffect, useRef } from "react"
import { compose } from "redux"
import { titleRef } from "../../header/header"
import { Menu } from "./menu"



 const MenuContainer = (props) => {
 let headerRef = useRef(titleRef)


 useEffect( () => {
   props.appBodyRef.current.className = 'services__background'
   headerRef.current.current.innerText = 'Вітаємо Максим'
 }, [])


 return <Menu />
  
}

export default compose(

)(MenuContainer)

