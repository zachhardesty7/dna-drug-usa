import React from 'react'
import { Helmet } from 'react-helmet'

import { Link, graphql, navigate, useStaticQuery } from 'gatsby'

import {
  Footer,
  Icon,
  IconGroup,
  Navigation,
} from 'semantic-styled-ui'

import 'semantic-ui-css/semantic.min.css'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import GatsbyImage from 'gatsby-image'
import { defaultColors } from '../constants'

const GlobalStyle = createGlobalStyle``

// styled-components namespace
const S = {}

S.NavLogo = styled.img`
  max-width: 12em;
`

const LayoutTemplate = ({ children }) => {
  const { contentfulNavigationBar } = useStaticQuery(graphql`
    {
      contentfulNavigationBar(contentful_id: {eq: "2e9EyDgavMDGf7BOpNvmSQ"}) {
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
  console.log('LayoutTemplate -> contentfulNavigationBar', contentfulNavigationBar)

  return (
    <ThemeProvider theme={{ ...defaultColors }}>
      <div id='top' className='root'>
        <Helmet
          defaultTitle='DNA Drug USA'
          titleTemplate='DNA Drug USA - %s'
        >
          <meta charSet='utf-8' />
          <html lang='en' />
          <meta
            name='Description'
            content={'Progressive Web App to advertise the services of ' +
            'DNA Drug USA and contact them on listings'}
          />
          {/* <meta name='keywords' content='Real Estate, Development, Construction, Property'/> */}
          <meta name='author' content='Horatio Villarreal' />
          <meta itemProp='name' content='DNA Drug USA' />
          {/* <meta itemProp='url' content='https://theconnectdoor.com/' /> */}
          {/* <meta itemProp='telephone' content='469.560.3010' /> */}
          {/* <meta itemProp='email' content='info@gulfcorpusa.com' /> */}
        </Helmet>

        <GlobalStyle />

        <div>
          <Navigation text>
            <Navigation.Left>
              <Navigation.Logo as={Link} link='/' activeClassName='active'>
                {/* <GatsbyImage fixed={contentfulNavigationBar.logo?.fixed} alt='logo' /> */}
                <S.NavLogo src={contentfulNavigationBar.logo?.file.url} alt='logo' />
              </Navigation.Logo>
            </Navigation.Left>
            <Navigation.Right>
              {contentfulNavigationBar.items.map((page) => (
                // last item is a new page link
                <Navigation.Item
                  key={page}
                  as={Link}
                  link={`/${page.toLowerCase()}`}
                  activeClassName='active'
                >
                  {page}
                </Navigation.Item>
              ))}
            </Navigation.Right>
          </Navigation>
          {children}
          <Footer
            inverted
            icons={(
              <IconGroup light justify='flex-end'>
                <Icon name='facebook' link='https://www.facebook.com/theconnectdoor/' />
                <Icon name='twitter' link='https://twitter.com/ConnectDoor/' />
                <Icon name='instagram' link='https://instagram.com/ConnectDoor/' />
                <Icon name='linkedin' link='https://www.linkedin.com/company/connect-door/' />
              </IconGroup>
            )}
            copyright='ConnectDoor'
            developerName='Zach Hardesty'
            developerLink='https://zachhardesty.com'
          />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default LayoutTemplate
