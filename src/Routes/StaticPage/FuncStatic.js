import React,{useContext} from 'react'

import "./static.css"

import {   Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../Components/logo';
import { AppData } from '../../Utility/ContextStore/contextApi';
import clap from '../../Components/images/rythm.svg'
import share from '../../Components/images/share.svg'
import Home from '../Home';

function FuncStatic() {
    const [Data]=useContext(AppData);
  
  const navi =useNavigate()
      const location = useLocation(); 
    console.log(location.state);
  return (
    
    <div className='commonParent'>
        <div className='clap commonfix'><img src={clap} /><span>10.5k</span></div>
        <div className='share commonfix'><img src={share} /> &nbsp;<span>share</span></div>
        <div className='editLogo'>
            <div className='uniqueLogo'>
           <Link className='linkStyle' to={'/'}>< Logo/></Link>
           </div>
           {/* <div className='getStarted '><GetStarted/></div> */}
        </div>



        <div className='flexProperty'>
            <hr className='commonPageHr'/>
        </div>
        <button onClick={()=>{navi(-1)}} className='backbutton'> Back</button>
        <div className='mainContainer blogDescrCont'>
        <div className='commonContainer'>
            <div>
                <h1 className='theComHeading'>{location.state.title}</h1>
            </div>
            <div className='commonProfile'>
                <div className='commonPic1'>
        <img className='profileImg' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2z1jaUw5sRS4wfasqV74Q125cdS7q7GulMFTYaS2snZZNSq1F' alt=""/>
        <div className='profileName'>
        <div className='authorname'>{location.state.Author} </div>
        <div className='datesstatic'> {location.state.date} : <span>10 mins read</span></div>

        
        {/* <DateExt dateExt={'Jan 28, 2019 · 10 min read'}/> */}
        </div>
        </div>
        
        <div className='commonPic2'>
            <img className='icons' alt='' src='https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png'/>
        </div>
        </div>
        <div className='imgCon'>
            <img className='MainImage' alt='' src={location.state.img}/>
        </div>

        <div className='descrip'>
            <p className='paraStyle'> {location.state.description} </p>
          
        </div>

        <div>

        </div>




        </div> 
    </div>


  
        
        <h2 className='more'>More from Siren</h2>
      {/* {console.log(location.state.cat)}  */}

<div className='staticend'> 
<div className='latestboxstatic padb'> 

{Data.filter((item)=> item.cat===`${location.state.cat}`).slice(0,4).map(d=>(
    <div className='latestboxcard  staticpadding' >
        <img src={d.img} alt="no network" className='latestimgstatic' />
       <div> <h2  className='latesttitle'>{d.title}</h2></div>
       <div className='latestbox2'>
       <div ><p className='latestoverview'>{d.overview}</p></div>
       <p className='catdate'> <span>{d.cat}</span><span className='date'>{d.date}</span></p>
       </div>
        </div>
))}
       

        
    </div>
    </div>
    </div>
  )
}

export default FuncStatic

