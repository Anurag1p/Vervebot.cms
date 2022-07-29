import React from 'react'
import TrendingImg from "../../assets/images/trendingnow1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import "./card.css"



const Card = () => {
    return (
        <div className="card_column">
            <div className="card_area">
                <img className="card-img" src={TrendingImg} alt="card" />
                <div className="card-body">
                    <div className="trending-date">
                        <button>Technology</button>
                        <span><FontAwesomeIcon icon={faCalendar} /> March 29, 2022</span>
                    </div>
                    <div className="trending-title">
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, labore!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card