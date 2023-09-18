import {gql} from '@apollo/client';

const GET_PRODUCT = gql`
    query ($id: ID!) {
        product(id: $id) {
            id,
            name,
            description_detail,
            ProductCategories {
                Category {
                    name
                }
            }
            ProductImage {
                file_name
            },
            ProductTag {
                Tag {
                    name
                }
            }
            ProductClasses {
                id,
                price01,
                ProductStock{
                    stock
                }
            }
        }
    }`;

const productDetailQueries = {
    GET_PRODUCT,
}

export default productDetailQueries;

