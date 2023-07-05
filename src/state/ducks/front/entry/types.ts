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
export const FRONT_ENTRY_REQUEST = 'FRONT_ENTRY_REQUEST';
export const FRONT_ENTRY_SUCCESS = 'FRONT_ENTRY_SUCCESS';
export const FRONT_ENTRY_FAILURE = 'FRONT_ENTRY_FAILURE';
export const FRONT_ENTRY_LOADING = 'FRONT_ENTRY_LOADING';

const types = {
    FRONT_ENTRY_REQUEST,
    FRONT_ENTRY_SUCCESS,
    FRONT_ENTRY_FAILURE,
    FRONT_ENTRY_LOADING
}

export default types;
