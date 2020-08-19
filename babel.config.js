module.exports = {
  plugins: [
    // FIXME: breaks library styling
    // 'babel-plugin-transform-semantic-ui-react-style-imports',
    [
      "@quickbaseoss/babel-plugin-styled-components-css-namespace",
      {
        cssNamespace: "#top#top#top",
      },
    ],
    "babel-plugin-styled-components",
  ],
}
