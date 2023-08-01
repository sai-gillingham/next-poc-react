import {gql} from '@apollo/client';

const GET_PRODUCT = gql`
    query productGet($id: Int!) {
        product(id: $id) {
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
        }
    }`;

const entryMutations = {
    GET_PRODUCT,
}

export default entryMutations;

