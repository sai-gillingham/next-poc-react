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

export function oAuthReceiveSessionDetailsSave(oAuthSessionDetails) {
    return {
        type: types.OAUTH_TOKEN_SAVE,
        payload: {
            oAuthSessionDetails: oAuthSessionDetails
        }
    }
}

const actions = {
    oAuthReceiveToken,
    oAuthReceiveSessionDetailsSave
};

export default actions;
