import {gql} from '@apollo/client';

const GET_PRODUCT = gql`
    query ($id: ID!) {
        product(id: $id) {
            id,
            name,
            description_detail,
            create_date,
            update_date,
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

