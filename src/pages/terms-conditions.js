import React from 'react'
import TermsConditions from '../components/terms and condition/TermsConditions'
import Header from "../components/header/header";
import Footer from '../components/footer/Footer';
import Breadcrum from '../components/breadcrums/Breadcrum';

const termConditions = () => {
  return (
    <>
      <Header />
      <Breadcrum/>
      <TermsConditions />
      <Footer />
    </>
  )
}

export default termConditions