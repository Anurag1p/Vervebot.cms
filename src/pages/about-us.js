import React from 'react'
import { graphql } from "gatsby"
import AboutMain from '../components/about/aboutmain';
import Breadcrum from '../components/breadcrums/Breadcrum';
import Footer from '../components/footer/Footer';
import Header from '../components/header/header';


const About = ({data}) => {
  const aboutData = data.wpPage.aboutUs
  console.log(aboutData);
  return (
    <>
      <Header />
      <Breadcrum />

      <AboutMain 
      
      aboutpageData={aboutData}
      
      />

      <Footer />
    </>
  )
}

export default About


export const query = graphql`
  {
    wpPage(id: {eq: "cG9zdDoxMjE="}) {
      aboutUs {
        aboutContent
        aboutTitle
        card1Content
        card1Title
        card2Content
        card2Title
        card3Content
        card3Title
        card4Content
        card4Title
        aboutThumbImg {
          mediaItemUrl
        }
        cardIcon1 {
          mediaItemUrl
          title
        }
        cardIcon2 {
          mediaItemUrl
          title
          description
        }
        cardIcon3 {
          description
          mediaItemUrl
          mediaType
          title
        }
        cardIcon4 {
          description
          mediaItemUrl
          mediaType
          title
        }
        fieldGroupName
        mission1Content
        mission2Content
        mission2btnTitle
        mission3Content
        mission3btnTitle
        trustButtonTitle
        trustTitle
        videoImage {
          mediaItemUrl
          title
        }
        visionContent
        visionTitle
      }
      uri
    }
  }
`




