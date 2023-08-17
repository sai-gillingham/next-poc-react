import types from "./types";

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



const actions = {
    mutateAndFetchOrder,
    mutateAndFetchOrderLoading,
    mutateAndFetchOrderSuccess,
    mutateAndFetchOrderFailure
};

export default actions;
