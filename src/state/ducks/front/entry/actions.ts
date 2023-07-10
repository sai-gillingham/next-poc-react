import types from "./types";

export function sendEntryRequest(formData) {
    return {
        type: types.FRONT_ENTRY_REQUEST,
        payload: {
            formData: formData
        }
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
        payload: params
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
