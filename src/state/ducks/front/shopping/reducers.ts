/***
 * /////////////////////////////////////////
 * REDUCERS (リデューサー)
 * -------------------
 *
 * すべてのリアクトのマネージャーアカウントの一時的なデータが保存される領域。
 * アプリケーションのどこでもデータを使用することができます。
 *
 * Reducerイベントは、ステートへのセッター命令のみを **実行すべき** です。
 *
 * このReducerのステートは、/src/state/ducks/index.jsに設定されているrequestsグループに束縛されています。
 * //////////////////////////////////////////
 */
import types from "./types";

export const shoppingState = {
    loadingOrder: true,
    order: {},
    orderError: {}
}

export default function shoppingReducer(state = shoppingState, action) {
    switch (action.type) {
        case types.FRONT_SHOPPING_ORDER_LOADING:
            return {
                ...state,
                loadingOrder: state.loadingOrder = true
            }
        case types.FRONT_SHOPPING_ORDER_SUCCESS:
            return {
                ...state,
                loadingOrder: state.loadingOrder = false,
                order: state.order = action.payload.order
            }
        case types.FRONT_SHOPPING_ORDER_FAILURE:
            return {
                ...state,
                loadingOrder: state.loadingOrder = false,
                orderError: state.orderError = action.payload.errorData
            }
        default:
            return state;
    }
}


