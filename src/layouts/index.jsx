import React from "react"
import { Helmet } from "react-helmet"

import { Link, graphql, useStaticQuery } from "gatsby"

import {
  Flexbox,
  Footer,
  IconLink,
  Navigation,
  getColor,
  getHoverColor,
} from "semantic-styled-ui"

import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { defaultColors, navLinksMap } from "../constants"
import "fomantic-ui-css/semantic.css"

const GlobalStyle = createGlobalStyle`
/* typography theme: https://github.com/KyleAMathews/typography.js/tree/master/packages/typography-theme-fairy-gates */
html {
  font-size: 18px;
}
body {
  font-size: 18px;
  line-height: 1.45em;
  font-family: 'Quattrocento Sans', 'Times New Roman', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 400;
}
`

// styled-components namespace
const S = {}

S.NavLogo = styled.img`
  max-width: 12em;
`

S.Link = styled.a`
  margin-left: 1em;
  margin-right: 1em;
  text-decoration: underline;
  ${getColor("light")};
  ${getHoverColor("white")};
`

const LayoutTemplate = ({ children }) => {
  const { contentfulNavigationBar } = useStaticQuery(graphql`
    {
      contentfulNavigationBar(contentful_id: { eq: "2e9EyDgavMDGf7BOpNvmSQ" }) {
        items
        logo {
          title
          svg: file {
            url
            fileName
            contentType
          }
          # fixed(width: 150) {
          #   ...GatsbyContentfulFixed_tracedSVG
          # }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={{ ...defaultColors }}>
      <div id="top" className="root">
        <Helmet defaultTitle="DNA Drug USA" titleTemplate="DNA Drug USA - %s">
          <meta charSet="utf-8" />
          <html lang="en" />
          <meta
            name="Description"
            content={
              "Progressive Web App to advertise the services of " +
              "DNA Drug USA and contact them on listings"
            }
          />
          {/* <meta name='keywords' content='Real Estate, Development, Construction, Property'/> */}
          <meta name="author" content="Horatio Villarreal" />
          <meta itemProp="name" content="DNA Drug USA" />
          {/* <meta itemProp='url' content='https://theconnectdoor.com/' /> */}
          {/* <meta itemProp='telephone' content='469.560.3010' /> */}
          {/* <meta itemProp='email' content='info@gulfcorpusa.com' /> */}
        </Helmet>

        <GlobalStyle />

        <div>
          <Navigation text>
            <Navigation.Left>
              <Navigation.Logo as={Link} link="/" logoSize="large">
                {/* <GatsbyImage
                  fixed={contentfulNavigationBar.logo?.fixed}
                  alt="logo"
                /> */}
                <img src={contentfulNavigationBar.logo?.svg.url} alt="logo" />
              </Navigation.Logo>
            </Navigation.Left>
            <Navigation.Right>
              {contentfulNavigationBar.items.map((page) => (
                <Navigation.Item
                  key={navLinksMap[page]}
                  as={Link}
                  link={`/${navLinksMap[page]}`}
                  activeClassName="active"
                >
                  {page}
                </Navigation.Item>
              ))}
            </Navigation.Right>
          </Navigation>
          {/* nest in div to enable block display */}
          <div>{children}</div>
          <Footer inverted>
            <Footer.Content
              copyright="DNA & Drug USA"
              date="July 2020"
              developerName="Zach Hardesty"
              developerLink="https://zachhardesty.com"
            />
            <Flexbox justify="end">
              <S.Link as={Link} light to="/contact">
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
        </div>
      </div>
    </ThemeProvider>
  )
}

export default LayoutTemplate
