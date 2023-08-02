import types from "./types";

/**
 * ////////////////////////////////////////
 * SELECTORS (セレクタ)
 * -----------------
 *
 * リデューサーの生データをフィルタリングして、ビューにきれいな結果を提供するために使用されます。
 * ///////////////////////////////////////
 */
function getOAuthCredentials(state): string {
  return state.oAuth;
}

const selectors = {
    getOAuthCredentials
}

export default selectors;
