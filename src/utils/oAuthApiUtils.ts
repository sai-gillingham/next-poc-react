import axios from "axios";

export default class oAuthApiUtils {
    /**
     * constructor
     * @param {string|null} accessToken auth0 アクセストークン
     * @param {number|null} timeout タイムアウト
     * @param {string|null} baseurl カスタムURL
     */
    constructor(timeout = null, baseurl = null) {
        // @TODO: CHANGE TO CORRECT URL
        axios.defaults.baseURL = baseurl  || 'http://localhost:8080';
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.defaults.timeout = timeout || process.env.REACT_APP_ECCUBE_TIMEOUT;
    }

    /**
     * oAuth API POST リクエスト
     * @param {string} uri API アクセスポイント
     * @param {Object} body Post データ
     * @returns {Promise<axios.AxiosResponse<any>> | *} (API|Network) リスポンス
     */
    post(uri, body) {
        return axios({
            method: 'POST',
            url: uri,
            data: body
        });
    }
}

export {axios};
