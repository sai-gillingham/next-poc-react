import GraphQLUtils from "../../../../utils/GraphQLUtils";
import cartMutations from "./graphql/mutations";
import cartQueries from "./graphql/queries";

export function modifyCartProduct(access_token: string, product_class_id: number, quantity: number) {
    console.log(access_token);
    return new GraphQLUtils(access_token).sendMutation(
        cartMutations.MODIFY_CART_MUTATION,
        {
            input: {
                product_class_id: product_class_id,
                quantity: quantity
            },
        }
    )
}

export function cartRequestApi(access_token: string) {
    return new GraphQLUtils(access_token).sendQuery(
        cartQueries.GET_CARTS,
        {}
    )
}
