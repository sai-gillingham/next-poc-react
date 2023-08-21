import types from "./types";

export function fetchProductDetailRequest(id : number) {
    return {
        type: types.FRONT_PRODUCT_DETAIL_REQUEST,
        payload: {
            id: id
        }
    }
}

export function fetchProductDetailLoading() {
    return {
        type: types.FRONT_PRODUCT_DETAIL_LOADING
    }
}

export function fetchProductDetailSuccess(productDetailData) {
    return {
        type: types.FRONT_PRODUCT_DETAIL_SUCCESS,
        payload: {
            productDetailData: productDetailData
        }
    }
}

export function fetchProductDetailFailure(errorData) {
    return {
        type: types.FRONT_PRODUCT_DETAIL_FAILURE,
        payload: {
            errorData: errorData
        }
    }
}

const actions = {
    // 商品詳細取得
    fetchProductDetailRequest,
    fetchProductDetailLoading,
    fetchProductDetailSuccess,
    fetchProductDetailFailure
};

export default actions;
