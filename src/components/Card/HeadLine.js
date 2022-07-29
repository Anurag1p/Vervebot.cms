import React from 'react'
import './headline.css'

const HeadLine = (props) => {


    const { color, HealineName } = props

    return (

        <div className="headingContainer">
            <p style={{ color: `${color}` }}>{HealineName}</p>
            <div></div>
        </div>



    )
}

export default HeadLine