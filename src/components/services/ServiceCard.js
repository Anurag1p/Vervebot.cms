import React from 'react'

import card1 from "../../assets/images/service1.png"
import card2 from "../../assets/images/serviceC1.png"
import card3 from "../../assets/images/serviceC2.png"
import card4 from "../../assets/images/serviceC3.jpg"
import card5 from "../../assets/images/servicebrand2.jpg"
import card6 from "../../assets/images/serviceC4.jpg"

const ServiceCardData = [{
  cardImg: card1,
  cardTitle: "Website Designing"
},

{
  cardImg: card2,
  cardTitle: "Adwords Campaign"
}
  ,
{
  cardImg: card3,
  cardTitle: "E-Commerce Website"
},
{
  cardImg: card4,
  cardTitle: "Custom Software Developmentor"
},
{
  cardImg: card5,
  cardTitle: "Branding Packages  "
},
{
  cardImg: card6,
  cardTitle: "Mobile App Development"
}

]

const ServiceCard = () => {

  return (
    <>
    <div className="serviceMaincard">

      {ServiceCardData.map((items) => (
          <div className="ServiceCard ">
            <div className="cardMain">

              <img className="card-img" src={items.cardImg} alt="card" />
            </div>
            <div className="service-cardText">

              <p className="serviceText headingAnimation text-center"> {items.cardTitle}</p>
            </div>

          </div>

      ))}

</div>






    </>
  )
}

export default ServiceCard