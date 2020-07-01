import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

const RootIndex = ({ location, data: { site, allContentfulBlogPost, allContentfulPerson } }) => (
  <Layout location={location}>
    <div style={{ background: '#fff' }}>
      <Helmet title={site.siteMetadata.title} />
      <Hero data={allContentfulPerson.edges[0].node} />
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

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
