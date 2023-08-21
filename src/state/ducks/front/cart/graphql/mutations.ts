import {gql} from "@apollo/client";

const MODIFY_CART_MUTATION = gql`
    mutation cartModify(
        $product_class_id: ID!
        $quantity: Int!
    ) {
        cartModify(
            product_class_id: $product_class_id,
            quantity: $quantity
        ) {
            id
        }
    }`;

const cartMutations = {
    MODIFY_CART_MUTATION
}

export default cartMutations;
