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
    cartModifyLoading: false,
    cartModifyLoadingError: null,

    cartDetail: {},
    cartDetailLoading: false,
    cartDetailLoadingError: null,

    cartSliderShow: false,
    initialCartSliderShow: true
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
        case types.FRONT_CART_REQUEST_LOADING:
            return {
                ...state,
                cartDetailLoading: state.cartDetailLoading = true,
                cartDetailLoadingError: state.cartDetailLoadingError = null
            }
        case types.FRONT_CART_REQUEST_SUCCESS:
            return {
                ...state,
                cartDetailLoading: state.cartDetailLoading = false,
                cartDetail: state.cartDetail = action.payload.cartData
            }
        case types.FRONT_CART_REQUEST_FAILURE:
            return {
                ...state,
                cartDetailLoading: state.cartDetailLoading = false,
                cartDetailLoadingError: state.cartDetailLoadingError = action.payload.errorData,
                cartDetail: state.cartDetail = {}
            }
        case types.FRONT_CART_SLIDER_INITIAL_SHOW:
            return {
                ...state,
                initialCartSliderShow: state.initialCartSliderShow = false
            }
        case types.FRONT_CART_SLIDER_SHOW:
            return {
                ...state,
                cartSliderShow: state.cartSliderShow = true,
            }
        case types.FRONT_CART_SLIDER_HIDE:
            return {
                ...state,
                cartSliderShow: state.cartSliderShow = false,
                initialCartSliderShow: state.initialCartSliderShow = true
            }
        default:
            return state;
    }
}
