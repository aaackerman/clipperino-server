import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { merge } from 'lodash';
import loadTypeSchema from './utils/schema';
import config from './config';
import connect from './db';
import clipResolvers from './types/clip/clip.resolvers';

const types = ['clip'];

export default async () => {
  const rootSchema = `
    schema {
      query: Query
      mutation: Mutation
    }
  `;

  const schemaTypes = await Promise.all(types.map(loadTypeSchema));

  const server = new ApolloServer({
    typeDefs: [rootSchema, ...schemaTypes],
    resolvers: merge({}, clipResolvers)
  });

  const app = express();

  await connect(config.dbUrl);

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server running on http://localhost:4000${server.graphqlPath}`);
  });
};
