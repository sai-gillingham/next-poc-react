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



const actions = {
    sendEntryRequest,
    sendEntryLoading,
    sendEntrySuccess,
    sendEntryFailure,
    entryFormUpdate
};

export default actions;
