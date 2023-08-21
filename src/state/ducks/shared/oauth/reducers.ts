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
    oAuthSessionDetails: {},
    initialRequestFailure: false,
    
    // リフレッシュトークン
    refreshTokenLoading: false,
    refreshTokenError: {}
}

export default function loginReducer(state = oAuthState, action) {
    const failure_event_match = /FAILURE/.test(action.type);

    switch (action.type) {
        case types.OAUTH_TOKEN_SAVE:
            return {
                ...state,
                oAuthSessionDetails: state.oAuthSessionDetails = action.payload.oAuthSessionDetails,
            }
        case failure_event_match && action.type: {
            return {
                ...state,
                initialRequestFailure: state.initialRequestFailure = true
            }
        }
        case types.REFRESH_TOKEN_REQUEST_LOADING: {
            return {
                ...state,
                refreshTokenLoading: state.refreshTokenLoading = false
            }
        }
        
        case types.REFRESH_TOKEN_REQUEST_SUCCESS: {
            return {
                ...state,
                initialRequestFailure: state.initialRequestFailure = false,
                oAuthSessionDetails: state.oAuthSessionDetails = action.payload.oAuthSessionDetails
            }
        }
        case types.REFRESH_TOKEN_REQUEST_FAILURE: {
            return {
                ...state,
                refreshTokenLoading: state.refreshTokenLoading = false,
                refreshTokenError: state.refreshTokenError = action.payload.errorData
            }
        }
        default:
            return state;
    }
}
