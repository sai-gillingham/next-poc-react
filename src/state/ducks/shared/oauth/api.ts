import oAuthApiUtils from "../../../../utils/OAuthApiUtils";

export function callLogin(body) {
    return new oAuthApiUtils().post(
        '/token',
        body
    )
}
