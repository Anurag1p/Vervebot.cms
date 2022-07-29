import React from 'react'
import "./haveidea.css"

const Haveidea = () => {
    return (
        <>
            <div className="container p-5">
                <div className="submaintermcond ">
                    <div className="row">
                        <div className="col mainLine">
                            <div className="line"></div>
                        </div>
                        <div className="row">
                            <div className="col ">
                                <div className="haveIdeaText"><p className='animationText'> Have An Idea Or Project? Let's Talk</p></div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col  ">
                                <div className="freeConsultText">
                                    Free Consultation For Your Business.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                        <a href="/contact" className="contactLink"> <p className='btnText'>Contact Us</p> </a>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Haveidea