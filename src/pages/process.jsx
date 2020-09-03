import { graphql } from "gatsby"
import React from "react"
import { Blurbs, Icon, PageSegment, Title } from "semantic-styled-ui"
import { Helmet } from "react-helmet"
import { SharedFooter } from "../components/SharedFooter"

const ProcessPage = ({ data: { page } }) => {
  return (
    <>
      <PageSegment>
        <Helmet>
          <title>{page.title}</title>
        </Helmet>
        <>
          <Title>{page.title}</Title>
          <Blurbs vertical padded={false}>
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
        </>
      </PageSegment>
      <SharedFooter />
    </>
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
