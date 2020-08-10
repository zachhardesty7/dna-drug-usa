import { graphql } from "gatsby"
import React from "react"
import { Blurbs, Container, Icon, PageSegment, Title } from "semantic-styled-ui"

const ProcessPage = ({ data: { page } }) => {
  return (
    <PageSegment>
      <Container>
        <Title>{page.title}</Title>
        <Blurbs vertical padded="bottom">
          {page.steps.map((item) => (
            <Blurbs.Item
              key={item.title}
              header={item.title}
              icon={item.icon && <Icon name={item.icon} size="huge" />}
            >
              {item.content.content}
            </Blurbs.Item>
          ))}
        </Blurbs>
      </Container>
    </PageSegment>
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
