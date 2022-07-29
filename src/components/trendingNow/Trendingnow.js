import React from 'react'
import "./trendingnow.css"
import Card from "../Card/Card"
import HeadLine from '../Card/HeadLine'


const Trendingnow = () => {
    return (
        <>
            <div className="trendingnow-bg">
                <div className="container">
                    <HeadLine color="#15445a" HealineName="Tranding Now" />
                    <div className="card_row">
                                <Card />
                                <Card />
                                <Card />
                                <Card />    
                    </div>
                </div>
            </div>
        </>

    )
}

export default Trendingnow