import React from "react"
import { Container, Item, Rating, Segment } from "semantic-styled-ui"
import Avatar from "react-avatar"

const data = {
  reviews: [
    {
      name: "John Smith",
      content: "What a lovely place to visit",
    },
  ],
}

const ReviewsPage = ({}) => {
  return (
    <Segment vertical basic>
      <Container>
        <Item.Group>
          {data.reviews.map((review) => (
            <Item>
              <Avatar name={review.name} />
              <Item.Content verticalAlign="middle">
                <Item.Header>
                  {review.name}
                  <Rating defaultRating={3} maxRating={5} disabled />
                </Item.Header>
                <Item.Description>{review.content}</Item.Description>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Container>
    </Segment>
  )
}

export default ReviewsPage
