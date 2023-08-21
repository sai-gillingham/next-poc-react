import types from "./types";
//////////////////////////////
// OAUTHトークン受信と更新
//////////////////////////////
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
//////////////////////////////
// リフレッシュトークン
//////////////////////////////

export function oAuthRefreshToken() {
    return {
        type: types.REFRESH_TOKEN_REQUEST
    }
}

export function oAuthRefreshTokenLoading() {
    return {
        type: types.REFRESH_TOKEN_REQUEST_LOADING
    }
}

export function oAuthRefreshTokenSuccess(oAuthSessionDetails) {
    return {
        type: types.REFRESH_TOKEN_REQUEST_SUCCESS,
        payload: {
            oAuthSessionDetails: oAuthSessionDetails
        }
    }
}

export function oAuthRefreshTokenFailure(errorData: any) {
    return {
        type: types.REFRESH_TOKEN_REQUEST_FAILURE,
        payload: {
            errorData: errorData
        }
    }
}




const actions = {
    oAuthReceiveToken,
    oAuthReceiveSessionDetailsSave,

    oAuthRefreshToken,
    oAuthRefreshTokenLoading,
    oAuthRefreshTokenSuccess,
    oAuthRefreshTokenFailure
};

export default actions;
