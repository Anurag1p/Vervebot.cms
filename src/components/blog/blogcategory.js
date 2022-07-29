import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCalendar } from '@fortawesome/free-solid-svg-icons'
import './blogcategory.css'

const Blogcategory = (props) => {

    const {BlogcategoryData , name , filtered} = props;

    const [postButton, setpostButton] = useState(1)

    const mostPopular = () => {
        setpostButton(1)
    }

    const mostRecent = () => {
        setpostButton(2)
    }

  

    return (
        <div className='Blogcategory_container'>
            <div className="searh_box">
                <input value={name} onChange={filtered} type="search" placeholder="Search here" />
                <button  type="button" aria-label="Save" ><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <span>
                <button onClick={mostPopular} className={postButton === 1 ? "focused_text" : ""}>Most Popular</button>
                <button onClick={mostRecent}  className={postButton === 2 ? "focused_text" : ""}>Most Recents</button>
            </span>
            {postButton === 1 ? <div className='popular_box'>
                {BlogcategoryData.map((items) => (
                    <>

                        <div className="popular_content">
                            <img src={items.featuredImage.node.sourceUrl} alt={items.title} />
                            <div>
                                <span><FontAwesomeIcon icon={faCalendar} />&nbsp;{items.dateGmt}</span>
                                <b>{items.title}</b>
                            </div>
                        </div>
                        <div className='card_line'></div>

                    </>

                ))}
            </div>
                : postButton === 2 ?
                    <div className='popular_box'>
                        {BlogcategoryData.reverse().map((items) => (
                            <>
                                <div className="popular_content">
                                    <img src={items.featuredImage.node.sourceUrl} alt={items.title} />
                                    <div>
                                        <span><FontAwesomeIcon icon={faCalendar} />&nbsp;{items.dateGmt}</span>
                                        <b>{items.title}</b>
                                    </div>
                                </div>
                                <div className='card_line'></div>

                            </>

                        ))}
                    </div> : null}
        </div>
    )
}

export default Blogcategory