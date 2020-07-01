import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

const BlogPostTemplate = ({ location, data: { contentfulBlogPost, site } }) => (
  <Layout location={location}>
    <div style={{ background: '#fff' }}>
      <Helmet title={`${contentfulBlogPost.title} | ${site.siteMetadata.title}`} />
      <div className={heroStyles.hero}>
        <Img
          className={heroStyles.heroImage}
          alt={contentfulBlogPost.title}
          fluid={contentfulBlogPost.heroImage.fluid}
        />
      </div>
      <div className='wrapper'>
        <h1 className='section-headline'>{contentfulBlogPost.title}</h1>
        <p
          style={{
            display: 'block',
          }}
        >
          {contentfulBlogPost.publishDate}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: contentfulBlogPost.body.childMarkdownRemark.html,
          }}
        />
      </div>
    </div>
  </Layout>
)

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
