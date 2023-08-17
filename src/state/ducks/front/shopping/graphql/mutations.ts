import {gql} from "@apollo/client";

const MODIFY_CART_MUTATION = gql`
    mutation {
        orderMutation: orderMutation {
            total,
            subtotal,
            postal_code,
            Pref {
                name
            },
            addr01,
            addr02
            phone_number,
            email
            OrderItems {
                price,
                Product {
                    ProductImage {
                        file_name
                    }
                },
                product_name,
                product_code,
            }
        }
    }`;

const cartMutations = {
    MODIFY_CART_MUTATION
}

export default cartMutations;
