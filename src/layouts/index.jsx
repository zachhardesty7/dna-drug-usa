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
  font-size: 20px;
}
h1 {
  font-family: 'IBM Plex Sans', 'Times New Roman', 'Helvetica Neue', Arial, Helvetica, sans-serif !important;
  font-weight: 400;
}
h2,h3,h4,h5,h6 {
  font-family: 'Heebo', 'Times New Roman', 'Helvetica Neue', Arial, Helvetica, sans-serif !important;
  font-weight: 400;
}
body {
  font-size: 20px;
  line-height: 1.56em;
  font-family: 'Source Sans Pro', 'Times New Roman', 'Helvetica Neue', Arial, Helvetica, sans-serif !important;
  font-weight: 400;
}

.ui.header, .ui.message .header {
  font-weight: 500;
}
/* .ui.header, .ui.message .header, .ui.form .field > label {
  font-weight: 500;
}

.ui.form .field > label {
  font-weight: 600;
} */

/* a {
  color: unset !important;
} */

`

/**
 * noto sans
 * lora
 * libre franklin
 * abel
 */

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
      contentfulNavigationBar(contentful_id: { eq: "4XPXLwe7PTJBKRwJMY7dFR" }) {
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

        {/* <link
          href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        /> */}

        <link
          href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <GlobalStyle />

        <div>
          <Navigation>
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
