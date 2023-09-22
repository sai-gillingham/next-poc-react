import axios from "axios";

export default class OAuthApiUtils {
    /**
     * constructor
     * @param {string|null} accessToken auth0 アクセストークン
     * @param {number|null} timeout タイムアウト
     * @param {string|null} baseurl カスタムURL
     */
    constructor(timeout = null, baseurl = null) {
        axios.defaults.baseURL = baseurl  || process.env.REACT_APP_API_URL;
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.defaults.timeout = timeout || process.env.REACT_APP_ECCUBE_TIMEOUT;
    }

    /**
     * oAuth API POST リクエスト
     * @param {string} uri API アクセスポイント
     * @param {Object} body Post データ
     * @param headers headers 
     * @returns {Promise<axios.AxiosResponse<any>> | *} (API|Network) リスポンス
     */
    post(uri, body, headers = {}) {
        return axios({
            method: 'POST',
            url: uri,
            data: body,
            headers: headers
        });
    }
    
    getNewAccessTokenWithRefreshToken(refreshToken) {
        return this.post('/token/refresh', {
            'refresh_token': refreshToken
        })
    }

    /**
     * サーバーですべてのACCESS_TOKENを削除
     * 
     * @param accessToken
     */
    logout(accessToken: string) {
        return this.post(
            "/api/logout", {}, {
                "Authorization": "Bearer " + accessToken,
            }
        )
    }

    /**
     * ログイン
     * 
     * @param accountEmail
     * @param password
     */
    login(accountEmail : string, password : string) {
        return this.post(
            "token",
            {
                "grant_type":"password",
                "client_id": process.env.REACT_APP_API_CLIENT_KEY,
                "username": accountEmail,
                "password": password
            }
        )
        
    }
    
}

export {axios};
