/***
 * //////////////////////////////////////////////////////////////
 * TYPES (タイプ)
 * ----------------------
 *
 * タイプは、アクション、リデューサ、saga(または他の)ミドルウェアで使用するための定数です。
 * Typeはアクションの中で、ミドルウェアやリデューサーに命令を伝えるために使われます。
 * 全てのアクションタイプは、グループ化しやすいように以下の配列に格納され、選択されます。
 * //////////////////////////////////////////////////////////////
 */
// OAUTHトークン受信と更新
export const OAUTH_TOKEN_RECEIVE : string = 'OAUTH_TOKEN_RECEIVE';
export const OAUTH_TOKEN_REFRESH : string = "OAUTH_TOKEN_REFRESH";
export const OAUTH_TOKEN_SAVE: string = "OAUTH_TOKEN_SAVE";

// リフレッシュトークン
export const REFRESH_TOKEN_REQUEST: string = "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_REQUEST_LOADING: string = "REFRESH_TOKEN_REQUEST_LOADING";
export const REFRESH_TOKEN_REQUEST_SUCCESS: string = "REFRESH_TOKEN_REQUEST_SUCCESS";
export const REFRESH_TOKEN_REQUEST_FAILURE: string = "REFRESH_TOKEN_REQUEST_FAILURE";

const types = {
    // OAUTHトークン受信と更新
    OAUTH_TOKEN_RECEIVE,
    OAUTH_TOKEN_REFRESH,
    OAUTH_TOKEN_SAVE,
    
    // リフレッシュトークン
    REFRESH_TOKEN_REQUEST,
    REFRESH_TOKEN_REQUEST_LOADING,
    REFRESH_TOKEN_REQUEST_SUCCESS,
    REFRESH_TOKEN_REQUEST_FAILURE
}

export default types;
