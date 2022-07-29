import React from 'react'
import Service1 from "../../assets/images/service1.png";
import service3 from "../../assets/images/servicebrand2.jpg"
import service6 from "../../assets/images/serviceC4.jpg"
import { ClockCircleFilled, LikeFilled, StarTwoTone } from '@ant-design/icons';
import ServiceCard from './ServiceCard';
import Section6Cards from './Section6Cards';
import "./services.css"



const Services = () => {
  return (
    <>
      <div className="container">
        <div className="service1">
          <div className="serviceHeading">
            <h1 className='headingAnimation'>Our Services</h1>

          </div>
          <div className="mainServiceContent">
            <img className='serviceImage' src={Service1} alt="Our-service-1" />

            <div className="contentservice ">
              <div className="service-line "></div>
              <p className='service1Content'>Contact Us For Best Price As
                Your 10 Mins On Phone Can Save Hundreds Of Your Dollars.
                Contact Us Now: +1 347-809-3270 | <b>Info@Vervebot.Io</b></p>
              <div className="btn">
                <button className='serviceConatctbtn '> <span className='headingAnimation'>Contact</span></button>

              </div>
            </div>

          </div>
        </div>


        <div className="service2">
          <div className="mainServiceContent ">
            <div className="service2heading  ">
              <p className="headingAnimation properties">Every Customer
                Is Unique Thus We Provide Custom Services Building Right
                From Scratch</p>
            </div>
            <div className="contentservice ">
              <div className="service-line"></div>
              <p className='service2Content '>Since Every Single Customer’s Requirements Are Different So Do Their Cost Of Development.
                But We Gaurantee That We Will Develop What Ever Our Clients Requirements Are With
                The Most Advance Technology Available In The Market +The Lowest Cost Compared To The Market.</p>
            </div>
          </div>
        </div>



        <div className="mainServiceContent ">
          <div className="divoted">

            <div className="contentservice ">
              <p className='ourspecial headingAnimation'>OUR SPECIAL SERVICES</p>
              <h1 className='specialService'>The Devoted Special Service</h1>
              <div className="service-line"></div>

              <div className="service-icons">
                <div className="star ">
                  <StarTwoTone className="service-icon"

                  />
                  <span className='special headingAnimation'>Best Planing</span>

                </div>
                <div className="watch ">
                  <ClockCircleFilled className="service-icon"

                  />

                  <span className='special headingAnimation'>24*7 Support</span>

                </div>
                <div className="like  " >
                  <LikeFilled className="service-icon"

                  />

                  <span className='special headingAnimation'>Branding</span>

                </div>
              </div>
            </div>

            <img className='serviceImage3' src={service3} alt="Our-service-1" />
          </div>

        </div>



        <div className="serviceCards">

          <ServiceCard />

        </div>




        <div className="mainServiceContent  ">
          <div className="service5heading   ">
            <p className="service5Content">The Exceptional <br /> Craftsmen Of Work Us</p>
            <div className="service-line"></div>

          </div>

          <div className="contentservice">
            <p className='service5SubContent '>An effective Process should result in a high quality system
              that meets customer expectations, reaches completion within time and cost evaluations,and works
              effectively and efficiently in the current and planned Information Technology infrastructure.</p>
          </div>

        </div>





        <div className="service6">
          <div className="img6 ">
            <img className="serviceImage6" src={service6} alt="" />
          </div>

          <div className="subcontainer  ">
            <Section6Cards/>



          </div>
        </div>

      </div>





    </>
  )
}

export default Services