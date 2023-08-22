import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppData } from '../../Utility/ContextStore/contextApi';
import GeneralHeading from '../../Components/Heading';
import Advertisement from './Advertisement'


function TopPPost() {
    const [Data]=useContext(AppData);
    const navi =useNavigate();

    const handleImg=(d)=>{
        navi(`/${d.cat} /${d.id}` ,{state:d})
    }
  return (
    <div className='toppostcontainer'>
        <div className='Advertisement'>
        <Advertisement/>
        </div>
        <GeneralHeading HeaderText={"TopPost"}/>
        
       { Data.filter((item)=> item.sp==="Home-TopPostA").map((d)=>(
        <div>
        <img src={d.img} onClick={()=>handleImg(d)} className='topimg' alt="No Network"/>
        <div><h2 onClick={()=>handleImg(d)} className='toptitle1'>{d.title}</h2></div>
        {/* <div className='topoverview'>{d.overview}</div> */}
        
            <div className='datecat1'><span>{d.cat}</span ><span className='date'>{d.date}</span></div>
            <hr className='line'/>
        </div>
        
       ))}

       {
        Data.filter((item)=>item.sp ==="Home-TopPostB" ).map((d)=>(
            <div >
                <div className='verticalflex'>
                <div className='toppostlast'>
            <img src={d.img} alt="No Network" onClick={()=>handleImg(d)} className='topimage' />
            <div>
            <div><h2  alt="No network"onClick={()=>handleImg(d)}>{d.title}</h2></div>
            {/* <div >{d.overview}</div> */}
            
                <div className='catdate'><span>{d.cat}</span><span className='date'>{d.date}</span></div>
                </div>
                </div>
                </div>
                <hr className='line'/>
            </div>
        ))
       }
    </div>
  )
}

export default TopPPost