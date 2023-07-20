/***
 * /////////////////////////////////////////
 * REDUCERS (リデューサー)
 * -------------------
 *
 * すべてのリアクトのマネージャーアカウントの一時的なデータが保存される領域。
 * アプリケーションのどこでもデータを使用することができます。
 *
 * Reducerイベントは、ステートへのセッター命令のみを **実行すべき** です。
 *
 * このReducerのステートは、/src/state/ducks/index.jsに設定されているrequestsグループに束縛されています。
 * //////////////////////////////////////////
 */
import types from "./types";

export const oAuthState = {
    // ログイン情報
    token: null,
}

export default function loginReducer(state = oAuthState, action) {
    switch (action.type) {
        case types.OAUTH_TOKEN_SAVE:
            return {
                ...state,
                token: state.token = action.payload.token,
            }
        default:
            return state;
    }
}
