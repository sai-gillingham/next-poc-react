import {gql} from '@apollo/client';

const GET_CARTS = gql`
    query {
        carts {
            cart_key,
            CartItems {
                quantity,
                ProductClass {
                    ClassCategory1 {
                        name
                    }
                    ClassCategory2 {
                        name
                    }
                    price01
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

