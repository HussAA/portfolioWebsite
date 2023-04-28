/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Hussain Alnakhli`,
    siteUrl: `https://www.hussainalnakhli.com`,
  },
  plugins: ['gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      icon: './src/assets/images/favicon.png',
    }
  }],
};
