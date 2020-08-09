import React from "react"
import {
  Container,
  Dimmer,
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
import Avatar from "react-avatar"
import styled from "styled-components"
import { graphql } from "gatsby"

const MAX_RATING = 5
const COMING_SOON = true
const SAMPLE_DATA = [
  {
    name: "??",
    rating: 4,
    content: {
      content: "What a lovely place to visit",
    },
  },
]

const S = {} // styled NS

S.ItemContent = styled(Item.Content)`
  margin-left: 1em;
  font-size: 1.4em;
  ${margin("vertical")("0.5em")};
`

const SKELETON_ITEM = () => (
  <Grid.Column>
    <Item.Group relaxed>
      <Item>
        <Avatar
          size="10em"
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
            {new Array(MAX_RATING).fill(null).map((_, i) => (
              <Icon name="star" color="grey" size="large" />
            ))}
          </Item.Extra>
        </S.ItemContent>
      </Item>
    </Item.Group>
  </Grid.Column>
)

const ReviewsPage = ({ data: { page } }) => {
  console.log("page", page)
  // eslint-disable-next-line no-param-reassign
  if (COMING_SOON) page.reviews = SAMPLE_DATA
  const [ready, setReady] = React.useState(false)
  React.useLayoutEffect(() => {
    setReady(true)
  }, [])
  return (
    <PageSegment>
      <Container>
        <Title>{page.title}</Title>
        {COMING_SOON && ready && (
          <Transition animation="fade down" duration={1000} transitionOnMount>
            <Message warning compact size="big">
              <Message.Header>Coming soon!</Message.Header>
              <p>Please check back later to hear from some of our customers.</p>
            </Message>
          </Transition>
        )}
        <Grid columns="2" widths="equal" relaxed>
          {COMING_SOON && ready ? (
            <>{new Array(4).fill(null).map(() => SKELETON_ITEM())}</>
          ) : (
            page?.reviews?.map?.((review) => (
              <Grid.Column>
                <Item key={review.name}>
                  <Avatar size="10em" name={review.name} />
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
                          size="large"
                        />
                      ))}
                    </Item.Extra>
                  </S.ItemContent>
                </Item>
              </Grid.Column>
            ))
          )}
        </Grid>
      </Container>
    </PageSegment>
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
