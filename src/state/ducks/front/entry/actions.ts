import types from "./types";

export function sendEntryRequest(formData, navigate) {
    
    return {
        type: types.FRONT_ENTRY_REQUEST,
        payload: {
            formData: formData,
        },
        navigate: navigate
    }
}

export function sendEntryLoading() {
    return {
        type: types.FRONT_ENTRY_LOADING
    }
}

export function sendEntrySuccess() {
    return {
        type: types.FRONT_ENTRY_SUCCESS
    }
}

export function sendEntryFailure(errorData) {
    return {
        type: types.FRONT_ENTRY_FAILURE,
        payload: {
            errorData: errorData
        }
    }
}

export function entryFormUpdate(params) {
    return {
        type: types.FRONT_ENTRY_FORM_UPDATE,
        payload: params.values
    }
}

export function sendEntryValidationRequest(token) {
    return {
        type: types.FRONT_ENTRY_VALIDATION_REQUEST,
        payload: {
            token: token
        }
    }
}

export function sendEntryValidationLoading() {
    return {
        type: types.FRONT_ENTRY_VALIDATION_LOADING
    }
}

export function sendEntryValidationSuccess() {
    return {
        type: types.FRONT_ENTRY_VALIDATION_SUCCESS
    }
}

export function sendEntryValidationFailure(errorData) {
    return {
        type: types.FRONT_ENTRY_VALIDATION_FAILURE,
        payload: {
            errorData: errorData
        }
    }
}



const actions = {
    // 仮会員登録アクション
    sendEntryRequest,
    sendEntryLoading,
    sendEntrySuccess,
    sendEntryFailure,
    entryFormUpdate,
    
    // 本会員登録アクション
    sendEntryValidationRequest,
    sendEntryValidationLoading,
    sendEntryValidationSuccess,
    sendEntryValidationFailure
};

export default actions;
