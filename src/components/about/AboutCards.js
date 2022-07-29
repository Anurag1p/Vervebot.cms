import React from 'react'
import "./about.css"
const About = (props) => {
    const {title,cardContent,logo} =props;
    return (
        <>
            
                <div className="main-card-progress">
                    <img className='aboutcard1' src={logo} alt="aboutCardImg" />


                    {/*....***--Imp--**** you can change title and content of cards by passing desired content on aboutmain.js page .....**where we call this component** */}
                    <h6 className='about-card-title'>{title}</h6>
                    <p className='about-card-content'>{cardContent}</p>
                </div>
          
        </>

    )
}

export default About
