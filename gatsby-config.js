/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Testing Site`,
    description: `Example project for learning Gatsby`,
    twitterUsername: `@gatsbyjs`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-remark-images`,
    "gatsby-plugin-mdx",
  ],
};
