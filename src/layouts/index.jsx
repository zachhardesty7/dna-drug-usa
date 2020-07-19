import React from "react"
import { Helmet } from "react-helmet"

import { Link, graphql, navigate, useStaticQuery } from "gatsby"

import {
  Flexbox,
  Footer,
  Icon,
  Navigation,
  getColor,
  getHoverColor,
} from "semantic-styled-ui"

import "fomantic-ui-css/semantic.css"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import GatsbyImage from "gatsby-image"
import { defaultColors, navLinksMap } from "../constants"

const GlobalStyle = createGlobalStyle``

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
          file {
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
              <Navigation.Logo as={Link} link="/" activeClassName="active">
                {/* <GatsbyImage fixed={contentfulNavigationBar.logo?.fixed} alt='logo' /> */}
                <S.NavLogo
                  src={contentfulNavigationBar.logo?.file.url}
                  alt="logo"
                />
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
          {children}
          <Footer inverted>
            <Footer.Content
              copyright="DNA"
              date={new Date("July 2020")}
              developerName="Zach Hardesty"
              developerLink="https://zachhardesty.com"
            />
            <Flexbox justify="end">
              <S.Link href="contact">Contact Us!</S.Link>
              <Icon.Group light justify="end">
                <Icon
                  name="facebook"
                  link="https://www.facebook.com/DNA-Drug-USA-111447063958381/"
                />
                <Icon
                  name="linkedin"
                  link="https://www.linkedin.com/in/horacio-v-5355231b1/"
                />
              </Icon.Group>
            </Flexbox>
          </Footer>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default LayoutTemplate