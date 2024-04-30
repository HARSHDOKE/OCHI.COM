import React, { useEffect, useState } from 'react';
import './Eyes.css'

const Eyes = () => {
    const [rotate,setRotate] = useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX) *(180/Math.PI);
            setRotate(angle-180);
        })
    })
  return (
   <>
        <div className="eyes">
            <div className="eyes-container">
                <div className="eyes-ctn">
                    <div className="eye1">
                        <div className="black">
                            <div style={{transform:`translate(-50%, -50%)  rotate(${rotate}deg)`}} className="line">
                                <div className="white">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eye1">
                        <div className="black">
                            <div style={{transform:`translate(-50%, -50%)  rotate(${rotate}deg)`}} className="line">
                                <div className="white">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default Eyes
