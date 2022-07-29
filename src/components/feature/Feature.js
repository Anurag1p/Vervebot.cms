import React from 'react'
import "./feature.css";
import Carousel from '../corousel/Carousel';
import Seo from "../../assets/images/seo.png";
import Web from "../../assets/images/Web.jpeg";



const Feature = () => {
    return (
        <>
            <div className="container-fluid featurebg">
                <div className="container feature">
                    <div className='row'>
                        <div className="col-lg-6">
                            <Carousel />
                        </div>
                        <div className="col-lg-6">
                            <div className="feature-card">
                                <div className="image-container">
                                    <img src={Seo}  style={{width:"100%", height:"100%"}}alt='scale-img' className="feature-img" />
                                    <div>
                                        <button className='text-light bg-dark  rounded'style={{ width: "120px" }} >SEO</button>
                                        <h4 style={{wordSpace:"none", padding:"5px"}}>A Different Kind Of Company. A Different Kind Of SEO</h4>
                                    </div>
                                </div>
                                <div className="image-container">
                                    <img src={Web} alt='scale-img' className="feature-img" />
                                    <div>
                                        <button className='text-light bg-dark  rounded' style={{ width: "120px" }}>Websites</button>
                                                <h4>Websites and E-commerce platform to <br/>scale your bussiness</h4>
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

export default Feature