import { Link as GatsbyLink, graphql } from "gatsby"
import React from "react"
import {
  Accordion,
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Label,
  Link,
  List,
  Message,
  PageSegment,
  Sticky,
  Title,
  getBackgroundColor,
  getColor,
  getHoverBackgroundColor,
  margin,
} from "semantic-styled-ui"

import styled, { css } from "styled-components"

const S = {}

S.Header = styled(Header)`
  ${getColor("primary")};
`

S.Button = styled(Button)`
  display: inline-flex;
  align-items: center;
  margin-right: 0;
  ${getColor("white")};
  ${getBackgroundColor("secondary")};
  transition: ease-in-out 50ms;

  ${margin("top")("0.5em")};

  ${getHoverBackgroundColor("primary")};
  &:hover {
    transition: ease-in-out 100ms;
  }
`

const ServicesPage = ({ data: { page } }) => {
  const [expandedService, setExpandedService] = React.useState()
  return (
    <PageSegment>
      <Container>
        <Title>{page.title}</Title>
        <Grid>
          <Grid.Column width="10">
            <Accordion styled fluid>
              {page.services.map((service, i) => {
                const costs = service.costs.map((cost) => cost.cost)
                const min = Math.min(...costs).toLocaleString()
                const max = Math.max(...costs).toLocaleString()

                return (
                  <React.Fragment key={service.type}>
                    <Accordion.Title
                      active={expandedService === i}
                      index={i}
                      onClick={() =>
                        expandedService === i
                          ? setExpandedService(null)
                          : setExpandedService(i)
                      }
                    >
                      <Grid columns={2}>
                        <Grid.Column>
                          <Icon name="dropdown" />
                          {service.type}
                        </Grid.Column>
                        <Grid.Column textAlign="right">
                          ${min !== max ? `${min}-$${max}` : `${max}`}
                        </Grid.Column>
                      </Grid>
                    </Accordion.Title>
                    <Accordion.Content active={expandedService === i}>
                      <p>{service.description?.description}</p>
                      <List bulleted>
                        {service.costs?.map(({ cost, type }) => (
                          <List.Item>
                            {type} - <b>${cost.toLocaleString()}</b>
                          </List.Item>
                        ))}
                      </List>
                      {service.samples && (
                        <>
                          <Divider horizontal>Samples Required</Divider>
                          <Label.Group>
                            {service.samples?.map((sample) => (
                              <Label horizontal key={sample}>
                                {sample}
                              </Label>
                            ))}
                          </Label.Group>
                        </>
                      )}
                    </Accordion.Content>
                  </React.Fragment>
                )
              })}
            </Accordion>
          </Grid.Column>
          <Grid.Column width="6">
            <Sticky bottomOffset={25} offset={25}>
              <Message size="large" floating>
                <S.Header as="h2">Schedule an Appointment Now!</S.Header>
                <Message.Content as="p">
                  Fill out some quick information amd let us know what tests
                  you're interested in and we'll get an appointment set up for
                  you as soon as possible.
                </Message.Content>
                {/* NOTE: `link` and `as` could simply be applied to the `Button` */}
                <Link link="/schedule" wrap as={GatsbyLink}>
                  <S.Button secondary icon labelPosition="right">
                    Schedule
                    <Icon name="right arrow" />
                  </S.Button>
                </Link>
              </Message>
            </Sticky>
          </Grid.Column>
        </Grid>
      </Container>
    </PageSegment>
  )
}

export const query = graphql`
  query {
    page: contentfulServicesPage(
      contentful_id: { eq: "4JuUAtdJ8zq0VxXhvjdgIw" }
    ) {
      title
      services {
        type
        samples
        description {
          description
        }
        costs {
          cost
          type
        }
      }
    }
  }
`

export default ServicesPage
