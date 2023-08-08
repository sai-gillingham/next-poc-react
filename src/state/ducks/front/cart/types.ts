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

export const FRONT_CART_MODIFY_PRODUCT = 'FRONT_CART_MODIFY_PRODUCT';
export const FRONT_CART_MODIFY_PRODUCT_LOADING = 'FRONT_CART_MODIFY_PRODUCT_LOADING';
export const FRONT_CART_MODIFY_PRODUCT_SUCCESS = 'FRONT_CART_MODIFY_PRODUCT_SUCCESS';
export const FRONT_CART_MODIFY_PRODUCT_FAILURE = 'FRONT_CART_MODIFY_PRODUCT_FAILURE';


const types = {
    // カート内商品の変更
    FRONT_CART_MODIFY_PRODUCT,
    FRONT_CART_MODIFY_PRODUCT_LOADING,
    FRONT_CART_MODIFY_PRODUCT_SUCCESS,
    FRONT_CART_MODIFY_PRODUCT_FAILURE
}

export default types;
