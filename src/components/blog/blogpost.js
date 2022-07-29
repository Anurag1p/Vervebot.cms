import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faEye, faComment, faHeart, faComments } from '@fortawesome/free-solid-svg-icons'
// import blogimage from '../../blogimages/WordPress-PHP.png'
import './blogpost.css'

const Blogpost = (props) => {

    const {BlogImage, BlogTitle, BlogContent, BlogAuthor,BlogSlug, BlogComment, BlogDate, BlogAltText, BlogCate , BlogCateLink} = props
    


    return (
        <> 
            {/* <pre>{JSON.stringify(BlogData, null, 4)}</pre> */}
            <div className='blogpost_container'>
                <img src={BlogImage} alt={BlogAltText} />
                <div className="blog_content">
                    <p><a className="post_date_button" href={BlogCateLink}>{BlogCate}</a> <FontAwesomeIcon className="icon_open_icon" icon={faCalendar} />&nbsp;{BlogDate}</p>
                    <h1>{BlogTitle}</h1>
                    <p>
                        <div dangerouslySetInnerHTML={{__html: BlogContent}}/>
                        <span>
                        <a href={BlogSlug} style={{ color: "skyblue" }}>Read More »</a>
                        </span>
                    </p>
                    
                    <div className="blog_reviews_main">

                        <div className="blog_reviews">
                            <span>By <span> <a className="blog-admin" >{BlogAuthor}</a> </span></span>
                        </div>

                        <ul>
                            {/* <li><FontAwesomeIcon className="icon_open_icon" icon={faEye} />&nbsp;{BlogView}</li> */}
                            {/* <li><FontAwesomeIcon className="icon_open_icon" icon={faHeart} />&nbsp;{BlogLike}</li> */}
                            <li><FontAwesomeIcon className="icon_open_icon" icon={faComment} />&nbsp;{BlogComment}</li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogpost