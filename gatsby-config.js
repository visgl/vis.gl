module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: '@dschau/gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer 3a39da38d3c9e5b9757f7900cd551e5ef9c0bf6a`, // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
        },
        queries: [
          `query { 
            nodes(ids: [
              "MDEwOlJlcG9zaXRvcnk5NzA0MTgxOA==", 
              "MDEwOlJlcG9zaXRvcnk1MDM0MDkyOA==",
              "MDEwOlJlcG9zaXRvcnk0MzkwMzg4Mg==",
              "MDEwOlJlcG9zaXRvcnk1MjMwNDM2Mg=="
            ]) {
              ...on Repository {
                owner {
                  ...on Organization {
                    name
                  }
                }
                description
                name
                url
                homepageUrl
                stargazers {
                  totalCount
                }
              }
            }
          }`,
        ],
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
