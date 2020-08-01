import { graphql } from "gatsby"
import React from "react"
import { Blurbs, Container, Icon, Segment, Title } from "semantic-styled-ui"

const ProcessPage = ({ data: { page } }) => {
  return (
    <Blurbs padded="bottom" title={page.title}>
      {page.steps.map((item) => (
        <Blurbs.Item
          header={item.title}
          icon={item.icon && <Icon name={item.icon} inverted size="bigger" />}
        >
          {item.content.content}
        </Blurbs.Item>
      ))}
    </Blurbs>
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
