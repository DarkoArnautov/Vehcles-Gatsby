require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided'
  )
}
module.exports = {
  siteMetadata: {
    title: `Vehcles`,
    description: `Vehcles for Contentful and Gatsby`,
    author: `DarkoArnautov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vehcles`,
        short_name: `VG`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig
    },
    '@contentful/gatsby-transformer-contentful-richtext'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // gatsby-plugin-offline,
  ],
}
