import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";


export default class GraphQLUtils {
  apolloClient: ApolloClient<any>;

    /**
     * ApiUtils constructor.
     * @param accessToken
     * @param timeout
     * @param baseurl
     */
  constructor(accessToken = null, timeout = null, baseurl = null) {
      const httpLink = new HttpLink({
            uri: baseurl || process.env.REACT_APP_GRAPHQL_URL,
      });
      
      const authLink = setContext((_, { headers }) => {
            return {
                headers: {
                    ...headers,
                    authorization: accessToken ? `Bearer ${accessToken}` : "",
                }
            }
      });
      
      
      
    this.apolloClient = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });
  }

    /**
     * QUERY送信
     * @param query
     * @param variables
     */
  public sendQuery(query, variables) {
    return this.apolloClient.query({
        query: query,
        variables: variables
    });
  }

    /**
     * MUTATION送信
     * @param mutation
     * @param variables
     */
    public sendMutation(mutation, variables) {
    return this.apolloClient.mutate({
        mutation: mutation,
        variables: variables
    });
    }

    /**
     * SUBSCRIPTION送信
     * @param subscription
     * @param variables
     */
    public sendSubscription(subscription, variables) {
        return this.apolloClient.subscribe({
            query: subscription,
            variables: variables
        });
    }
}
