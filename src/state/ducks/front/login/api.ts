import OAuthApiUtils from "../../../../utils/OAuthApiUtils";

export function callLogin(params) {
    console.log(params);
    return new OAuthApiUtils().post(
        "token",
        {
            "grant_type":"password",
            "client_id":"1601a785edeb5dbac82c01d12376b947", // TODO: FIX API TOKEN 
            "username":params.username,
            "password":params.password,
            "scope":"read write"
        }
    )
}
