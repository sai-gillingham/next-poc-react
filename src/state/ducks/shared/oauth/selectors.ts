import types from "./types";

/**
 * ////////////////////////////////////////
 * SELECTORS (セレクタ)
 * -----------------
 *
 * リデューサーの生データをフィルタリングして、ビューにきれいな結果を提供するために使用されます。
 * ///////////////////////////////////////
 */
function getAccessToken(state): string {
  return state.oAuth.accessToken;
}

const selectors = {
    getAccessToken
}

export default selectors;
