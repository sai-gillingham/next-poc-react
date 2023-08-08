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

export const cartState = {
    cartDetail: {},
    
    cartModifyLoading: false,
    cartModifyLoadingError: null
}

export default function cartReducer(state = cartState, action) {
    
    switch (action.type) {
        case types.FRONT_CART_MODIFY_PRODUCT_LOADING:
            return {
                ...state,
                cartModifyLoading: state.cartModifyLoading = true,
                cartModifyLoadingError: state.cartModifyLoadingError = null
            }
        case types.FRONT_CART_MODIFY_PRODUCT_SUCCESS:
            return {
                ...state,
                cartModifyLoading: state.cartModifyLoading = false
            }
        case types.FRONT_CART_MODIFY_PRODUCT_FAILURE:
            return {
                ...state,
                cartModifyLoading: state.cartModifyLoading = false,
                cartModifyLoadingError: state.cartModifyLoadingError = action.payload.errorData,
            }
        default:
            return state;
    }
}
