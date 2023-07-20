import types from "./types";

export function oAuthReceiveToken(token, navigation) {
    return {
        type: types.OAUTH_TOKEN_RECEIVE,
        payload: {
            token: token,
            navigation: navigation
        }
    }
}

export function oAuthReceiveTokenSave(token) {
    return {
        type: types.OAUTH_TOKEN_SAVE,
        payload: {
            token: token
        }
    }
}

const actions = {
    oAuthReceiveToken,
    oAuthReceiveTokenSave
};

export default actions;
