import React from 'react'
import "./trendingnews.css"
import Scale from "../../assets/images/scale.jpg";
import Web from "../../assets/images/Web.jpeg";
import Mobile from "../../assets/images/mobile.jpg";
import CMS from "../../assets/images/cms.png";
import img5 from "../../assets/images/img5.jpg"
import Category from '../sidebar/category';



const cardData = [

{
  buttonName:"ICMS",
  image: img5,
  caption: "ML Powered Invoice Management System"
},

{
  buttonName:"Company Tools",
  image: CMS,
  caption: "CRM/CMS/POS to take your bussiness on Next level"
}
  ,
{
  buttonName:"Web",
  image: Web,
  caption: "Websites and E-Commerce platform to Scale your business"
}




]
const Main2 = (props) => {
  const { mainHeading } = props;

  return (
    <div className='bg_trending_news'>
      <div className="container">
        {/* ........................................Main section ............................ */}
        <div className="row mb-5 padding_top_bottom">
          {/* ........................................Menu section ............................ */}
          <div className='col-lg-9'>
            <div className="row">
              <div className="trendingMenu">

                <div className="heading">Services</div>

                <div className="line"></div>
                <div className='filterlist'>
                  <a href="all">All</a>
                  <a href="travel">App</a>
                  <a href="finance">Web</a>
                  <a href="health">Software</a>
                  <a href="sports">Iot</a>
                </div>
              </div>
            </div>

            {/* ........................................content section ............................ */}

            <div className="row">
              {/* ........................................ section one ............................ */}
              <div className="col-lg-6">
                <div className="section_one">
                  <img src={Mobile} alt='scale-img' className='image' />
                  <div >
                    <button>App Development</button>
                    <h4><b>{mainHeading}</b></h4>
                  </div>
                </div>
              </div>

              {/* ........................................ section two ............................ */}

              <div className="col-lg-6">
                <div className='section_two'>
                  {cardData.map((items) => (
                    <>
                      <div className='section_two_line_one'></div>
                      <div className="section_two_content pl-2">
                        <img src={items.image} alt="img" />
                        <div>

                          <span><button className='p-2' style={{width:'120px'}}>{items.buttonName}</button> &nbsp;
                          {/* <FontAwesomeIcon icon={faCalendar} /> 12/10/2020 */}

                          </span>
                          <b className='pt-3'>{items.caption}</b>
                        </div>
                      </div>
                      <div className='section_two_line_two'></div>
                    </>

                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ........................................category sidebar ............................*/}
          <div className="col-lg-3">
            <Category />
          </div>
        </div >
      </div>
    </div>

  )
}

export default Main2