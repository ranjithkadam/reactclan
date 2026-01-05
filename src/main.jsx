import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import Header from './App.jsx';
 import {HeaderAdvance, HeaderComponent} from './components/header/Header.jsx';
import { Footer } from './components/footer/Footer.jsx';
import ReactProps from './props/example1.jsx';
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>

    {/* <HeaderComponent />
     <HeaderAdvance/>
     <Footer/> */}
     {/* <ReactProps/>   */}
     
   </StrictMode>
)
