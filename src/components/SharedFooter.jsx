import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import {
  Flexbox,
  Footer,
  IconLink,
  getColor,
  getHoverColor,
  margin,
} from "semantic-styled-ui"

const S = {}

S.Link = styled.a`
  ${margin("horizontal")("0.5em")};
  text-decoration: underline;
  ${getColor("light")};
  ${getHoverColor("white")};
`

export const SharedFooter = () => (
  <Footer inverted>
    <Footer.Content
      copyright="DNA & Drug USA"
      date="July 2020"
      developerName="Zach Hardesty"
      developerLink="https://zachhardesty.com"
    />
    <Flexbox>
      <S.Link as={Link} $light to="/contact">
        Contact Us!
      </S.Link>
      <IconLink.Group light justify="end">
        <IconLink
          name="facebook"
          link="https://www.facebook.com/DNA-Drug-USA-111447063958381/"
        />
        <IconLink
          name="linkedin"
          link="https://www.linkedin.com/in/horacio-v-5355231b1/"
        />
      </IconLink.Group>
    </Flexbox>
  </Footer>
)
