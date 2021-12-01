import { useEffect, useState } from 'react'
import { DocumentMenu } from './document_menu'




export const DocumentMenuContainer = (props) => {
const [menuStyle, setMenuStyle] = useState('')


useEffect( () => {
 setMenuStyle('active')

}, [])

 return <DocumentMenu  {...props} menuStyle={menuStyle}/>
}



