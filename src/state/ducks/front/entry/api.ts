import ApiUtils from "../../../../utils/ApiUtils";
import entryMutations from "./graphql/mutations";


/**
 * 仮会員登録
 * @param params
 */
export function callEntry(params) {
    console.log(params)
    return new ApiUtils().sendMutation(
        entryMutations.CREATE_ENTRY,
        {input: {
            ...params
        }},
    )
}
