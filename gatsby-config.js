module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve:`gatsby-source-filesystem`,
      options: {
        name:`pages`,
        path:`${__dirname}/src/pages`
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options: {
        name:`posts`,
        path:`${__dirname}/src/posts`
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options: {
        name:`images`,
        path:`${__dirname}/src/images`
      },
    },
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extension: [`.md`,`.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxwidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts:[
          `roboto mono`,
          `muli\:400,400i,700,600i`
        ],
        display: "swap",
      }
    },
  ],
}
