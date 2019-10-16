module.exports = {
    siteMetadata: {
        title: `pixus`,
        description: `Reclaim your photo library`,
        author: `@tomknig`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
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
                icon: `${__dirname}/static/images/icon.svg`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
