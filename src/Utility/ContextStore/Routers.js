import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from '../../Routes/Home';
import Bollywood from '../../Routes/Bollywood';
import Technology from '../../Routes/Technology';
import Hollywood from '../../Routes/Hollywood';
import Fitness from '../../Routes/Fitness';
import Food from '../../Routes/Food';
import StaticPage from '../../Routes/StaticPage';
function Routers() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/:cat" element={<Bollywood/>}/>
        

        {/* <Route path="/Technology" element={<Technology/>}/>
        <Route path="/Hollywood" element={<Hollywood/>}/>
        <Route path="/Fitness" element={<Fitness/>}/>
        <Route path="/Food" element={<Food/>}/> */}
        <Route path="/:cat/:id" element={<StaticPage/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Routers