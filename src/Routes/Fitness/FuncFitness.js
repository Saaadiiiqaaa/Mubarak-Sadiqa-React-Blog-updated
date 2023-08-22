import React, { useContext } from 'react'
import { AppData } from '../../Utility/ContextStore/contextApi';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import GeneralHeading from '../../Components/Heading';


function FuncFitness() {
  const [Data]=useContext(AppData);
  const navi =useNavigate()
  const handleNav=(d)=>{
    navi(`/${d.cat}/${d.id}`, {state:d})
  }
  return (
    
    <div className='BollywoodContainer'>
      
      <div className='subcontainer'>
        <GeneralHeading HeaderText={'Fitness'}/>
        
    {
      Data.filter((item)=>item.cat==="Fitness").slice(0,7).map((d)=>(

        <div key={d.id}  >
         <div className='BBcontainer'>
          <div className='imagebox'>
         <img src={d.img} alt="no network"  onClick={()=>handleNav(d)} className='image'/>
         </div>
        
         
         <div className='textcontainer' >
         <h1 className='titles' onClick={()=>handleNav(d)}>{d.title}</h1>
         
         <div className='overviewcat'>
         <p className='overview'>{d.overview}</p>
         <p className='cat'>
          <span>{d.cat}</span>
          
         <span className='date'>{d.date}</span>
        
         </p>
         </div>
         </div>
           </div>
           { 
           d.id !=7 && 
           <div>
           <hr className='line2'/>
           </div>}
        </div>
        
      ))
    }
    </div>
  
  </div>
  )
}

export default FuncFitness