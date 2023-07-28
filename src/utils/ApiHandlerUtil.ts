import GraphQLUtils from "./GraphQLUtils";
import OAuthApiUtils from "./OAuthApiUtils";

export default class ApiHandlerUtil {
    public graphql: GraphQLUtils;
    public oAuth: OAuthApiUtils; 
    public credentials: any;
    
    constructor() {
        this.graphql = new GraphQLUtils(); 
        this.oAuth = new OAuthApiUtils();
        this.credentials = JSON.parse(localStorage.getItem('oAuthCredentials'));
    }
    
    async graphQLRequestApi(graphQLMethod, no_retry = false) {
        const graphQlResult = graphQLMethod();

        if (graphQlResult?.data?.errors?.length > 1 && no_retry !== true) {
            console.log(graphQlResult?.data?.errors);
            // TODO: RUN RE TOKEN REFRESH HERE
            let newToken = await this.oAuth.getNewAccessTokenWithRefreshToken(this.credentials.refresh_token);
            localStorage.setItem('oAuthCredentials', JSON.stringify(newToken))
            await this.graphQLRequestApi(graphQLMethod, true)
        }
        return graphQlResult;
    }
}
