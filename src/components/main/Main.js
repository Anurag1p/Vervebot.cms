import React from 'react';
import "./main.css";




const Main = (props) => {


    const { mainHeading} = props;

    return (

        <div className="container-fluid Main-container">
            <div className="container">
                <div className="bg-container">
                    <div className="row">
                        <div className="content-container">
                            <div className="col-md-6">
                                <span className="calender">
                                    Get the Best Website Development & Mobile Application Development Services In New Jersey
                                </span>
                                <h3 className='main_heading'>{mainHeading}</h3>
                                <button className="arrow-button">Learn more<span className="arrow"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main