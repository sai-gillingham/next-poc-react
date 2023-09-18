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

export const productDetailState = {
    productDetail: {},
    productDetailLoading: false,
    productDetailError: null
}

export default function productDetailReducer(state = productDetailState, action) {
    
    switch (action.type) {
        case types.FRONT_PRODUCT_DETAIL_REQUEST_LOADING:
            return {
                ...state,
                productDetailLoading: state.productDetailLoading = true,
                productDetailError: state.productDetailError = null
            }
        case types.FRONT_PRODUCT_DETAIL_REQUEST_SUCCESS:
            return {
                ...state,
                productDetailLoading: state.productDetailLoading = false,
                productDetail: state.productDetail = action.payload.productDetailData,
            }
        case types.FRONT_PRODUCT_DETAIL_REQUEST_FAILURE:
            return {
                ...state,
                productDetailLoading: state.productDetailLoading = false,
                productDetailError: state.productDetailError = action.payload.errorData,
            }
        default:
            return state;
    }
}
