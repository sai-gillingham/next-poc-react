import {gql} from "@apollo/client";

const ORDER_MUTATION = gql`
    mutation {
        orderMutation: orderMutation {
            total
            subtotal
            postal_code
            Pref {
                name
            }
            addr01
            addr02
            phone_number
            name01
            name02
            kana01
            kana02
            Payment {
                id
            }
            Shippings {
                addr01
                addr02
                Pref {
                    name
                }
                phone_number
                name01
                name02
                kana01
                kana02
                shipping_delivery_name
                shipping_delivery_date
                shipping_delivery_time
                OrderItems {
                    price
                    Product {
                        ProductImage {
                            file_name
                        }
                    }
                    product_name
                    product_code
                    quantity
                }
            }
            company_name
            email
        }
    }`;

const PAYMENT_METHOD_MUTATION = gql`
    mutation ($payment_method_id: ID) {
        paymentMethodMutation (payment_method_id: $payment_method_id) {
            id
            method
            payment_image
        }
    }
`;

const orderMutations = {
    ORDER_MUTATION,
    PAYMENT_METHOD_MUTATION
}

export default orderMutations;
