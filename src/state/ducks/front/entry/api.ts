import ApiUtils from "../../../../utils/ApiUtils";
import entryMutations from "./graphql/mutations";


/**
 * 仮会員登録
 * @param params
 */
export function callEntry(params) {
    return new ApiUtils().sendMutation(
        entryMutations.CREATE_ENTRY,
        {input: {
            ...params
        }},
    )
}

export function callValidationEntry(params) {
    return new ApiUtils().sendMutation(
        entryMutations.VALIDATION_ENTRY,
        {
            input: {
                ...params
            }
        }
    )
}
