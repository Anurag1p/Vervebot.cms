import React from 'react'
import "./category.css"
import Seo from "../../assets/images/seo.png";
import Branding from "../../assets/images/branding.jpg";
import Iot from "../../assets/images/iot.png";


const Category = () => {
    return (
        <div>
            <div className="row">
                <div className="category_sidebar_container">
                    <div className="cate_banner"><p>Category</p></div>
                </div>
            </div>

            <div className="row" style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
                <div className="category_sidebar">
                    <div className="bussiness">
                        <img src={Iot} alt='Bussiness' className="business-img" style={{width:"100%", height:"100%", }} />
                        <button className=' p-2'>IOT</button>
                    </div>
                    <div className="bussiness">
                        <img src={Seo} alt='Food & Health' className="business-img" style={{width:"100%", height:"100%", }} />
                        <button className=' p-2'>Digital Marketing</button>
                    </div>
                    <div className="bussiness text-center">
                        <img src={Branding} style={{width:"100%", height:"100%", }} alt='vedio' className="business-img" />

                        <button className='p-2'>Branding</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category