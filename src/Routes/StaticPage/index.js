import React from 'react'
import FuncStatic from './FuncStatic'
  
import Footer from '../../Components/footer/Footer'
import ContextApi from '../../Utility/ContextStore/contextApi'

function StaticPage() {
  return (
    <>
        {/* <div></div> */}
        <ContextApi>
        <FuncStatic/>
        </ContextApi>
        <Footer/>
    </>

  )
}

export default StaticPage