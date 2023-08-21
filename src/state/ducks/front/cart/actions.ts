import types from "./types";

// ==================================================
// カート内商品の変更
// ==================================================

export function modifyCartRequest(product_class_id : number, quantity : number) {
    return {
        type: types.FRONT_CART_MODIFY_PRODUCT,
        payload: {
            product_class_id: product_class_id,
            quantity: quantity
        }
    }
}

export function modifyCartRequestLoading() {
    return {
        type: types.FRONT_CART_MODIFY_PRODUCT_LOADING
    }
}

export function modifyCartRequestSuccess() {
    return {
        type: types.FRONT_CART_MODIFY_PRODUCT_SUCCESS
    }
}

export function modifyCartRequestFailure(errorData: any) {
    return {
        type: types.FRONT_CART_MODIFY_PRODUCT_FAILURE,
        payload: {
            errorData: errorData
        }
    }
}

// ==================================================
// カートの取得
// ==================================================
export function cartRequest() {
    return {
        type: types.FRONT_CART_REQUEST 
    }
}

export function cartRequestLoading() {
    return {
        type: types.FRONT_CART_REQUEST_LOADING
    }
}

export function cartRequestSuccess(cartData: object|null) {
    return {
        type: types.FRONT_CART_REQUEST_SUCCESS,
        payload: {
            cartData: cartData
        }
    }
}

export function cartRequestFailure(errorData: any) {
    return {
        type: types.FRONT_CART_REQUEST_FAILURE,
        payload: {
            errorData: errorData
        }
    }
}

// ==================================================
// カートスレイダー
// ==================================================
export function cartSliderShow() {
    return {
        type: types.FRONT_CART_SLIDER_SHOW
    }
}

export function cartSliderHide() {
    return {
        type: types.FRONT_CART_SLIDER_HIDE
    }
}

export function cartSliderInitialShow() {
    return {
        type: types.FRONT_CART_SLIDER_INITIAL_SHOW
    }
}

const actions = {
    // カート内商品の変更
    modifyCartRequest,
    modifyCartRequestLoading,
    modifyCartRequestSuccess,
    modifyCartRequestFailure,
    
    // カートの取得
    cartRequest,
    cartRequestLoading,
    cartRequestSuccess,
    cartRequestFailure,
    
    // カートスレイダー
    cartSliderShow,
    cartSliderHide,
    cartSliderInitialShow,
};

export default actions;
