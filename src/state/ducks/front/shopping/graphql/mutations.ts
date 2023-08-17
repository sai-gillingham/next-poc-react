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
                    quantity
                    product_name
                    product_code
                }
            }
            company_name
            email
        }
    }`;

const orderMutations = {
    ORDER_MUTATION
}

export default orderMutations;
