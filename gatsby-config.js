/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Portfolio-Website`,
    siteUrl: `https://www.hussainalnakhli.com`,
  },
  plugins: [{
    resolve: `gatsby-plugin-manifest`,
    options: {
      icon: './src/assets/images/favicon.png',
    }
  }],
};
