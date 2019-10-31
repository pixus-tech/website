module.exports = {
  siteMetadata: {
    title: `pixus`,
    description: `Reclaim your photo library`,
    author: `@tomknig`,
    siteUrl: 'https://www.pixus.tech',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: {
        addSassLoader: false,
      },
    },
    `gatsby-plugin-typescript`,
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
        name: `pixus`,
        short_name: `pixus`,
        start_url: `/`,
        background_color: `#f3f3f3`,
        theme_color: `#f3f3f3`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/app-icon-512.png`,
      },
    },
  ],
}
