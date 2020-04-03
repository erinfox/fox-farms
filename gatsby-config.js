module.exports = {
  siteMetadata: {
    title: `FOX FARMS`,
    menuLinks: [
      // {
      //   name: "HOME",
      //   link: "/",
      // },
      // {
      //   name: "WHAT'S AVAILABLE",
      //   link: "/available",
      // },
      {
        name: "BLOG",
        link: "/blog",
      },
      {
        name: "CONTACT",
        link: "/contact",
      },
    ],
    description: ``,
    author: `@erinfox`,
  },
  plugins: [
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `foxfarms17924`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `x9rdu88shwbb`,
        accessToken: `W4Es8dvIC3VGj7jw_by01vGZM0mh75AQyOSKm4GSpwo`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
