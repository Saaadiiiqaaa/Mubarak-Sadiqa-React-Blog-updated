import React, { useContext } from 'react'
import { AppData } from '../../Utility/ContextStore/contextApi'
import {  useNavigate } from 'react-router-dom';
import GeneralHeading from '../../Components/Heading';
import "../../App.css"
import Advertisement from '../../Components/Advatisement/Advertisement';
function TechTopPost() {
  const [data] = useContext(AppData);
  const navi =useNavigate();
  
    
    const Filter =data.filter((item)=>item.cat==="Technology" && item.for ==="TopPostmain" );
    const Filter2 =data.filter((item)=>item.cat==="Technology"  );
    const handleNav=(d)=>{
      navi(`/${d.cat}/${d.id}`, { state: d });
    }
  return (
    
    <>
    <div className='Toppost'>
        <div>
        <GeneralHeading HeaderText={'TopPost'}/>
        {Filter.map((d)=>(
            <div key={d.id} >
              
            <div className='toppostflex' >
            <img className='toppostimg' src={d.img} onClick={()=>handleNav(d)}/>
            
            <div className='topposttitle'>
            <p className='titletoppost' onClick={()=>handleNav(d)}>{d.title}</p>
           
            
                 <span className='toppostcat'>{d.cat}</span>
                 <span className='date'>{d.date}</span>
                 </div>
                 
            </div>
          
            </div>
            
            
        ))}
</div>

<div>
<div>
              <hr className='line3'/>
              </div>

              <div className='toppostflexcontainer'>
   
   {Filter2.slice(6,10).map((d)=>(
    
<div key={d.id} className='toppostflexcard'>
 
<div className='toppostflex2'>
<img className='toppostimg2' src={d.img} onClick={()=>handleNav(d)}/>
<div className='topposttitle2'>
     <div> <p className='title' onClick={()=>handleNav(d)}>{d.title}</p></div>

    <div>  <span className='toppostcat2'>{d.cat}</span>
    <span className='datetop'>{d.date}</span></div>
    
    
   </div>
   </div>
  

{/* <hr className='line3'/>  */}
   
</div>


))}
</div>
        
        <Advertisement/>
    </div>
    </div>
    </>
  )
}

export default TechTopPost