import { Link as GatsbyLink, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"
import {
  Blurbs,
  Divider,
  Hero,
  Icon,
  Link,
  PageSegment,
  Title,
} from "semantic-styled-ui"
import { defaultColors } from "../constants"

const LandingPage = ({ data: { page } }) => (
  <>
    <Hero
      overlay="darker"
      baseline="bottom"
      justify="end"
      boxed
      // size="relaxed"
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
    <main>
      <PageSegment>
        <Title as="h2">{page.aboutTitle}</Title>
        <Blurbs>
          {page.aboutSection.map((item) => (
            <Blurbs.Item
              as="h3"
              key={item.title}
              header={item.title}
              icon={item.icon && <Icon name={item.icon} size="huge" />}
            >
              {item.content.content}
            </Blurbs.Item>
          ))}
        </Blurbs>
      </PageSegment>
      <Divider />
      <PageSegment>
        <Title as="h2">{page.purposesTitle}</Title>
        <Blurbs>
          {page.purposesSection.map((item) => (
            <Blurbs.Item
              as="h3"
              key={item.title}
              header={item.title}
              icon={item.icon && <Icon name={item.icon} size="huge" />}
            />
          ))}
        </Blurbs>
      </PageSegment>
    </main>
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
            ...GatsbyContentfulFluid_withWebp
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
        icon
        content {
          content
        }
        title
      }
    }
  }
`

export default LandingPage
