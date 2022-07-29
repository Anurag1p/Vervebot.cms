import React from 'react'
import './businessline.css'

const BusinessLine = (props) => {


    const { color, businessName } = props

    return (

        <div className="businessContainer">
            <p style={{ color: `${color}` }}>{businessName}</p>
            <div></div>
        </div>



    )
}

export default BusinessLine


