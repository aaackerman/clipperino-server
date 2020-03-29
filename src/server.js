import { ApolloServer } from 'apollo-server';
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

  await connect(config.dbUrl);
  const { url } = await server.listen({ port: config.port });

  console.log(`GQL server ready at ${url}`);
};
