import ApiUtils from "../../../../utils/ApiUtils";
import loginMutations from "./graphql/mutations";

export function callLogin(params) {
    return new ApiUtils().sendMutation(
        loginMutations.LOGIN_MUTATION,
        {input: {
                ...params
            }},
    )
}
