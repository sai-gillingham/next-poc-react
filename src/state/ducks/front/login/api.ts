import OAuthApiUtils from "../../../../utils/OAuthApiUtils";

export function callLogin(params) {
    console.log(params);
    return new OAuthApiUtils().post(
        "token",
        {
            "grant_type":"password",
            "client_id": process.env.REACT_APP_API_CLIENT_KEY,
            "username":params.username,
            "password":params.password,
        }
    )
}
