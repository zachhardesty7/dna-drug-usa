import { graphql } from "gatsby"
import React from "react"
import Avatar from "react-avatar"
import {
  Grid,
  Icon,
  Item,
  Message,
  PageSegment,
  Placeholder,
  Title,
  Transition,
  margin,
} from "semantic-styled-ui"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { SharedFooter } from "../components/SharedFooter"

const MAX_RATING = 5

const S = {} // styled NS

S.ItemContent = styled(Item.Content)`
  margin-left: 1em;
  font-size: 1.4em;
  ${margin("vertical")("0.5em")};
`

const SKELETON_ITEM = (i) => (
  <Grid.Column key={i}>
    <Item.Group relaxed>
      <Item
        css={`
          align-items: center;
        `}
      >
        <Avatar
          size="8em"
          name={"?a".repeat(Math.ceil(Math.random() * 19 + 1))}
        />
        <S.ItemContent verticalAlign="middle">
          <Placeholder>
            <Item.Header as="h2">
              <Placeholder.Header>
                <Placeholder.Line />
              </Placeholder.Header>
            </Item.Header>

            <Item.Description>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Item.Description>
          </Placeholder>
          <Item.Extra>
            {new Array(MAX_RATING).fill(null).map((_, j) => (
              // eslint-disable-next-line react/no-array-index-key
              <Icon name="star" color="grey" key={j} />
            ))}
          </Item.Extra>
        </S.ItemContent>
      </Item>
    </Item.Group>
  </Grid.Column>
)

const ReviewsPage = ({ data: { page } }) => {
  return (
    <>
      <PageSegment>
        <Helmet>
          <title>{page.title}</title>
        </Helmet>
        <>
          <Title>{page.title}</Title>
          {page.comingSoon && (
            <Transition animation="fade down" duration={1000} transitionOnMount>
              <Message warning compact size="large">
                <Message.Header as="h2">Coming soon!</Message.Header>
                <p>
                  Please check back later to hear from some of our customers.
                </p>
              </Message>
            </Transition>
          )}
          <Grid columns="2" widths="equal" doubling stackable relaxed>
            {page.comingSoon ? (
              <>{new Array(4).fill(null).map((_, i) => SKELETON_ITEM(i))}</>
            ) : (
              page?.reviews?.map?.((review) => (
                <Grid.Column key={review.name}>
                  <Item.Group>
                    <Item
                      css={`
                        align-items: center;
                      `}
                    >
                      <Avatar size="8em" name={review.name} />
                      <S.ItemContent verticalAlign="middle">
                        <Item.Header as="h2">{review.name}</Item.Header>
                        <Item.Description>
                          {review.content.content}
                        </Item.Description>
                        <Item.Extra>
                          {new Array(MAX_RATING).fill(null).map((_, i) => (
                            <Icon
                              name="star"
                              color={i < review.rating ? "yellow" : "grey"}
                              key={i} // eslint-disable-line react/no-array-index-key
                            />
                          ))}
                        </Item.Extra>
                      </S.ItemContent>
                    </Item>
                  </Item.Group>
                </Grid.Column>
              ))
            )}
          </Grid>
        </>
      </PageSegment>
      <SharedFooter />
    </>
  )
}

export const query = graphql`
  query {
    page: contentfulReviewsPage(
      contentful_id: { eq: "19ol6uzi04vASujftXIfi9" }
    ) {
      title
      comingSoon
      reviews {
        name
        rating
        content {
          content
        }
      }
    }
  }
`

export default ReviewsPage
