import {gql} from '@apollo/client';

const CREATE_ENTRY = gql`
    mutation entryCustomer(
        $entryInput: entryInput!
    ) {
        entryCustomer(
            input: $entryInput
        ) {
            email
        }
    }`;

const VALIDATION_ENTRY = gql`
    mutation validationEntryCustomer($input : validationEntryCustomerInput!) {
        validationEntryCustomer(input: $input) {
            customer {
                id
            }
        }
    }`;

const entryMutations = {
    CREATE_ENTRY,
    VALIDATION_ENTRY
}

export default entryMutations;

