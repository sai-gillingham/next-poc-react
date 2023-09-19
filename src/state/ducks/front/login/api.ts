import OAuthApiUtils from "../../../../utils/OAuthApiUtils";

export function callLogin(params) {
    console.log(params);
    return new OAuthApiUtils().login(params.username, params.password);
}
