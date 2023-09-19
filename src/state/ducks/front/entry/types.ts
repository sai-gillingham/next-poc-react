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
// 仮会員登録エベント
export const FRONT_ENTRY_REQUEST = 'FRONT_ENTRY_REQUEST';
export const FRONT_ENTRY_REQUEST_SUCCESS = 'FRONT_ENTRY_REQUEST_SUCCESS';
export const FRONT_ENTRY_REQUEST_FAILURE = 'FRONT_ENTRY_REQUEST_FAILURE';
export const FRONT_ENTRY_REQUEST_LOADING = 'FRONT_ENTRY_REQUEST_LOADING';
export const FRONT_ENTRY_FORM_UPDATE = "FRONT_ENTRY_FORM_UPDATE";

// 本会員登録エベント
export const FRONT_ENTRY_VALIDATION_REQUEST = 'FRONT_ENTRY_VALIDATION_REQUEST';
export const FRONT_ENTRY_VALIDATION_REQUEST_SUCCESS = 'FRONT_ENTRY_VALIDATION_REQUEST_SUCCESS';
export const FRONT_ENTRY_VALIDATION_REQUEST_FAILURE = 'FRONT_ENTRY_VALIDATION_REQUEST_FAILURE';
export const FRONT_ENTRY_VALIDATION_REQUEST_LOADING = 'FRONT_ENTRY_VALIDATION_REQUEST_LOADING';

const types = {
    // 仮会員登録エベント
    FRONT_ENTRY_REQUEST,
    FRONT_ENTRY_REQUEST_SUCCESS,
    FRONT_ENTRY_REQUEST_FAILURE,
    FRONT_ENTRY_REQUEST_LOADING,
    FRONT_ENTRY_FORM_UPDATE,
    
    // 本会員登録エベント
    FRONT_ENTRY_VALIDATION_REQUEST,
    FRONT_ENTRY_VALIDATION_REQUEST_SUCCESS,
    FRONT_ENTRY_VALIDATION_REQUEST_FAILURE,
    FRONT_ENTRY_VALIDATION_REQUEST_LOADING
}

export default types;
