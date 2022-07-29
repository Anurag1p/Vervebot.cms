import React from 'react'
import maharaja from "../../assets/images/maharaja-logo.png"
import Badshah from "../../assets/images/badshah-logo.png"
import Hema from "../../assets/images/hema-logo.png"
import HouseSmile from "../../assets/images/housesmile-logo.png"


const ClientPagination = () => {
   
    return (
        <>
            <div id="sequence" className="seq"  >

                <div className="vcenter">
                    <img data-seq className="feature" src={Badshah} alt="Badshah" />
                </div>

                <div className="vcenter">
                    <img data-seq className="feature" src={Hema} alt="feature" />
                </div>

                <div className="vcenter">
                    <img data-seq className="feature" src={maharaja} alt="maharaja" />

                </div>

                <div className="vcenter">
                    <img data-seq className="feature" src={HouseSmile} alt="HouseSmile" />
                </div>


            </div>
        


        </>
    )
}

export default ClientPagination

