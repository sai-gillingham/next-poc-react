import types from "./types";

// ログインアクションをまとめる
export function sendLoginRequest(formData, navigate) {
    return {
        type: types.FRONT_LOGIN_REQUEST,
        payload: {
            formData: formData,
        },
        navigate: navigate
    }
}

export function sendLoginLoading() {
    return {
        type: types.FRONT_LOGIN_LOADING
    }
}

export function sendLoginSuccess() {
    return {
        type: types.FRONT_LOGIN_SUCCESS
    }
}

export function sendLoginFailure(errorData) {
    return {
        type: types.FRONT_LOGIN_FAILURE,
        payload: {
            errorData: errorData
        }
    }
}



const actions = {    
    // ログインアクション
    sendLoginRequest,
    sendLoginLoading,
    sendLoginSuccess,
    sendLoginFailure,
};

export default actions;
