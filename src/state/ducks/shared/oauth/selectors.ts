import types from "./types";

/**
 * ////////////////////////////////////////
 * SELECTORS (セレクタ)
 * -----------------
 *
 * リデューサーの生データをフィルタリングして、ビューにきれいな結果を提供するために使用されます。
 * ///////////////////////////////////////
 */
const getOAuthCredentials = state => state.oAuth.oAuthSessionDetails;

function getLastRequestEvent(state): string {
    return state.oAuth.request_last_state;
}

const selectors = {
    getOAuthCredentials,
    getLastRequestEvent
}

export default selectors;
