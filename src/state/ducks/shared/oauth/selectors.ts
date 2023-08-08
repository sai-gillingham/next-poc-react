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

const selectors = {
    getOAuthCredentials
}

export default selectors;
