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

export const FRONT_PRODUCT_DETAIL_REQUEST = 'FRONT_PRODUCT_DETAIL_REQUEST';
export const FRONT_PRODUCT_DETAIL_LOADING = 'FRONT_PRODUCT_DETAIL_LOADING';
export const FRONT_PRODUCT_DETAIL_SUCCESS = 'FRONT_PRODUCT_DETAIL_SUCCESS';
export const FRONT_PRODUCT_DETAIL_FAILURE = 'FRONT_PRODUCT_DETAIL_FAILURE';


const types = {
    // 商品詳細取得
    FRONT_PRODUCT_DETAIL_REQUEST,
    FRONT_PRODUCT_DETAIL_LOADING,
    FRONT_PRODUCT_DETAIL_SUCCESS,
    FRONT_PRODUCT_DETAIL_FAILURE
}

export default types;
