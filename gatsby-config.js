// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
} // if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

if (!contentfulConfig.spaceId || !contentfulConfig.accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    siteUrl: `https://dnadrugusa.com`,
    title: "DNA & Drug USA",
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    "gatsby-plugin-layout",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "DNA & Drug USA",
        short_name: "DNA & Drug USA",
        icon: "src/images/icon.svg",
        start_url: "/",
        background_color: "#f3f4f5",
        theme_color: "#3b5998",
        display: "standalone",
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/icon-path*"],
        },
      },
    },
  ],
}
