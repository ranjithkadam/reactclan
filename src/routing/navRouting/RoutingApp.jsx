import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReactIntro from '../ReactIntro'
import Navbar from './NavBar'
import ReactComponents from '../ReactComponents'
import ReactProps from '../ReactProps'
import ReactState from '../ReactState'
import ReactJavaScriptXml from '../ReactJavaScriptXml'
import ReactEvents from '../ReactEvents'
import ReactConditionalRendering from '../ReactConditionalRendering'
import ReactFragments from '../ReactFragments'
import ReactRouting from '../ReactRouting'
import ReactForms from '../ReactForms'
import ReactUseEffect from '../ReactUseEffect'

export default function RoutingApp() {
  return (
    <>
    
    <header className='sticky top-0.5 z-10 w-full'>
        <div className='bg-white text-blue-600 font-bold p-3 shadow text-3xl'><h1>React Full Course</h1></div>
         
    </header>
  <div className='sm:flex sm:justify-between '> 
    
    <Navbar/>
    <Routes>
        <Route path='/intro' element={<ReactIntro/>}/>
        <Route path='/components' element={<ReactComponents/>}/>
        <Route path='/props' element={<ReactProps/>}/>
        <Route path='/states' element={<ReactState/>}/>
        <Route path='/jsx' element={<ReactJavaScriptXml/>}/>
        <Route path='/events' element={<ReactEvents/>}/>
        <Route path='/conditions' element={<ReactConditionalRendering/>}/>
        <Route path='/fragments' element={<ReactFragments/>}/>
        <Route path='/routing' element={<ReactRouting/>}/>
        <Route path='/forms' element={<ReactForms/>}/>
        <Route path='/useEffect' element={<ReactUseEffect/>}/>
        
    </Routes>

    
 </div>
 <div>
    
 </div>
 </>
  )
}
