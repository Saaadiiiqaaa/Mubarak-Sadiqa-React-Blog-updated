import React from 'react'
import TopNav from '../../Components/TopNavigation'
import Logo from '../../Components/logo'

import ContextApi from '../../Utility/ContextStore/contextApi'

import Footer from '../../Components/footer/Footer'
import "../../App.css"
import LogoMobile from '../../Components/Logomobile/LogoMobile'


import FoodTopPost from './FoodTopPost'
import FuncFood from './FuncFood'

function Bollywood() {
  return (
    <>
       <div className='mobileview'> <LogoMobile/></div>
     <div className='view'><Logo/></div> 
    <TopNav/>
    <ContextApi>
      <div className='Bollymaincontainer'>
        <div className='Bollysubmaincontainer'>
    <FuncFood/>
    <FoodTopPost/>
    </div>
    </div>
    </ContextApi>
    <Footer/>
    
    </>
  )
}

export default Bollywood