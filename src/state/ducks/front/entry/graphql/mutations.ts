import {gql} from '@apollo/client';

const CREATE_ENTRY = gql`
    mutation entryCustomer($input : entryCustomerInput!) {
        entryCustomer(input: $input) {
            customer {
                id
                name01
                name02
                email
                postalCode
                phoneNumber
                addr01
                addr02
                plainPassword
            }
        }
    }`;

const entryMutations = {
    CREATE_ENTRY
}

export default entryMutations;

