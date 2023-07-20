import {gql} from '@apollo/client';

const CREATE_ENTRY = gql`
    mutation entryCustomer(
        $name01: String!
        $name02: String!
        $kana01: String!
        $kana02: String!
        $postal_code: String!
        $addr01: String!
        $addr02: String!
        $pref: String!
        $email: String!
        $plain_password: String!
        $phone_number: String!
    ) {
        entryCustomer(
            name01: $name01,
            name02: $name02,
            kana01: $kana01,
            kana02: $kana02,
            postal_code: $postal_code
            addr01: $addr01
            addr02: $addr02
            pref: $pref
            email: $email
            plain_password: $plain_password
            phone_number: $phone_number
        ) {
            id
            name01
            name02
            email
            postal_code
            phone_number
            addr01
            addr02
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

