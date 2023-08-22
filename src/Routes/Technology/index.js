import React from 'react'
import TopNav from '../../Components/TopNavigation'
// import Logo from '../..Components/logo'

import ContextApi from '../../Utility/ContextStore/contextApi'
import Footer from '../../Components/footer/Footer'
import FuncTechnology from './FuncTechnology'
import Logo from '../../Components/logo'
import TechTopPost from './TechTopPost'
import LogoMobile from '../../Components/Logomobile/LogoMobile'

function Hollywood() {
  return (
    <div>
      <div className='mobileview'> <LogoMobile/></div>
     <div className='view'><Logo/></div> 
    <TopNav/>
    <ContextApi>
      <div className='Bollymaincontainer'>
        <div className='Bollysubmaincontainer'>
    <FuncTechnology/>
    {/* <HollyTopPost/> */}
    <TechTopPost/>
    </div>
    </div>
    </ContextApi>
    <Footer/>
    </div>
  )
}

export default Hollywood