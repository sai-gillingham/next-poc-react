import oAuthApiUtils from "../../../../utils/oAuthApiUtils";

export function callLogin(body) {
    return new oAuthApiUtils().post(
        '/token',
        body
    )
}
