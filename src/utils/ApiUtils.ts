import axios from "axios";

export default class ApiUtils {
  /**
   * constructor
   * @param {string|null} accessToken auth0 アクセストークン
   * @param {number|null} timeout タイムアウト
   * @param {string|null} baseurl カスタムURL
   */
  constructor(accessToken = null, timeout = null, baseurl = null) {
    let accessTokens = "";
    accessTokens = accessToken;
    // @TODO: CHANGE TO CORRECT URL
    axios.defaults.baseURL = baseurl  || 'https://example.com/';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.post['Accept'] = 'application/json';

    if (accessToken !== null) {
      axios.defaults.headers.common['Authorization'] = "Bearer " + accessToken;
    }
    axios.defaults.timeout = timeout || process.env.REACT_APP_ECCUBE_TIMEOUT;
  }

  /**
   * GET リクエスト
   * @param uri API アクセスポイント
   * @param parameters Get クエリーパラメーター
   * @param responseSchema
   * @param additionalParams
   * @returns {Promise<axios.AxiosResponse<any>> | *} (API|Network) リクエスト
   */
  get(uri, parameters, responseSchema = null, additionalParams = {}) {
    return axios({
      ...additionalParams,
      method: 'GET',
      url: uri,
      params: {
        ...parameters,
      }
    })
  }

  /**
   * POST リクエスト
   * @param {string} uri API アクセスポイント
   * @param {Object} body Post データ
   * @param responseSchema
   * @returns {Promise<axios.AxiosResponse<any>> | *} (API|Network) リスポンス
   */
  post(uri, body, responseSchema = null) {
    return axios({
      method: 'POST',
      url: uri,
      data: JSON.stringify(body)
    });
  }

  /**
   * DELETE リクエスト
   * @param {string} uri API アクセスポイント
   * @param {string} id ID
   * @returns {Promise<axios.AxiosResponse<any>> | *} (API|Network) リスポンス
   */
  delete(uri, id) {
    return axios({
      method: 'DELETE',
      url: uri + id,
    });
  }

  /**
   * UPDATE リクエスト
   * @param uri API アクセスポイント
   * @param id Unique ID
   * @param body 更新データ
   * @param responseSchema
   * @returns {Promise<axios.AxiosResponse<any>> | *} (API|Network) リスポンス
   */
  put(uri, id, body, responseSchema  = null) {
    return axios({
      method: 'PUT',
      url: uri + id,
      data: body
    });
  }
}

export {axios};
