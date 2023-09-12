#!/usr/bin/env node

class EccubeReactBuilder {
    globalArguments = {};
    
    
    async build() {
        const EccubeBuilderHub = require ("./base");
        // IF .env doesn't exist, run initial Wizard
        if (!require('fs').existsSync('.env')) {
            await this.initialSetting();
        } else {
            // Read .env file
            require('dotenv').config();
            this.globalArguments = { ...this.globalArguments, ...{eccubeURL: process.env.REACT_APP_API_URL}};
            console.log('環境変数を読み込みました。', this.globalArguments);
        }

        // Run Base Classes
        await Promise.all(EccubeBuilderHub?.map(async (builder) => {
            const instance = new builder();
            instance.arguments = this.globalArguments;
            await instance.build();
        }));
        // @TODO: Run extension classes
    }
    
    async initialSetting() {
        const { execSync } = require('child_process');
        
        const exec = commands => {
            execSync(commands, { stdio: 'inherit', shell: true });
        };

        const readline = require('node:readline/promises');
        const rl = readline.createInterface({input: process.stdin, output: process.stdout});

        const eccubeServerUrl = await rl.question('ECCUBEサーバーのURLを入力してください。: ');
        const eccubeServerToken = await rl.question('ECCUBEサーバーのトークンを入力してください。: ');
        
        
        console.log(`入力されたURL: ${eccubeServerUrl} を.envに書き込み、ビルドを開始します。`);
        this.globalArguments = { ...this.globalArguments, ...{eccubeURL: eccubeServerUrl}};
        console.log('.envファイルを作成します。');
        exec(`echo "REACT_APP_API_URL=${eccubeServerUrl}" > .env`);
        exec(`echo "REACT_APP_PROXY_URL=${eccubeServerUrl}" >> .env`);
        exec('echo "REACT_APP_PROXY_PATH=/api/*" >> .env');
        exec(`echo "REACT_APP_CART_REFRESH_RATE_SECONDS=60" >> .env`);
        exec(`echo "REACT_APP_GRAPHQL_URL=$REACT_APP_API_URL/api" >> .env`);
        exec(`echo "REACT_APP_OAUTH_URL=$REACT_APP_API_URL/token" >> .env`);
        exec(`echo "REACT_APP_API_CLIENT_KEY=${eccubeServerToken}" >> .env`);
        console.log('.envファイルを作成しました。');
    }
}

new EccubeReactBuilder().build().then(r =>  console.log("ビルドが完了しました。")).then(r => process.exit(0))

