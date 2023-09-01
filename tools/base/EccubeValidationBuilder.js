#!/usr/bin/env node

class EccubeValidationBuilder {
    arguments;

    async build() {
        console.log('入力したURLから、GraphQLのスキーマを取得して、バリデーション機能を作成する');
        console.log(this.arguments.eccubeURL);
        const axios = require('axios');
        // Get Introspection Query Result from ECCUBE GraphQL
        const response = await axios.post(this.arguments.eccubeURL + '/api', {
            query: `
    query IntrospectionQuery {
      __schema {
        
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          description
          
          locations
          args {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      description
      
      fields(includeDeprecated: true) {
        name
        description
        args {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        description
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      description
      type { ...TypeRef }
      defaultValue
      
      
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `
        });
        // Output response to file
        const fs = require('fs');
        await fs.writeFileSync('schema.json', JSON.stringify(response.data.data.__schema, null, 2));
        // Get Mutation results only
        const mutationTypes = response.data.data.__schema.types.filter(type => type.name === 'Mutation')[0];
        // Get Mutation name
        
        //console.log(mutationTypes);
        
        mutationTypes.fields.forEach(mutation => {
            //console.log(mutation);
            // Get Name of Mutation
            const mutationName = mutation.name;
            // Get All field names and field types
            const mutationFields = mutation.args;
 
            // Get All field names and field types
            const mutationArguments = mutationFields.map(field => {
                return {
                    name: field.name,
                    type: field.type.name
                }
            });
            console.log(mutationArguments, mutationName);
        });
        // Get Mutation Arguments
        
        
        
        
        
        // Generate Validation Rules from Introspection Query Result
        throw new Error('Not Implemented');
    }
}


module.exports = EccubeValidationBuilder;
