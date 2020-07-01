import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

const BlogIndex = ({ location, data: { site, allContentfulBlogPost } }) => (
  <Layout location={location}>
    <div style={{ background: '#fff' }}>
      <Helmet title={site.siteMetadata.title} />
      <div className={styles.hero}>Blog</div>
      <div className='wrapper'>
        <h2 className='section-headline'>Recent articles</h2>
        <ul className='article-list'>
          {allContentfulBlogPost.edges.map(({ node }) => (
            <li key={node.slug}>
              <ArticlePreview article={node} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
