import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppData } from '../../Utility/ContextStore/contextApi';
import GeneralHeading from '../../Components/Heading';



function LatestArticle() {
    const [Data]=useContext(AppData);
    const navi =useNavigate();

    const handleImg=(d)=>{
        navi(`/${d.cat} /${d.id}` ,{state:d})
    }
  return (
    <div className='latestArticlecontainer'>
        <GeneralHeading HeaderText={"Latest Article "}/>
        <div className='latestarticlefullbox'>
        <div className='latestarticle'>

       { Data.filter((item)=> item.sp==="latestArticle").map((d)=>(
      
        <div className='latestarticlecard'>
           
            <div className='latestarticlebox'>
        <img src={d.img} alt="NO Network" onClick={()=>handleImg(d)} className='articleimg'/>
       
        <div className='articleinfo'>
        <div><h2 onClick={()=>handleImg(d)}>{d.title}</h2></div>
        <div className='articleoverview'>{d.overview}</div>
        
            <div className='datecat'>
            <span>{d.cat}</span >
            <span className="date">{d.date}</span></div>
            </div>
            </div>
            <hr className='line'/>
        </div>
        
       ))}
       </div>
    </div>
    <div>
       {
        Data.filter((item)=>item.sp ==="latestArticlebig" ).map((d)=>(
            <div>
            <img src={d.img} alt="No network" onClick={()=>handleImg(d)} className='bigimage'/>
            {/* <div><h2 onClick={()=>handleImg(d)} className='bigtitle'>{d.title}</h2> */}
            {/* <h1>{d.overview}</h1> */}
            </div>
            
                // <div><span>{d.cat}</span>{d.date}<span></span></div>
            // </div>
        ))
       }
       </div>
    </div>
  )
}

export default LatestArticle