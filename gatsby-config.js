module.exports = {
  siteMetadata: {
    name: 'mdx-2-breaking-content-changes'
  },
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/`
      }
    }
  ]
};
