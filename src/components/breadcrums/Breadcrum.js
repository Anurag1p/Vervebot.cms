import React from 'react'
import "./breadcrum.css"
const Breadcrum = () => {
    return (
        <>

            <section className='breadcrumMainSection'>

                <nav>
                    <ol className="breadcrumb">
                        <li className='breadlist'><a className='breadcrumbAnchor' href="/">Home</a></li>
                        <li className='breadlist'><a className='breadcrumbAnchor' href="/about-us">About Us</a></li>
                        <li className='breadlist'><a className='breadcrumbAnchor' href="/services">Services</a></li>
                        <li className='breadlist'><a className='breadcrumbAnchor' href="/portfolio">Portfolio</a></li>
                        <li className='breadlist'><a className='breadcrumbAnchor' href="/pricing">Pricing</a></li>
                        <li className='breadlist'><a className='breadcrumbAnchor' href="/blog">Blog</a></li>
                        <li className='breadlist'><a className='breadcrumbAnchor' href="/contact">Contact</a></li>
                        <li className='breadlist'><a className='breadcrumbAnchor' href="/faq">FAQ</a></li>
                        <li className='breadlist'><a className='breadcrumbAnchor' href="/icms">ICMS</a></li>
                    </ol>
                </nav>
            </section>


        </>
    )
}

export default Breadcrum