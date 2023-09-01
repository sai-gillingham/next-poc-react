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
        console.log(response.data.data.__schema.types);
        // Output response  to file
        const fs = require('fs');
        fs.writeFileSync('schema.json', JSON.stringify(response.data.data.__schema, null, 2));
        
        // Generate Validation Rules from Introspection Query Result
        throw new Error('Not Implemented');
    }
}


module.exports = EccubeValidationBuilder;
