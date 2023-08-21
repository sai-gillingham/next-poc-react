import {gql} from '@apollo/client';

const GET_CARTS = gql`
    query {
        carts {
            cart_key,
            total_price
            CartItems {
                quantity,
                price
                ProductClass {
                    ClassCategory1 {
                        name
                    }
                    ClassCategory2 {
                        name
                    }
                    Product {
                        name
                    }
                }
            }
        }
    }`;

const productDetailQueries = {
    GET_CARTS,
}

export default productDetailQueries;

