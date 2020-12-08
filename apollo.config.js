module.exports = {
  client: {
    service: {
      name: "timeline-apollo",
      url: "http://localhost:9000/graphql",
    },
    includes: ["src/**/*.{ts,tsx}"],
    localSchemaFile: "./graphql-schema.json",
    tagName: "gql",
  },
};
