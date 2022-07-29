import React from 'react'
import { useState } from 'react'
import Blogpost from './blogpost'
import './blog.css'
import Blogcategory from './blogcategory'

const Blogs = (props) => {

    //gatsby data 
    const { BlogData } = props
    const allData = BlogData.allWpPost.nodes
    console.log("allData",BlogData);

    // const featuredImage = allData.map((post) => post.featuredImage).map((post) => post.node).map((post) => post.sourceUrl)
    const [name, setName] = useState('');
    const [foundUsers, setFoundUsers] = useState(allData);
    
    ///search
    const filtered = (e) => {
        const keyword = e.target.value;
    
        if (keyword !== '') {
          const results = allData.filter((post) => {
            return post.title.toLowerCase().includes(keyword.toLowerCase());
            // Use the toLowerCase() method to make it case-insensitive
          });
          setFoundUsers(results);
        } else {
          setFoundUsers(allData);
        }
    
        setName(keyword);
      };


    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 border-bottom">
                       {foundUsers && foundUsers.length > 0 ? (
                       <>
                         {foundUsers.map((items) => (
                            <Blogpost
                                BlogImage={items.featuredImage.node.sourceUrl}
                                BlogAltText={items.featuredImage.node.alttext}
                                BlogTitle={items.title}
                                BlogContent={items.content}
                                BlogAuthor={items.author.node.name}
                                BlogSlug={items.title}
                                BlogComment={items.commentCount}
                                BlogDate={items.dateGmt}
                                BlogCate={items.categories.nodes.map((nodeitem) => nodeitem.name)}
                                BlogCateLink={items.categories.nodes.map((nodeitem) => nodeitem.link)}
                            />
                            ))}
                        </>
                        ) : (
                          <>
                            {allData.map((items) => (
                                <Blogpost
                                    BlogImage={items.featuredImage.node.sourceUrl}
                                    BlogAltText={items.featuredImage.node.alttext}
                                    BlogTitle={items.title}
                                    BlogContent={items.content}
                                    BlogAuthor={items.author.node.name}
                                    BlogSlug={items.title}
                                    BlogComment={items.commentCount}
                                    BlogDate={items.dateGmt}
                                    BlogCate={items.categories.nodes.map((nodeitem) => nodeitem.name)}
                                    BlogCateLink={items.categories.nodes.map((nodeitem) => nodeitem.link)}
                                />
                            ))}
                          </>
                        )
                            }
                    </div>
                
 
                <div className="col-lg-3">
                    <Blogcategory 
                     BlogcategoryData = {allData}
                     name={name}
                     filtered={filtered}
                     foundUsers={foundUsers}
                    />
                </div>
                </div>

            </div>
        </div>
    )
}

export default Blogs