import GraphQLUtils from "../../../../utils/GraphQLUtils";
import orderMutations from "./graphql/mutations";

export function orderMutationAPI(access_token: string) {
    console.log(access_token);
    return new GraphQLUtils(access_token).sendMutation(
        orderMutations.ORDER_MUTATION,
        {}
    )
}
