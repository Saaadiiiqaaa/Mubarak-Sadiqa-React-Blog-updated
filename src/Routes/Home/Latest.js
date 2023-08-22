import React, { useContext } from 'react'
import { AppData } from '../../Utility/ContextStore/contextApi'
import { useNavigate } from 'react-router-dom';
import GeneralHeading from '../../Components/Heading';

function Latest() {
    const [Data]=useContext(AppData);
    const navi=useNavigate();

    const handleClick=(d)=>{
        navi(`/${d.cat} /${d.id}`, {state: d})
    }
  return (
    <div>
     <GeneralHeading HeaderText={"The Latest"}/>
     <div className='latestbox'>
      
     {Data.filter((item)=>item.sp==="latest").map((d)=>(
        <div className='latestcard'>
        <img src={d.img} onClick={()=>{handleClick(d)} }alt="no network" className='latestimg' />
       <div> <h2 onClick={()=>handleClick(d)} className='latesttitle'>{d.title}</h2></div>
       <div className='latestbox2'>
       <div ><p className='latestoverview'>{d.overview}</p></div>
       <p className='catdate'> <span>{d.cat}</span><span className='date'>{d.date}</span></p>
       </div>
       </div>
     
     ))}
     
     </div>
    </div>
  )
}

export default Latest