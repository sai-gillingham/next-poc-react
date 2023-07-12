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
// ログインエベント
export const FRONT_LOGIN_REQUEST = 'FRONT_LOGIN_REQUEST';
export const FRONT_LOGIN_SUCCESS = 'FRONT_LOGIN_SUCCESS';
export const FRONT_LOGIN_FAILURE = 'FRONT_LOGIN_FAILURE';
export const FRONT_LOGIN_LOADING = 'FRONT_LOGIN_LOADING';



const types = {
    // ログインエベント
    FRONT_LOGIN_REQUEST,
    FRONT_LOGIN_SUCCESS,
    FRONT_LOGIN_FAILURE,
    FRONT_LOGIN_LOADING,
}

export default types;
