import { CheckOutlined } from '@ant-design/icons'
import React from 'react';
import "./pricing.css"

const PricingCard = (props) => {
    const { CardTitle, subheading, price, CardDetail } = props;
    return (
        <>
            <div className="col">
               
                    <div className="MainCard ">
                        <h2 className="cardTitle">{CardTitle}</h2>
                        <h3 className='CardSubheading'>{subheading}</h3>
                        <h1 className='Price'><b>{price}</b></h1>
                        {CardDetail.map((details) => (
                            <div className="IconBox">
                                <CheckOutlined style={{ fontSize: '25px', color: '#000' }} />
                                <span className='iconTitle'>{details.IconTitle}</span>
                            </div>
                        ))}


                    </div>
               
            </div>

        </>
    )
}

export default PricingCard