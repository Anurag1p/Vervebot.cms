import React from 'react'
import BusinessLine from './businessLine'
import Cardbus from './Cardbus'
import './business.css'
import AboutSidebar from '../sidebar/aboutSidebar'
import Latestpost from '../sidebar/latestpost'




const Business = () => {
    return (
        <div>

            <div className="container">
                <div className="row padding_top_bottom">
                    <div className="col-lg-9">
                        <BusinessLine color="#000" businessName="Portfolio" />
                        <div className="card_bus_row">
                            <Cardbus />
                            <Cardbus />
                            <Cardbus />
                            <Cardbus />
                            <Cardbus />
                            <Cardbus />
                        </div>
                    </div>
                    <div className="col-lg-3">
                       <AboutSidebar />
                       <br />
                       <Latestpost />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business