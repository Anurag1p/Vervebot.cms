import React from 'react'
import Services from "../components/services/Services"
import Header from "../components/header/header";
import Footer from '../components/footer/Footer';
import Haveidea from '../components/haveIdeacard/Haveidea';
import Breadcrum from '../components/breadcrums/Breadcrum';




const services = () => {
  return (
    <>
      <Header />
      <Breadcrum/>
      <Services />
      <Haveidea/>
      <Footer /> 
    </>
  )
}

export default services


// export const query = graphql`
//   {
//     wpPage(id: {eq: "cG9zdDoxNDY="}) {
//       services {
//         section2Content
//         section2Title
//         section3Icontitle1
//         section3Icontitle2
//         section3Icontitle3
//         section3Img {
//           mediaItemUrl
//         }
//         section3TitleBig
//         section3TitleSmall
//         section4Card1Img {
//           mediaItemUrl
//         }
//         section4Card1Title
//         section4Card2Img {
//           mediaItemUrl
//         }
//         section4Card2Title
//         section4Card3Img {
//           mediaItemUrl
//         }
//         section4Card3Title
//         section4Card4Img {
//           mediaItemUrl
//         }
//         section4Card4Title
//         section4Card5Img {
//           mediaItemUrl
//         }
//         section4Card5Title
//         section4Card6Img {
//           mediaItemUrl
//         }
//         section4Card6Title
//         section5Content
//         section5Title
//         section6Card1Content
//         section6Card1Title
//         section6Card2Content
//         section6Card2Title
//         section6Card3Content
//         section6Card3Title
//         section6Card4Content
//         section6Card5Content
//         section6Card5Title
//         section6Img {
//           mediaItemUrl
//         }
//         serContactBtnTitle
//         servContactimg {
//           mediaItemUrl
//         }
//         servicesContactContent
//         servicesTitle
//       }
//     }
//   }
// `