module.exports = {
  client: {
    service: {
      name: "timeline-apollo",
      url: "http://localhost:4000/graphql",
    },
    includes: ["src/**/*.ts"],
    tagName: "gql",
  },
};
