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
    orderError: {},
    
    paymentMethods: [],
    selectedPaymentMethod: null,
    paymentMethodsLoading: true,
    paymentMethodsError: {},
    
    confirmOrderLoading: false,
    confirmOrderError: {}
}

export default function shoppingReducer(state = shoppingState, action) {
    switch (action.type) {
        //////////////////////////////
        // 注文
        //////////////////////////////
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
            
        //////////////////////////////
        // 支払い方法
        //////////////////////////////
        case types.FRONT_SHOPPING_PAYMENT_METHOD_LOADING:
            return {
                ...state,
                paymentMethodsLoading: state.paymentMethodsLoading = true
            }
        case types.FRONT_SHOPPING_PAYMENT_METHOD_SUCCESS:
            return {
                ...state,
                paymentMethodsLoading: state.paymentMethodsLoading = false,
                paymentMethods: state.paymentMethods = action.payload.paymentMethods
            }
        case types.FRONT_SHOPPING_PAYMENT_METHOD_FAILURE:
            return {
                ...state,
                paymentMethodsLoading: state.paymentMethodsLoading = false,
                paymentMethodsError: state.paymentMethodsError = action.payload.errorData
            }
        //////////////////////////////
        // 注文を確定する
        //////////////////////////////
            case types.FRONT_SHOPPING_ORDER_CONFIRM_REQUEST_LOADING:
            {
                return {
                    ...state,
                    confirmOrderLoading: state.confirmOrderLoading = true
                }
            }
        case types.FRONT_SHOPPING_ORDER_CONFIRM_REQUEST_SUCCESS: {
            return {
                ...state,
                confirmOrderLoading: state.confirmOrderLoading = false,
                confirmOrderError: state.confirmOrderError = {}
            }
        }
        case types.FRONT_SHOPPING_ORDER_CONFIRM_REQUEST_FAILURE: {
            return {
                ...state,
                confirmOrderLoading: state.confirmOrderLoading = false,
                confirmOrderError: state.confirmOrderError = action.payload.errorData
            }
        }
            
        default:
            return state;
    }
}


