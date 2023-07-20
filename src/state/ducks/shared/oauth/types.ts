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
export const OAUTH_TOKEN_RECEIVE : string = 'OAUTH_TOKEN_RECEIVE';
export const OAUTH_TOKEN_REFRESH : string = "OAUTH_TOKEN_REFRESH";
export const OAUTH_TOKEN_SAVE: string = "OAUTH_TOKEN_SAVE";

const types = {
    // OAUTHトークン受信と更新
    OAUTH_TOKEN_RECEIVE,
    OAUTH_TOKEN_REFRESH,
    OAUTH_TOKEN_SAVE
}

export default types;
