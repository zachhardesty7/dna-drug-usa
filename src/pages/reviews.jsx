import React from "react"
import {
  Container,
  Icon,
  Item,
  Rating,
  SUIIcon,
  Segment,
  Title,
  margin,
} from "semantic-styled-ui"
import Avatar from "react-avatar"
import styled from "styled-components"

const MAX_RATING = 5

const S = {} // styled NS

S.ItemContent = styled(Item.Content)`
  margin-left: 1em;
  font-size: 1.4em;
  ${margin("vertical")("0.5em")};
`

const data = {
  reviews: [
    {
      name: "John Smith",
      content: "What a lovely place to visit",
      rating: 4,
    },
  ],
}

const ReviewsPage = () => {
  return (
    <>
      <Segment vertical basic>
        <Container>
          <Title>Reviews</Title>
          <Item.Group relaxed>
            {data.reviews.map((review) => (
              <Item>
                <Avatar size="10em" name={review.name} />
                <S.ItemContent verticalAlign="middle">
                  <Item.Header as="h2">{review.name}</Item.Header>
                  <Item.Description>{review.content}</Item.Description>
                  <Item.Extra>
                    {new Array(MAX_RATING).fill(
                      <SUIIcon name="star" color="yellow" size="big" />,
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

export default ReviewsPage
