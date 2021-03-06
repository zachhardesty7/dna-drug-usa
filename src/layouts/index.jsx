import React from "react"
import { Helmet } from "react-helmet"

import { Link, graphql, useStaticQuery } from "gatsby"

import { Navigation } from "semantic-styled-ui"

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
h2,h3,h4,h5,h6, .ui.header, .ui.list .list > .item .header,
.ui.list > .item .header, .ui.steps .step .title, .ui.message .header, .ui.cards > .card > .content > .header,
.ui.card > .content > .header, .ui.items > .item > .content > .header, .ui.accordion .title:not(.ui), .ui.modal > .header, .ui.popup > .header, .ui.search > .results .result .title, .ui.search > .results > .message .header, .ui.category.search > .results .category > .name {
  font-family: 'Heebo', 'Times New Roman', 'Helvetica Neue', Arial, Helvetica, sans-serif !important;
  font-weight: 400;
}
body {
  font-size: 20px;
  line-height: 1.56em;
  font-family: 'Source Sans Pro', 'Times New Roman', 'Helvetica Neue', Arial, Helvetica, sans-serif !important;
  font-weight: 400;
}

.ui.button, .ui.text.container, .ui.input > input, .ui.form input:not([type]),
.ui.form input[type="date"],
.ui.form input[type="datetime-local"],
.ui.form input[type="email"],
.ui.form input[type="number"],
.ui.form input[type="password"],
.ui.form input[type="search"],
.ui.form input[type="tel"],
.ui.form input[type="time"],
.ui.form input[type="text"],
.ui.form input[type="file"],
.ui.form input[type="url"], .ui.menu, .ui.statistics .statistic > .value,
.ui.statistic > .value, .ui.statistics .statistic > .label,
.ui.statistic > .label  {
font-family: 'Source Sans Pro', 'Times New Roman', 'Helvetica Neue', Arial, Helvetica, sans-serif !important;
}

.ui.header {
  font-weight: 400;
}
.ui.message .header {
  font-weight: 500;
}

.ui.secondary.pointing.menu .active.item {
  font-weight: 600;
}

.ui.button {
  font-weight: 600;
}
`

/**
 * noto sans
 * lora
 * libre franklin
 * abel
 */

const S = {} // styled-components namespace

S.NavigationLogo = styled(Navigation.Logo)`
  @media only screen and (max-width: 1326px) {
    width: 100%;
    a {
      border-bottom: none;
    }
    img {
      margin: auto;
    }
  }
`

S.Navigation = styled(Navigation)`
  @media only screen and (max-width: 1326px) {
    justify-content: center;
  }
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
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={{ ...defaultColors }}>
      <div id="top" className="root">
        <Helmet
          defaultTitle="DNA & Drug USA"
          titleTemplate="%s — DNA & Drug USA"
          defer={false}
        >
          <meta charSet="utf-8" />
          <html lang="en" />
          <meta
            name="Description"
            content={
              "Progressive Web App to advertise the services of " +
              "DNA & Drug USA"
            }
          />
          <meta
            name="keywords"
            content="DNA Test, Drugs, Lab Work, Paternity Test, Maternity"
          />
          <meta name="author" content="Horatio Villarreal" />
          <meta itemProp="name" content="DNA & Drug USA" />
          <meta itemProp="url" content="https://dnadrugusa.com/" />
          {/* <meta itemProp='telephone' content='469.560.3010' /> */}
          <meta itemProp="email" content="tests@dnadrugusa.com" />
        </Helmet>

        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <GlobalStyle />

        <div>
          <S.Navigation fullWidth justify="start">
            <S.NavigationLogo forwardedAs={Link} link="/" logoSize="large">
              <img src={contentfulNavigationBar.logo?.svg.url} alt="logo" />
            </S.NavigationLogo>
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
          </S.Navigation>
          {/* nest in div to enable block display */}
          <div>{children}</div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default LayoutTemplate
