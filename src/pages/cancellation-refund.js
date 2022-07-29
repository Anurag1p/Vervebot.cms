import React from 'react'
import Cancel from '../components/cancel/Cancel'
import Header from "../components/header/header"
import Footer from "../components/footer/Footer"
import Breadcrum from '../components/breadcrums/Breadcrum'
const CancelRefund = () => {
  return (
    <>
      <Header />
      <Breadcrum />
      <Cancel />
      <Footer />
    </>
  )
}

export default CancelRefund