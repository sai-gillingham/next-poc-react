#!/usr/bin/env node

class EccubeValidationBuilder {
    arguments;
    /** @type {GenerateAutoValidationFileToDucks} */
    generateAutoValidationFileToDucks;
    
    constructor() {
        this.generateAutoValidationFileToDucks = require('./src/GenerateAutoValidationFileToDucks');
    }

    graphQLPrimitiveTypes = ['Int', 'Float', 'String', 'Boolean', 'ID', 'DateTime'];

    async build() {
        console.log('入力したURLから、GraphQLのスキーマを取得して、バリデーション機能を作成する');
        console.log(this.arguments.eccubeURL);
        const axios = require('axios');
        const fs = require("fs");

        // using the readFileSync() function
        // and passing the path to the file
        const buffer = fs.readFileSync("tools/base/EccubeValidationBuilder/src/IntrospectionQuery.graphql");

        // use the toString() method to convert
        // Buffer into String
        const introspectionQuery = buffer.toString();

        // Get Introspection Query Result from ECCUBE GraphQL
        const response = await axios.post(this.arguments.eccubeURL + '/api', {
            query: introspectionQuery
        });
        
        // Output response to file
        await fs.writeFileSync('schema.json', JSON.stringify(response.data.data.__schema, null, 2));
        // Get Mutation results only
        const mutationTypes = response.data.data.__schema.types.filter(type => type.name === 'Mutation')[0];
        // Get Mutation name
        
        const validationFile = await new this.generateAutoValidationFileToDucks();
        for (const mutation of mutationTypes.fields) {
            // Get Name of Mutation
            const mutationName = mutation.name;
            const mutationFields = this.convertGraphQLToReadableSchema(mutation.args, response.data.data.__schema);
            console.log(mutationName, mutationFields);

            // Generate Validation Rules from Introspection Query Result
            /** @type {GenerateAutoValidationFileToDucks} */
            await validationFile.main(mutationName, mutationFields);
        }
        
        console.log('バリデーション機能の作成が完了しました。');
    }

    /**
     * GraphQLのスキーマを読みやすい形式に変換する。
     *
     * @param mutationQLData
     * @param graphQLData
     */
    convertGraphQLToReadableSchema(mutationQLData, graphQLData) {
        if (!mutationQLData) {
            throw new Error('GraphQLのスキーマが指定されていません。');
        }

        // 項目名と項目型を取得する。
        const mutationArguments = mutationQLData.map(field => {
            return {
                name: field.name,
                type: field?.type?.ofType?.name ?? field.type.name
            }
        });

        // プリミティブ型以外の場合、その型のスキーマを取得する。
        const convertedArguments = mutationArguments.map(field => {
            if (this.graphQLPrimitiveTypes.includes(field.type)) {
                return field;
            }

            // Get Type from GraphQL Schema
            const type = graphQLData.types.filter(type => type.name === field.type)[0];

            // Get All field names and field types
            return type.inputFields.map(field => {
                return {
                    name: field.name,
                    type: field?.type?.ofType?.name ?? field.type.name
                }
            });
        });

        return convertedArguments.flat(1);
    }

}


module.exports = EccubeValidationBuilder;
