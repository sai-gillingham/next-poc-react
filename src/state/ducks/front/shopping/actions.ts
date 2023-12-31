import types from "./types";

//////////////////////////////
// 注文
//////////////////////////////
export function mutateAndFetchOrder() {
    console.log("G")
    return {
        type: types.FRONT_SHOPPING_ORDER
    }
}

export function mutateAndFetchOrderLoading() {
    console.log("L")
    return {
        type: types.FRONT_SHOPPING_ORDER_LOADING
    }
}

export function mutateAndFetchOrderSuccess(order) {
    return {
        type: types.FRONT_SHOPPING_ORDER_SUCCESS,
        payload: {
            order: order
        }
    }
}

export function mutateAndFetchOrderFailure(errorData: any) {
    return {
        type: types.FRONT_SHOPPING_ORDER_FAILURE,
        payload: {
            errorData: errorData
        }
    }
}

//////////////////////////////
// 支払い方法
//////////////////////////////
export function mutateAndFetchPaymentMethod(payment_method_id: number | null) {
    return {
        type: types.FRONT_SHOPPING_PAYMENT_METHOD,
        payload: {
            payment_method_id: payment_method_id
        }
    }
}

export function mutateAndFetchPaymentMethodLoading() {
    return {
        type: types.FRONT_SHOPPING_PAYMENT_METHOD_LOADING
    }
}

export function mutateAndFetchPaymentMethodSuccess(paymentMethods) {
    return {
        type: types.FRONT_SHOPPING_PAYMENT_METHOD_SUCCESS,
        payload: {
            paymentMethods: paymentMethods
        }
    }
}

export function mutateAndFetchPaymentMethodFailure(errorData: any) {
    return {
        type: types.FRONT_SHOPPING_PAYMENT_METHOD_FAILURE,
        payload: {
            errorData: errorData
        }
    }
}

//////////////////////////////
// 注文を確定する
//////////////////////////////
export function mutateAndFetchOrderConfirmRequest(navigate) {
    return {
        type: types.FRONT_SHOPPING_ORDER_CONFIRM_REQUEST,
        navigate: navigate
    }
}

export function mutateAndFetchOrderConfirmRequestLoading() {
    return {
        type: types.FRONT_SHOPPING_ORDER_CONFIRM_REQUEST_LOADING
    }
}

export function mutateAndFetchOrderConfirmRequestSuccess() {
    return {
        type: types.FRONT_SHOPPING_ORDER_CONFIRM_REQUEST_SUCCESS
    }
}

export function mutateAndFetchOrderConfirmRequestFailure(errorData: any) {
    return {
        type: types.FRONT_SHOPPING_ORDER_CONFIRM_REQUEST_FAILURE,
        payload: {
            errorData: errorData
        }
    }
}


const actions = {
    // 注文
    mutateAndFetchOrder,
    mutateAndFetchOrderLoading,
    mutateAndFetchOrderSuccess,
    mutateAndFetchOrderFailure,

    // 支払い方法
    mutateAndFetchPaymentMethod,
    mutateAndFetchPaymentMethodLoading,
    mutateAndFetchPaymentMethodSuccess,
    mutateAndFetchPaymentMethodFailure,

    // 注文を確定する
    mutateAndFetchOrderConfirmRequest,
    mutateAndFetchOrderConfirmRequestLoading,
    mutateAndFetchOrderConfirmRequestSuccess,
    mutateAndFetchOrderConfirmRequestFailure
};

export default actions;
