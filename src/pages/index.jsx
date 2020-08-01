import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"

import { Blurbs, Hero, Icon } from "semantic-styled-ui"

const LandingPage = ({ data: { page } }) => (
  <>
    <Hero
      overlay="darker"
      baseline="bottom"
      size="relaxed"
      textAlign="right"
      images={[
        <GatsbyImage
          fluid={page.hero.background.fluid}
          alt={page.hero.background.title}
          key={page.hero.background.title}
        />,
      ]}
    >
      <Hero.Title>{page.hero.title}</Hero.Title>
      <Hero.Subtitle>{page.hero.subtitle.subtitle}</Hero.Subtitle>
      <Hero.Button>{page.hero.button}</Hero.Button>
    </Hero>
    <Blurbs title={page.aboutTitle}>
      {page.aboutSection.map((item) => (
        <Blurbs.Item header={item.title}>{item.content.content}</Blurbs.Item>
      ))}
    </Blurbs>
    <Blurbs title={page.purposesTitle}>
      {page.purposesSection.map((item) => (
        <Blurbs.Item
          header={item.title}
          icon={item.icon && <Icon name={item.icon} inverted size="bigger" />}
        />
      ))}
    </Blurbs>
  </>
)

export const query = graphql`
  query {
    page: contentfulLandingPage(
      contentful_id: { eq: "6eBwevw33PO4AdSGHXy9a5" }
    ) {
      hero {
        button
        background {
          title
          fluid(maxWidth: 3000) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        title
        subtitle {
          subtitle
        }
      }
      purposesTitle
      purposesSection {
        title
        icon
      }
      aboutTitle
      aboutSection {
        content {
          content
        }
        title
      }
    }
  }
`

export default LandingPage
