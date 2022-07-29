import React, { useState } from 'react'
import AboutCards from "./AboutCards";
// import Aboutthumb from "../../images/about-thumb.jpg"
import video from '../../assets/images/aboutvideo.mp4'
import "./about.css"
// import imgVideo from "../../images/about-play-thumb.png"
// import { CaretRightOutlined } from '@ant-design/icons';
import aboutcard1 from "../../assets/images/workprogress.svg"
import Haveidea from '../haveIdeacard/Haveidea';
import { ListItemSecondaryAction } from '@material-ui/core';





const AboutMain = (props) => {

  const { aboutpageData } = props
  console.log(aboutpageData, "hello");

  const [para, setPara] = useState(1);

  const showPara1 = () => {
    setPara(1)

  }
  const showPara2 = () => {
    setPara(2)
  }
  const showPara3 = () => {
    setPara(3)

  }

  return (
    <>
      <div className="container-fluid ">

        <div className="container p-5" >

          {/*.....................................Header Section 1............................................. */}

          {/* ..................................... Section 1............................................. */}
          <div className="row">
            <div className="col-12">

              <img className='about-thumb-img ' src={aboutpageData.aboutThumbImg.mediaItemUrl} alt="aboutimg" />
            </div>
          </div>
          {/*..................................... Section 2 text only............................................. */}

          <div className="row  pb-2">
            <div className="col-lg-6 col-md-6 col-sm-6 pt-5 ">
              <h2 className='about-us-heading'>{aboutpageData.aboutTitle}</h2>
              <hr />
              <p className=' about-us-content'>{aboutpageData.aboutContent}</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 pt-5">
              <h2 className='about-us-heading'>{aboutpageData.visionTitle}</h2>
              <hr />
              <p className=' about-us-content'>{aboutpageData.visionContent}</p>

            </div>
          </div>
          {/*..................................... About-- Card Section 3............................................. */}

          <div className="row pb-5">
            <div className="col-lg-3 col-md-6 ">
              <AboutCards
                logo={aboutpageData.cardIcon1.mediaItemUrl}          
                title={aboutpageData.card1Title}
                cardContent={aboutpageData.card1Content}
              />
            </div>

            <div className="col-lg-3 col-md-6 ">
              <AboutCards
                logo={aboutpageData.cardIcon2.mediaItemUrl}
                title={aboutpageData.card2Title}
                cardContent={aboutpageData.card2Content}
              />
            </div>

            <div className="col-lg-3 col-md-6 ">
              <AboutCards
                logo={aboutpageData.cardIcon3.mediaItemUrl}
                title={aboutpageData.card3Title}
                cardContent={aboutpageData.card3Content}

              />
            </div>

            <div className="col-lg-3 col-md-6 ">
              <AboutCards
                logo={aboutpageData.cardIcon4.mediaItemUrl}
                title={aboutpageData.card4Title}
                cardContent={aboutpageData.card4Content}
              />
            </div>
          </div>

          {/*..................................... Section 4th............................................. */}

          <div className="row ">
            <div className="col-lg-6 col-md-12  ">
              <img className='video-img' src={aboutpageData.videoImage.mediaItemUrl} alt="imageAbout" />
              {/* ......................................circle wave on video button........................ */}
              {/* <div className="wave-conatiner">
                <div className="circle delay1"></div>
                <div className="circle delay2"></div>
                <div className="circle delay3"></div>
                <div className="circle delay4"></div>
                <div className="icon "  >
                  <a href={video}>
                  <CaretRightOutlined
                    style={{ color: "#15445a", fontSize: "3rem" }}
                  />
                  </a>
                </div>
              </div> */}



            </div>

            <div className="col-lg-6 col-md-12  ">
              <div className='main-mission'>
                <h2 className='about-mission-heading'>{aboutpageData.trustTitle} </h2>
                <div className="row g-0 mt-4 ml-2">
                  {/* <div className="button-width"> */}
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-auto " role="button" onKeyDown={showPara1} aria-label="btnstate" tabIndex={0} onClick={showPara1}>
                    <button className={para === 1 ? "aboutMenuButtonActive" : "aboutMenuButton"}   >{aboutpageData.trustButtonTitle}</button>
                  </div>
                  <div className="col-lg-4 col-md-4  col-sm-4 col-xs-auto " role="button" onKeyDown={showPara2} aria-label="btnstate" tabIndex={0} onClick={showPara2}>
                    <button className={para === 2 ? "aboutMenuButtonActive" : "aboutMenuButton"}>{aboutpageData.mission3btnTitle} </button>
                  </div>
                  <div className="col-lg-4 col-md-4  col-sm-4 col-xs-auto " role="button" onKeyDown={showPara3} aria-label="btnstate" tabIndex={0} onClick={showPara3}>
                    <button className={para === 3 ? "aboutMenuButtonActive" : "aboutMenuButton"}>{aboutpageData.mission2btnTitle} </button>
                  </div>
                  {/* </div> */}


                  {/* style={{backgroundColor:`${bgcolor}`}}   isko button me pass krna hai...*/}

                </div>
                {para === 1 ?
                  <div className="para-conatiner">
                    <p className='para-onclick'>{aboutpageData.mission1Content}</p>
                  </div> :
                  para === 2 ?
                    <div className="para-conatiner">
                      <p className='para-onclick'> {aboutpageData.mission2Content} </p>
                    </div> :
                    para === 3 ?
                      <div className="para-conatiner">
                        <p className='para-onclick'>{aboutpageData.mission3Content} </p>
                      </div> : "Data Not Available."}
              </div>

            </div>
          </div>

          <Haveidea />

          {/*..................................... Footer Section 1............................................. */}
        </div>

      </div>
    </>
  )
}
export default AboutMain