import React from "react"
import {
  Container,
  Icon,
  Item,
  Segment,
  Title,
  margin,
} from "semantic-styled-ui"
import Avatar from "react-avatar"
import styled from "styled-components"
import { graphql } from "gatsby"

const MAX_RATING = 5

const S = {} // styled NS

S.ItemContent = styled(Item.Content)`
  margin-left: 1em;
  font-size: 1.4em;
  ${margin("vertical")("0.5em")};
`

const ReviewsPage = ({ data: { page } }) => {
  return (
    <>
      <Segment vertical basic>
        <Container>
          <Title>{page.title}</Title>
          <Item.Group relaxed>
            {page.reviews.map((review) => (
              <Item>
                <Avatar size="10em" name={review.name} />
                <S.ItemContent verticalAlign="middle">
                  <Item.Header as="h2">{review.name}</Item.Header>
                  <Item.Description>{review.content.content}</Item.Description>
                  <Item.Extra>
                    {new Array(MAX_RATING).fill(
                      <Icon name="star" color="yellow" size="big" />,
                      0,
                      review.rating
                    )}
                  </Item.Extra>
                </S.ItemContent>
              </Item>
            ))}
          </Item.Group>
        </Container>
      </Segment>
    </>
  )
}

export const query = graphql`
  query {
    page: contentfulReviewsPage(
      contentful_id: { eq: "19ol6uzi04vASujftXIfi9" }
    ) {
      title
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
