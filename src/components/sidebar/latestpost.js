import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import './latestpost.css'
import img1 from "../../assets/images/img1.jpg"

const cardData = [{
    image: img1,
    caption: "Lorem ipsum dolor "
},
{
    image: img1,
    caption: "Lorem ipsum dolor sit amet consectetur."
},
{
    image: img1,
    caption: "Lorem ipsum dolor sit amet consectetur."
},
{
    image: img1,
    caption: "Lorem ipsum dolor sit amet consectetur."
}
]


const Latestpost = () => {
    return (
        <>
            <div className="row">
                <div className="category_sidebar_container">
                    <div className="cate_banner"><p>Latest post</p></div>
                </div>
            </div>

            <div className="row" style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
                <div className='latestpost_box'>
                    {cardData.map((items) => (
                        <>

                            <div className="latestpost_content">
                                <img src={items.image} alt="img2" />
                                <div>
                                    <span><FontAwesomeIcon icon={faCalendar} />12/10/2020</span>
                                    <b>{items.caption}</b>
                                </div>
                            </div>
                            <div className='card_line'></div>

                        </>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Latestpost