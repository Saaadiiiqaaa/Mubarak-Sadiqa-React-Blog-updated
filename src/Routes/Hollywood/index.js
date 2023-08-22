import React from 'react'
import TopNav from '../../Components/TopNavigation'
import Logo from '../../Components/logo'
// import FuncHollywood from './FuncHollywood.js'
import ContextApi from '../../Utility/ContextStore/contextApi'
// import TopPost from './TopPost.js'
import Footer from '../../Components/footer/Footer'
import FuncHollywood from './FunctHollywood'
// import TopPost from '../Bollywood/TopPost'
import HollyTopPost from './HollyTopPost'
import "../../App.css"
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
    <FuncHollywood/>
    <HollyTopPost/>
    </div>
    </div>
    </ContextApi>
    <Footer/>
    </div>
  )
}

export default Hollywood