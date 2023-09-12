const {
    glob,
    globSync,
    globStream,
    globStreamSync,
    Glob,
} = require('glob');


class GenerateAutoValidationFileToDucks {
    fs;
    path;
    globSync;
    globStream;
    globStreamSync;
    Glob;
    readline;
    overWriteAllFlag;

    constructor() {
        this.fs = require("fs");
        this.path = require("path");
        this.glob = glob;
        this.globSync = globSync;
        this.globStream = globStream;
        this.globStreamSync = globStreamSync;
        this.Glob = Glob;
        this.readline = require('node:readline/promises');
        this.overWriteAllFlag = false;
    }

    /**
     * 
     * @param {string} mutationName
     * @returns {Promise<void>}
     */
    async main(mutationName, mutationFields) {
        // 1. ducksフォルダを探す
        console.log("OK");
        const MutationFiles = await this.glob("src/state/ducks/**/**/graphql/mutations.ts", {});
        console.log(MutationFiles);
       

        for (const MutationFile of MutationFiles) {
            // 2. ducksフォルダの中にあるファイルを取得する
            const MutationFileContent = await this.fs.readFileSync(MutationFile, 'utf8');
            if (MutationFileContent.includes(mutationName)) {
                // 3. バリデーションファイルを生成する
                const mainDuckDirectory = MutationFile.substring(0, MutationFile.indexOf("/graphql"));
                console.log("Beep");
                console.log(mainDuckDirectory);
                const fileExistsCheck = await this.fs.existsSync(mainDuckDirectory + "/auto_validation.ts");
                if (fileExistsCheck && !this.overWriteAllFlag) {
                    console.log("バリデーションファイルは既に存在します。");
                    const rl = this.readline.createInterface({input: process.stdin, output: process.stdout});
                    const confirm = await rl.question(mainDuckDirectory + '/auto_validation.tsを上書きしますか？(y/n/a): ');
                    if (confirm === 'n') {
                        continue;
                    }
                    if (confirm === 'a') {
                        this.overWriteAllFlag = true;
                    }
                }
                console.log("CREATE FILE IN " + mainDuckDirectory + "/auto_validation.ts");
                await this.convertGraphQLToJoiValidationFile(mutationName, mutationFields, mainDuckDirectory + "/auto_validation.ts")
            }
        }

 

        // 4. バリデーションファイルを保存する

    }

    // GraphQL
    async convertGraphQLToJoiValidationFile(MutationName, MutationFields, validationFile) {
        const rawJoiConversionFile = await this.fs.readFileSync('tools/base/EccubeValidationBuilder/src/JoiTranslationFile.json', 'utf8');
        const jsonConversionFile = JSON.parse(rawJoiConversionFile);
        let JoiValidationFileConstructor = jsonConversionFile.start_tag.replace('{MODEL_NAME}', MutationName);
        for (const MutationField of MutationFields) {
            console.log(jsonConversionFile);
            console.log(MutationField.type);
            JoiValidationFileConstructor += jsonConversionFile.fields[MutationField.type]
                .replace('{FIELD_NAME}', MutationField.name)
                .replace('{REQUIRED}', MutationField.required ? '.required()' : '');
        }
        
        JoiValidationFileConstructor += jsonConversionFile.end_tag;
        await this.fs.writeFileSync(validationFile, jsonConversionFile.comment_text);
        await this.fs.appendFileSync(validationFile, jsonConversionFile.import_text);
        await this.fs.appendFileSync(validationFile, JoiValidationFileConstructor);
        await this.fs.appendFileSync(validationFile, `export const auto_validation = { ${MutationName}Schema };`);
    }


}

module.exports = GenerateAutoValidationFileToDucks;
