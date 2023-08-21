import oAuthApiUtils from "../../../../utils/OAuthApiUtils";
export function refreshToken(refresh_token: string) {
    return new oAuthApiUtils().post(
        '/token',
        {
            grant_type: 'refresh_token',
            refresh_token: refresh_token,
            client_id: process.env.REACT_APP_API_CLIENT_KEY
        }
    );
}
