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

// カート内商品の変更
export const FRONT_CART_MODIFY_PRODUCT_REQUEST = 'FRONT_CART_MODIFY_PRODUCT_REQUEST';
export const FRONT_CART_MODIFY_PRODUCT_REQUEST_LOADING = 'FRONT_CART_MODIFY_PRODUCT_REQUEST_LOADING';
export const FRONT_CART_MODIFY_PRODUCT_REQUEST_SUCCESS = 'FRONT_CART_MODIFY_PRODUCT_REQUEST_SUCCESS';
export const FRONT_CART_MODIFY_PRODUCT_REQUEST_FAILURE = 'FRONT_CART_MODIFY_PRODUCT_REQUEST_FAILURE';

// カートの取得
export const FRONT_CART_REQUEST = "FRONT_CART_REQUEST";
export const FRONT_CART_REQUEST_LOADING = "FRONT_CART_REQUEST_LOADING";
export const FRONT_CART_REQUEST_SUCCESS = "FRONT_CART_REQUEST_SUCCESS";
export const FRONT_CART_REQUEST_FAILURE = "FRONT_CART_REQUEST_FAILURE";

// カートスレイダー
export const FRONT_CART_SLIDER_SHOW = "FRONT_CART_SLIDER_SHOW";
export const FRONT_CART_SLIDER_HIDE = "FRONT_CART_SLIDER_HIDE";
export const FRONT_CART_SLIDER_INITIAL_SHOW = "FRONT_CART_SLIDER_INITIAL_SHOW";


const types = {
    // カート内商品の変更
    FRONT_CART_MODIFY_PRODUCT_REQUEST,
    FRONT_CART_MODIFY_PRODUCT_REQUEST_LOADING,
    FRONT_CART_MODIFY_PRODUCT_REQUEST_SUCCESS,
    FRONT_CART_MODIFY_PRODUCT_REQUEST_FAILURE,
    
    // カートの取得
    FRONT_CART_REQUEST,
    FRONT_CART_REQUEST_LOADING,
    FRONT_CART_REQUEST_SUCCESS,
    FRONT_CART_REQUEST_FAILURE,
    
    //カートスレイダー
    FRONT_CART_SLIDER_SHOW,
    FRONT_CART_SLIDER_HIDE,
    FRONT_CART_SLIDER_INITIAL_SHOW
}

export default types;
