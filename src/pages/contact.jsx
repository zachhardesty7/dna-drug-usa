import React from "react"
import {
  Container,
  Grid,
  Header,
  Hero,
  Segment,
  Title,
} from "semantic-styled-ui"
import styled from "styled-components"
import { Masonry } from "masonic"
import { graphql } from "gatsby"

const S = {}

const ContactPage = ({ data: { page } }) => {
  return (
    <>
      <Hero size="compact" baseline="center">
        <Hero.Title>{page.hero.title}</Hero.Title>
      </Hero>

      <Segment vertical basic>
        <Container>
          <Grid columns="equal">
            <Grid.Column>
              <Title>{page.title}</Title>
              <p>{page.content.content}</p>
              <p>{`${page.phone} - ${page.email}`}</p>
            </Grid.Column>
            <Grid.Column>
              {/* REVIEW: overkill? */}
              <Masonry
                columnCount={3}
                columnGutter={25}
                items={page.locations}
                tabIndex={null} // prevent focus box from appearing
                render={({ data: location }) => (
                  <div>
                    <Header>{location.title}</Header>
                    {location.places.map((place) => (
                      <li key={place}>{place}</li>
                    ))}
                  </div>
                )}
              />
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
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
