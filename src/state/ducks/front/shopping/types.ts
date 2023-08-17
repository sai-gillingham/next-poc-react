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

// 注文エベント
const FRONT_SHOPPING_ORDER = "FRONT_SHOPPING_ORDER";
const FRONT_SHOPPING_ORDER_LOADING = "FRONT_SHOPPING_ORDER_LOADING";
const FRONT_SHOPPING_ORDER_SUCCESS = "FRONT_SHOPPING_ORDER_SUCCESS";
const FRONT_SHOPPING_ORDER_FAILURE = "FRONT_SHOPPING_ORDER_FAILURE";

const types = {
    FRONT_SHOPPING_ORDER,
    FRONT_SHOPPING_ORDER_LOADING,
    FRONT_SHOPPING_ORDER_SUCCESS,
    FRONT_SHOPPING_ORDER_FAILURE
}

export default types;
