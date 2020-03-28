import { buildSchema } from 'graphql';
import { schemaToTemplateContext } from 'graphql-codegen-core';
import loadTypeSchema from '../../../utils/schema';
import { mockServer } from 'graphql-tools';

describe('Clip schema', () => {
  let schema, typeDefs;
  beforeAll(async () => {
    const root = `
      schema {
        query: Query
      }

    `;
    const typeSchemas = await Promise.all(['clip'].map(loadTypeSchema));
    typeDefs = root + typeSchemas.join(' ');
    schema = schemaToTemplateContext(buildSchema(typeDefs));
  });

  test('Clip has base fields', () => {
    let type = schema.types.find(t => {
      return t.name === 'Clip';
    });

    expect(type).toBeTruthy();

    const baseFields = {
      title: 'String!'
    };

    type.fields.forEach(field => {
      const type = baseFields[field.name];
      expect(field.raw).toBe(type);
    });
  });
});
