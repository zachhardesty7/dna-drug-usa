import React from "react"
import {
  Container,
  Divider,
  Grid,
  Header,
  Hero,
  Link,
  PageSegment,
  Statistic,
  margin,
  spacingMap,
} from "semantic-styled-ui"
import styled, { css } from "styled-components"
import { Masonry } from "masonic"
import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

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

const ContactPage = ({ data: { page } }) => {
  return (
    <>
      <S.Hero
        overlay="darkest"
        size="compact"
        baseline="center"
        images={[
          <GatsbyImage
            fluid={page.hero.background.fluid}
            alt={page.hero.background.title}
            key={page.hero.background.title}
          />,
        ]}
      >
        <Hero.Title>{page.hero.title}</Hero.Title>
      </S.Hero>

      <PageSegment vertical basic>
        <Container>
          <Grid columns="equal" relaxed="very">
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
                  <Statistic.Value>
                    <Link link={`mailto:${page.email}`}>{page.email}</Link>
                  </Statistic.Value>
                </S.Statistic>
              </div>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">Our Locations</Header>
              <Divider />
              {/* REVIEW: overkill? */}
              <Masonry
                columnCount={3}
                columnGutter={25}
                items={page.locations}
                tabIndex={null} // prevent focus box from appearing
                render={({ data: location }) => (
                  <div>
                    <Header
                      as="h3"
                      css={css`
                        margin-bottom: 0.25em;
                      `}
                    >
                      {location.title}
                    </Header>
                    {location.places.map((place) => (
                      <li
                        key={place}
                        css={css`
                          font-size: 0.9em;
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
        </Container>
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
