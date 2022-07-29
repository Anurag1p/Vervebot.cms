import React from 'react'
import { graphql } from "gatsby"
import Blogs from '../components/blog/blog'
import Header from '../components/header/header'
import Footer from "../components/footer/Footer";
import Breadcrum from '../components/breadcrums/Breadcrum';

const Blog = ({ data }) => {
  return (
    <>
      <Header />
      <Breadcrum />
      <Blogs BlogData={data} />
      <Footer />
    </>
  )
}

export default Blog

export const query = graphql`
  {
    allWpPost {
      nodes {
        commentCount
        date
        dateGmt
        title
        uri
        slug
        link
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
          }
        }
        content
        categories {
          nodes {
            name
            link
          }
        }
      }
    }
  }
`