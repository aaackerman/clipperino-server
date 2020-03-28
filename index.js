const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Clip {
    title: String
    author: String
  }

  type Query {
    clips: [Clip]
  }
`;
const clips = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolvers = {
  Query: {
    clips: () => clips,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
