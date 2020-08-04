import { Link as GatsbyLink, graphql } from "gatsby"
import React from "react"
import {
  Accordion,
  Blurbs,
  Button,
  Container,
  Grid,
  Header,
  Icon,
  IconLink,
  Link,
  Message,
  Rail,
  Ref,
  Segment,
  Sticky,
  Title,
} from "semantic-styled-ui"

const ServicesPage = ({ data: { page } }) => {
  const [expandedService, setExpandedService] = React.useState()
  return (
    <Segment basic vertical>
      <Container>
        <Title>{page.title}</Title>
        <Grid>
          <Grid.Column width="10">
            <Accordion styled fluid>
              {page.services.map((service, i) => (
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
                    <Icon name="dropdown" />
                    {service.type}
                  </Accordion.Title>
                  <Accordion.Content active={expandedService === i}>
                    <p>{service.description?.description}</p>
                  </Accordion.Content>
                </React.Fragment>
              ))}
            </Accordion>
          </Grid.Column>
          <Grid.Column width="6">
            <Sticky bottomOffset={25} offset={25}>
              <Message info size="large">
                <Header as="h2">Schedule an Appointment Now!</Header>
                <Message.Content as="p">
                  Fill out some quick information amd let us know what tests
                  you're interested in and we'll get an appointment set up for
                  you as soon as possible.
                </Message.Content>
                {/* NOTE: `link` and `as` could simply be applied to the `Button` */}
                <Link link="/consultation" as={GatsbyLink}>
                  <Button icon labelPosition="right">
                    Schedule
                    <Icon name="right arrow" />
                  </Button>
                  <Button icon labelPosition="right">
                    Schedule
                    <Icon name="right arrow" />
                  </Button>
                </Link>
              </Message>
            </Sticky>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
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
