import React from 'react';
import './About.css'

const About = () => {
  return (
  <>
    <div className='about-main'>
        <h1>
            Ochi is a strategic partner for fast-growing tech buisnesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className="section1">
            <div className="div1">
                <p>What you can expect:</p>
            </div>
            <div className="div2">
                <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
                <p className='p2'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className="div3">
                <p className='p3'>Social Media: </p>
                <div className="social">
                    <p>Instagram</p>
                    <p>Behance</p>
                    <p>FaceBook</p>
                    <p>Linkedin</p>
                </div>
            </div>
        </div>
        <div className="section2">
            <div className="sec-2-div">
                <h1>Our apporach:</h1>
                <button className='aboutbtn1'>Read More
                    <div className="circl">

                    </div> 
                </button>
            </div>
            <div className="sec-2-div2">
                <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>
    </div>
  
    </>
  )
}

export default About
