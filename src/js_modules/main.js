import { Content } from './content/content'
import { Footer } from './footer/footer'
import { Header } from './header/header'
import { createRef } from 'react';
import './main.scss'
import { Route, Routes } from 'react-router';
import { DocumentMenuContainer } from './content/documents/document_menu/document_menuContainer';

let appBodyRef = createRef()
export const Main = (props) => {
 return (
 <div ref={appBodyRef} className='main__wrapper'>
    <Header />
    <Content appBodyRef={appBodyRef}/>
    <Footer />

    <Routes>
      <Route path={'/passportmenu'} element = { <DocumentMenuContainer />}></Route>
    </Routes>
 </div>)
}
