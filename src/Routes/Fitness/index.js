import React from 'react'
import TopNav from '../../Components/TopNavigation'
import Logo from '../../Components/logo'
// import FuncBollywood from './FuncBollywood'
import ContextApi from '../../Utility/ContextStore/contextApi'
// import TopPost from './TopPost'
import Footer from '../../Components/footer/Footer'
// import FuncTechnology from '../Technology/FuncTechnology'
import FuncFitness from './FuncFitness'
import FitTopPost from './FitTopPost'
import "../../App.css"
import LogoMobile from '../../Components/Logomobile/LogoMobile'

function Bollywood() {
  return (
    <>
      <div className='mobileview'> <LogoMobile/></div>
     <div className='view'><Logo/></div> 
    <TopNav/>
    <ContextApi>
      <div className='Bollymaincontainer'>
        <div className='Bollysubmaincontainer'>
    <FuncFitness/>
    {/* <TopPost/> */}
    <FitTopPost/>
    </div>
    </div>
    </ContextApi>
    <Footer/>
    
    </>
  )
}

export default Bollywood