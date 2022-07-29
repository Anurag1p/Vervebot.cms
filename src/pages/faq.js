import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/Footer'
import Haveidea from '../components/haveIdeacard/Haveidea'
import FaqAccordion from "../components/faq/FaqAccordion"
import Breadcrum from '../components/breadcrums/Breadcrum'


const faq = () => {
    return (
        <>
            <Header />
            <Breadcrum/>
            <FaqAccordion />
            <Haveidea />
            <Footer />
        </>
    )
}

export default faq