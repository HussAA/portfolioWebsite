/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Portfolio-Website`,
    siteUrl: `https://www.hussainalnakhli.com`,
  },
  plugins: [

    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo:'./src/assets/images/favicon.png',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false
        }
      }
    }
  ],
}
