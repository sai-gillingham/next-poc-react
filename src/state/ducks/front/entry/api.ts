import {POST_CUSTOMERS_PATH} from "./constants";
import ApiUtils from "../../../../utils/ApiUtils";
/**
 * @param accessToken
 * @param params
 * @param account_id
 * @returns {AxiosPromise}
 */
export function callRequests(params) {
    return new ApiUtils().post(
        POST_CUSTOMERS_PATH,
        params,
    )
}
