module.exports = {

  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options:
      {
        url: "https://cms.vervebot.io/graphql",
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 50,
            },
          },
        },
      },
    },
  ],
}
