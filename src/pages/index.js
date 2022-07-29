import React from "react";
import Feature from '../components/feature/Feature';
import Header from "../components/header/header";
import Main from '../components/main/Main';
import TrendingNews from '../components/trendingNews/trendingNews';
import Trendingnow from '../components/trendingNow/Trendingnow';
import "../assets/style/style.css"
import Business from "../components/business/Business";
import Footer from "../components/footer/Footer";
import Haveidea from "../components/haveIdeacard/Haveidea";

const IndexPage = () => {

  return (
    <>
      <Header />
      <Main
        mainHeading="We Have The Solutions To Grow Your Business"
      />
      <TrendingNews
        mainHeading="Get your dream Mobile App Development built in not time."
      />
      <Feature
        mainHeading="Climate Changes In The Recent Prospective Of The Global Warming"
      />
      <Trendingnow />
      <Business />
      <Haveidea />
      <Footer />

    </>

  )
}

export default IndexPage



