import {gql} from '@apollo/client';

const LOGIN_MUTATION = gql`
    mutation login($input : login!) {
        login(input: $input) {
            customer {
                id
            }
        }
    }`;


const loginMutations = {
    LOGIN_MUTATION
}

export default loginMutations;

