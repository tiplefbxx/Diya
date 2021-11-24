import { Content } from './content/content'
import { Footer } from './footer/footer'
import { Header } from './header/header'
import { createRef } from 'react';
import './main.scss'

let appBodyRef = createRef()
export const Main = (props) => {
 return (
 <div ref={appBodyRef} className="main__wrapper">
    <Header />
    <Content appBodyRef={appBodyRef}/>
    <Footer />
 </div>)
}

