import { Link as GatsbyLink, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"
import { Blurbs, Hero, Icon, Link } from "semantic-styled-ui"
import { defaultColors } from "../constants"

const LandingPage = ({ data: { page } }) => (
  <>
    <Hero
      overlay="darker"
      baseline="bottom"
      size="relaxed"
      justify="end"
      boxed
      images={[
        <GatsbyImage
          fluid={page.hero.background.fluid}
          alt={page.hero.background.title}
          key={page.hero.background.title}
        />,
      ]}
    >
      <Hero.Title secondary>{page.hero.title}</Hero.Title>
      <Hero.Subtitle as="h3">{page.hero.subtitle.subtitle}</Hero.Subtitle>
      <Link link="/schedule" as={GatsbyLink}>
        <Hero.Button
          secondary
          color={defaultColors.primary}
          colorHover={defaultColors.secondary}
        >
          {page.hero.button}
        </Hero.Button>
      </Link>
    </Hero>
    <Blurbs title={page.aboutTitle}>
      {page.aboutSection.map((item) => (
        <Blurbs.Item key={item.title} header={item.title}>
          {item.content.content}
        </Blurbs.Item>
      ))}
    </Blurbs>
    <Blurbs title={page.purposesTitle}>
      {page.purposesSection.map((item) => (
        <Blurbs.Item
          key={item.title}
          header={item.title}
          icon={item.icon && <Icon name={item.icon} size="huge" />}
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
