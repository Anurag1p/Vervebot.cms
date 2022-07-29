import React from 'react'
import TrendingImg from "../../assets/images/trendingnow1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import "./card_bus.css"



const Cardbus = () => {
    return (
        <div className="card_bus_column">
            <div className="card_bus_area">
                <img className="card-img" src={TrendingImg} alt="card" />
                <div className="card-body">
                    <div className="business-date">
                        <button>Technology</button>
                        <span><FontAwesomeIcon icon={faCalendar} /> March 29, 2022</span>
                    </div>
                    <div className="business-title">
                        <p> dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <div className="business-paragraph">
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, labore!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardbus