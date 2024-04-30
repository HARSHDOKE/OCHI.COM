import React from 'react';
import './landig.css'
import { FaLongArrowAltUp } from "react-icons/fa";

const landingpage = () => {
  return (
    <>
        <div className="main ">
            <div className="textstructure">
                {["WE CREATE", "EYE-OPENING","PRESENTATIONS"].map((item, index)=>{
                    return ( 
                    <div className="masker"> 
                        <div className="masker-holder">
                            {index === 1 && (<div className='card'>
                            </div>)}
                            <h1>{item}</h1> 
                        </div>
                    </div>
                    );    
                })}
            </div>

            <div className="elements">
                {["For public and private companies","From the first pitch to IPO"].map((item,index)=><p>
                    {item}
                </p>)}
                <div className="start">
                    <div className="text">
                        start the project
                    </div>
                    <div className="icon">
                        <span>
                            <FaLongArrowAltUp/>
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default landingpage
