import React from 'react'
import Haveidea from '../components/haveIdeacard/Haveidea';
import Icmscard from '../components/icms/Icmscard'
import teamStruc_img from "../assets/images/customer.jpeg";
import Footer from '../components/footer/Footer';
import Header from '../components/header/header';
import Breadcrum from '../components/breadcrums/Breadcrum';
import ClientPagination from '../components/icms/ClientPagination';



const icms = () => {
    return (
        <>
            <Header />
            < Breadcrum />
            <div className="container-fluid">
                <div className="mainbgicms ">

                    <div className="container ">
                        <div className="icmsbg">
                            <h1 className='icmsMainHeading'>ICMS</h1><br />
                            <h2 className="howworks animationIcmsHeding">How It Works</h2>
                            <div className="youTubevideo">
                                <iframe width="100%" height="500" src="https://www.youtube.com/embed/xo6327lBB4E" title="YouTube video player"
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                            </div>
                            <div className="discountCard">
                                <h1 className="discountTitle">
                                    Contact Now and Get Instant Discount
                                </h1>
                                <h2 className="discountPrice" >Price: $18000</h2>
                            </div>
                            <div className="cardsCrown">
                                <Icmscard />
                            </div>
                            <div className="teamStructure">
                                <img className="teamStructureImg" src={teamStruc_img} alt="" />
                            </div>
                            <div className="client">
                                <h2 className="clientTitle">Our Client</h2>
                                <ClientPagination />
                            </div>
                            <div className="havidea">
                                <Haveidea />
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default icms