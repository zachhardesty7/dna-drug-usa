import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import { Masonry } from "masonic"
import React from "react"
import {
  Divider,
  Grid,
  Header,
  Hero,
  Link,
  PageSegment,
  Statistic,
  margin,
  media,
  spacingMap,
} from "semantic-styled-ui"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const S = {}
S.Hero = styled(Hero)`
  background-color: #749ad3;
  background-attachment: fixed;
  background-size: cover;
`

S.Statistic = styled(Statistic)`
  margin-left: 0;
`

S.StatisticLabel = styled(Statistic.Label)`
  ${margin("bottom")("0")};
  text-align: left;
`

S.StatisticValue = styled(Statistic.Value)`
  @media ${media.portable} {
    font-size: 1.1em;
  }
`

const ContactPage = ({ data: { page } }) => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <S.Hero
        overlay="darkest"
        size="compact"
        baseline="center"
        images={[
          <GatsbyImage
            imgStyle={{ objectPosition: "top" }}
            fluid={page.hero.background.fluid}
            alt={page.hero.background.title}
            key={page.hero.background.title}
          />,
        ]}
      >
        <Hero.Title>{page.hero.title}</Hero.Title>
      </S.Hero>

      <PageSegment vertical basic>
        <>
          <Grid columns="equal" relaxed="very" stackable doubling>
            <Grid.Column>
              <Header as="h2">{page.title}</Header>
              <p>{page.content.content}</p>
              <div
                /* TODO: make cooler easier to type version using properties */
                css={`
                  ${margin("top")(spacingMap.base)};
                `}
              >
                <S.Statistic size="mini">
                  <S.StatisticLabel forwardedAs="h3">phone</S.StatisticLabel>
                  <Statistic.Value>{page.phone}</Statistic.Value>
                </S.Statistic>
                <S.Statistic size="mini">
                  <S.StatisticLabel forwardedAs="h3">email</S.StatisticLabel>
                  <S.StatisticValue>
                    <Link link={`mailto:${page.email}`}>{page.email}</Link>
                  </S.StatisticValue>
                </S.Statistic>
              </div>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">Our Locations</Header>
              <Divider />
              {/* REVIEW: overkill? */}
              <Masonry
                columnWidth={
                  Math.max(
                    ...page.locations
                      .map((location) => location.places)
                      .flatMap((place) => place.length)
                  ) *
                    2.55 +
                  80
                }
                columnGutter={25}
                items={page.locations}
                tabIndex={null} // prevent focus outline from appearing
                render={({ data: location }) => (
                  <div>
                    <Header
                      as="h3"
                      css={`
                        margin-bottom: 0.25em;
                      `}
                    >
                      {location.title}
                    </Header>
                    {location.places.map((place) => (
                      <li
                        key={place}
                        css={`
                          font-size: 0.9em;
                          line-height: 1.3em;
                          ${margin("bottom")("0.5em")};
                        `}
                      >
                        {place}
                      </li>
                    ))}
                  </div>
                )}
              />
            </Grid.Column>
          </Grid>
        </>
      </PageSegment>
    </>
  )
}

export const query = graphql`
  query {
    page: contentfulContactPage(
      contentful_id: { eq: "56eqqhrp28yy4SeVftbzZ2" }
    ) {
      phone
      email
      content {
        content
      }
      hero {
        title
        background {
          title
          fluid(maxWidth: 3000) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      title
      locations {
        places
        title
      }
    }
  }
`

export default ContactPage
