import GraphQLUtils from "../../../../utils/GraphQLUtils";
import cartMutations from "./graphql/mutations";

export function modifyCartProduct(access_token: string, product_class_id: number, quantity: number) {
    console.log(access_token);
    return new GraphQLUtils(access_token).sendMutation(
        cartMutations.MODIFY_CART_MUTATION,
        {}
    )
}
