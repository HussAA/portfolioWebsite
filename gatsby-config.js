/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Hussain Alnakhli`,
    siteUrl: `https://www.hussainalnakhli.com`,
  },
  plugins: [{
    resolve: `gatsby-plugin-manifest`,
    resolve: 'gatsby-plugin-react-helmet',
    options: {
      icon: './src/assets/images/favicon.png',
    }
  }],
};
