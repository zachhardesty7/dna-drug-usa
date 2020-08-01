import { graphql } from "gatsby"
import React from "react"
import { Blurbs, Container, Icon, Segment, Title } from "semantic-styled-ui"

const ProcessPage = ({ data: { page } }) => {
  return (
    <Segment vertical basic>
      <Container>
        <Title>{page.title}</Title>
        <Blurbs>
          {page.steps.map((item) => (
            <Blurbs.Item
              header={item.title}
              icon={
                item.icon && <Icon name={item.icon} inverted size="bigger" />
              }
            >
              {item.content.content}
            </Blurbs.Item>
          ))}
        </Blurbs>
      </Container>
    </Segment>
  )
}

export const query = graphql`
  query {
    page: contentfulProcessPage(
      contentful_id: { eq: "5yJSiqqZF8teTIBJQA5qy7" }
    ) {
      steps {
        icon
        title
        content {
          content
        }
      }
      title
    }
  }
`

export default ProcessPage
