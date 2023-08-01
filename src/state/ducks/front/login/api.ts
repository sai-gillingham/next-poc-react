import OAuthApiUtils from "../../../../utils/OAuthApiUtils";

export function callLogin(params) {
    console.log(params);
    return new OAuthApiUtils().post(
        "token",
        {
            "grant_type":"password",
            "client_id":"e88085145f537ee452dbbfd1868a7f6d", // TODO: FIX API TOKEN 
            "username":params.username,
            "password":params.password,
            "scope":"read+write"
        }
    )
}
