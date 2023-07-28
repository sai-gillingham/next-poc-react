import {ApolloClient, InMemoryCache} from "@apollo/client";


export default class GraphQLUtils {
  apolloClient: ApolloClient<any>;

    /**
     * ApiUtils constructor.
     * @param accessToken
     * @param timeout
     * @param baseurl
     */
  constructor(accessToken = null, timeout = null, baseurl = null) {
    this.apolloClient = new ApolloClient({
        uri: baseurl || 'http://localhost:8080/api',
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
