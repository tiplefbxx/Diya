import { useEffect } from "react"
import { compose } from "redux"
import { Documents } from "./documents"


 const DocumentsContainer = (props) => {

 useEffect( () => {
   props.appBodyRef.current.className = "documents__background" 
 }, [])


 return <Documents />
}




export default compose()(DocumentsContainer)

