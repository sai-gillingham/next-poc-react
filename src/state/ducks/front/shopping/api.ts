import GraphQLUtils from "../../../../utils/GraphQLUtils";
import orderMutations from "./graphql/mutations";

export function orderMutationAPI(access_token: string) {
    return new GraphQLUtils(access_token).sendMutation(
        orderMutations.ORDER_MUTATION,
        {}
    )
}

export function paymentMethodMutationAPI(access_token: string, payment_method_id: number|null) {
    return new GraphQLUtils(access_token).sendMutation(
        orderMutations.PAYMENT_METHOD_MUTATION,
        {
            payment_method_id: payment_method_id
        }
    )
}

export function purchaseMutationAPI(access_token: string) {
    return new GraphQLUtils(access_token).sendMutation(
        orderMutations.PURCHASE_MUTATION,
        {}
    )
}
