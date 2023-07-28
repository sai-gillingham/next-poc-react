import ApiHandlerUtil from "../../../../utils/ApiHandlerUtil";
import entryMutations from "./graphql/mutations";
import GraphQLUtils from "../../../../utils/GraphQLUtils";


/**
 * 仮会員登録
 * @param params
 */
export function callEntry(params) {
    return new ApiHandlerUtil().graphQLRequestApi(
        () => (new GraphQLUtils()).sendMutation(
        entryMutations.CREATE_ENTRY,
        params,
    ))
}

export function callValidationEntry(params) {
    return new ApiHandlerUtil().graphQLRequestApi(
        () => (new GraphQLUtils()).sendMutation(
            entryMutations.VALIDATION_ENTRY,
            {
                input: {
                    ...params
                }
            }
        )
    )
}
