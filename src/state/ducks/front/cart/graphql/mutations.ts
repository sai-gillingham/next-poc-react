import {gql} from "@apollo/client";

const MODIFY_CART_MUTATION = gql`
    mutation cartModify(
        $input: add_cartInput!
    ) {
        cartModify(
            input: $input
        ) {
            id
        }
    }`;

const cartMutations = {
    MODIFY_CART_MUTATION
}

export default cartMutations;
