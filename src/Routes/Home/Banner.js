import React, { useContext } from 'react'
import "./Home.css"

import { AppData } from '../../Utility/ContextStore/contextApi';
import { useNavigate } from 'react-router-dom';
function Banner() {
    console.log("hii")
    const [Data] =useContext(AppData)
    console.log(Data)
    const navi =useNavigate();

    const Filter1=Data.filter(
        (item)=> item.sp === "home-banner"
        );
    const Filter2=Data.filter(
        (item)=> item.sp === "home-ban"
        );

    const handleImg=(d)=>{
         navi(`/${d.cat}/${d.id}`,{state: d})
    }
  return (
    <div className='imageContainer'> 
      {/* <div> */}
        { Filter1.map((d)=>(
        <img key={d.id}  onClick={()=>handleImg(d) } alt="no Network"  className="FirstImg"src={d.img} />

        ))}
        {/* </div> */}
        {/* <div> */}
        {
            Filter2.map((d)=>(
                <img key={d.id} onClick={()=>handleImg(d)} alt="no network "  className="secondImg"src={d.img}/>
            ))
        }
        {/* </div> */}
    </div>
  )
}

export default Banner