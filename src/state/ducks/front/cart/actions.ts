import types from "./types";

export function modifyCartRequest(product_class_id : number, quantity : number) {
    console.log(product_class_id)
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

export function modifyCartRequestFailure(errorData) {
    return {
        type: types.FRONT_CART_MODIFY_PRODUCT_FAILURE,
        payload: {
            errorData: errorData
        }
    }
}

const actions = {
    // カート内商品の変更
    modifyCartRequest,
    modifyCartRequestLoading,
    modifyCartRequestSuccess,
    modifyCartRequestFailure
};

export default actions;
