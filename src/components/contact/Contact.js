import React from 'react'
import "./contact.css";
import LocationImg from "../../assets/images/location.png"
import MailImg from "../../assets/images/mail.png"
import callmeImg from "../../assets/images/call.png"
import Fb from "../../assets/images/1.png"
import Insta from "../../assets/images/3.png"
import Linkedin from "../../assets/images/5.png"
import Haveidea from '../haveIdeacard/Haveidea';

const Contact = () => {
  return (
    <>

      <section className='contactSection'>

        <div className="containerContact container ">
            <div className="contactInfo">
              <div>
                <h2>Contact Info</h2>
                <ul className='info'>
                  <li>
                    <span><img src={LocationImg} alt="location" /></span>
                    <span>1280 US-46,  <br />Parsippany-Troy Hills,<br />
                      NJ 07054, United States <br /> 90071</span>
                  </li>
                  <li>
                    <span><img src={MailImg} alt="mail" /></span>
                    <span>info@vervebot.io</span>
                  </li>
                  <li>
                    <span><img src={callmeImg} alt="callme" /></span>
                    <span>+1 (347)-809-3270</span>
                  </li>
                </ul>
              </div>
              {/* ***************-->>>use this to resolve warning************* ----->>rel="noreferrer noopener" */}

              <ul className='socialIcons'>
                <li><a href="https://www.facebook.com/vervebotusa/" rel="noreferrer noopener" target="_blank"><img src={Fb} alt="Fb" /></a></li>
                {/* <li><a href="#"><img src={Twitter} alt="Twitter" /></a></li> */}
                <li><a href="https://www.instagram.com/vervebot/?hl=en" rel="noreferrer noopener" target="_blank"><img src={Insta} alt="Insta" /></a></li>
                {/* <li><a href="#"><img src={Pinterest} alt="Pinterest" /></a></li> */}
               <li><a href="https://www.linkedin.com/company/vervebot/mycompany/" rel="noreferrer noopener" target="_blank"><img src={Linkedin} alt="Linkedin" /></a></li>
              </ul>
            </div>

            <div className="contactForm">
              <h2>Let's Connect</h2>
              <div className="formBox">
                <div className="inputBox w50">
                  <input type="text" required />
                  <span>First Name</span>
                </div>
                <div className="inputBox w50">
                  <input type="text" required />
                  <span>Last Name</span>
                </div>
                <div className="inputBox w50">
                  <input type="text" required />
                  <span>Email Address</span>
                </div>
                <div className="inputBox w50">
                  <input type="text" required />
                  <span>Subject</span>
                </div>
                <div className="inputBox w100">
                  <textarea type="text" required />
                  <span> Write Your message here...</span>
                </div>
                <div className="inputBox w100">
                  <input type="submit" value="send" required />

                </div>
              </div>

          </div>



        </div>

      </section>

      <section className='contactSection'>
        <div className="zIndex" style={{ zIndex: "1000" }}>
          <Haveidea />

        </div>


      </section>


    </>
  )
}

export default Contact