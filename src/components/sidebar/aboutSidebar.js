import React from 'react'
import './aboutsidebar.css'

const AboutSidebar = () => {
    return (
        <>
            <div className="row">
                <div className="category_sidebar_container">
                    <div className="cate_banner"><p>About us</p></div>
                </div>
            </div>

            <div className="row" style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
                <div className="">
                    <div className="sidebar_about_content">
                        <div className="">
<img width="80" height="80" src="https://wp.quomodosoft.com/binduz/wp-content/uploads/2021/03/user.jpg" alt="this" className="lazyloaded" data-ll-status="loaded" />
                        </div>
                        <div className="social_link_sidebar">
                            <h4 className="binduz-er-title">Miranda H. Halim</h4>
                            <span>Author</span>
                        </div>
                    </div>
                    <div className="sidebar_about_text">
                        <p>The functional aspect comes first in the work process because it’s the core of the object: What is its purpose? something else?</p>
                        <a href="https://wp.quomodosoft.com/binduz/blog/author/admin/">Connect With Me</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSidebar