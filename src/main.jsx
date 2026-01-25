import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import RoutingApp from './routing/navRouting/RoutingApp.jsx'
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/> 
    <BrowserRouter>
        <RoutingApp/>
    </BrowserRouter>   
   </StrictMode>
)
