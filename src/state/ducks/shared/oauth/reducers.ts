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
    request_last_state: {},
    
    // ログイン情報
    oAuthSessionDetails: {},
    initialRequestFailure: false,
    
    // リフレッシュトークン
    refreshTokenLoading: false,
    refreshTokenError: {},
    
    // ログアウト
    logoutIrregularLoading: false,
    logoutIrregularError: {}
}

export default function loginReducer(state = oAuthState, action) {
    const failure_event_match = /FAILURE/.test(action.type);
    const request_last_state = /REQUEST$/.test(action.type);

    switch (action.type) {
        // ログイン
        case types.OAUTH_TOKEN_SAVE:
            return {
                ...state,
                oAuthSessionDetails: state.oAuthSessionDetails = action.payload.oAuthSessionDetails,
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
        // ログアウト
        case types.LOGOUT_REQUEST_IRREGULAR_LOADING: {
            return {
                ...state,
                logoutIrregularLoading: state.logoutIrregularLoading = true
            }
        }
        case types.LOGOUT_REQUEST_IRREGULAR_SUCCESS: {
            return {
                ...state,
                logoutIrregularLoading: state.logoutIrregularLoading = false,
                oAuthSessionDetails: state.oAuthSessionDetails = {}
            }
        }
        
        case types.LOGOUT_REQUEST_IRREGULAR_FAILURE: {
            return {
                ...state,
                logoutIrregularLoading: state.logoutIrregularLoading = false,
                logoutIrregularError: state.logoutIrregularError = action.payload.errorData
            }
        }
        
        // エラーキャッチ
        case failure_event_match && action.type: {
            return {
                ...state,
                initialRequestFailure: state.initialRequestFailure = true
            }
        }
        case request_last_state && action.type: {
            return {
                ...state,
                request_last_state: state.request_last_state = action
            }
        }
        default:
            return state;
    }
}
