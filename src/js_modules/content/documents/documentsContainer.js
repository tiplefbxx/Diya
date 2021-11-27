import { useEffect, useRef } from "react"
import { compose } from "redux"
import { Documents } from "./documents"
import { titleRef } from "../../header/header"

 const DocumentsContainer = (props) => {
 let headerRef = useRef(titleRef)


 useEffect( () => {
   props.appBodyRef.current.className = "documents__background" 
   headerRef.current.current.innerText = ''
 }, [])


 return <Documents />
}




export default compose()(DocumentsContainer)

