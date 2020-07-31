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

const data = {
  hero: "Contact Us for All Your DNA Needs",
  title: "Convenient Hours, Walk-ins Available",
  content:
    "Have comments, questions, and concerns about a DNA & Drug USA test or appointment? Our staff have dedicated themselves to providing the best experience for our customers and read every message we receive. We're here to help you.",
  phone: "(123) 456-7890",
  email: "tests@dnadrugusa.com",
  locations: {
    Texas: [
      "Amarillo",
      "Austin",
      "Brownsville",
      "Beaumont",
      "Corpus Christi",
      "Dallas",
      "Fort Worth",
      "El Paso",
      "Harlingen",
      "Houston",
      "Laredo",
      "McAllen",
      "Midland-Odessa",
      "San Antonio",
      "San Angelo",
      "Tyler",
      "Waco",
    ],
    Louisiana: [
      "Baton Rouge",
      "Lafayette",
      "Lake Charles",
      "Metairie",
      "New Orleans",
    ],
    "New Mexico": ["Albuquerque", "Santa Fe"],
    Arkansas: ["Little Rock"],
    Oklahoma: ["Norman", "Oklahoma City", "Stillwater", "Tulsa"],
  },
}

const S = {}

S.GridColumn = styled("div")`
  /* column-count: 3; */
  /* column-gap: 2.5em; */
`

S.GridRow = styled("div")`
  /* width: fit-content; */
  /* break-inside: avoid-column; */
  /* -webkit-column-break-inside: avoid; */
`

const ContactPage = () => {
  return (
    <>
      <Hero size="compact" baseline="center">
        <Hero.Title>{data.hero}</Hero.Title>
      </Hero>

      <Segment vertical basic>
        <Container>
          <Grid columns="equal">
            <Grid.Column>
              <Title>{data.title}</Title>
              {data.content}
              {`${data.phone} - ${data.email}`}
            </Grid.Column>
            <Grid.Column>
              {/* REVIEW: overkill? */}
              <Masonry
                columnCount={3}
                columnGutter={25}
                items={Object.entries(data.locations)}
                render={({ data: [state, cities] }) => (
                  <div>
                    <Header>{state}</Header>
                    {cities.map((city) => (
                      <li>{city}</li>
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

export default ContactPage
