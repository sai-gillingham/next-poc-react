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

export const loginState = {
    // ログイン情報
    loginForm: {},
    loginFormLoading: false,
    loginFormError: null,
}

export default function loginReducer(state = loginState, action) {
    switch (action.type) {
        case types.FRONT_LOGIN_REQUEST:
        case types.FRONT_LOGIN_FORM_UPDATE:
            return {
                ...state,
                loginForm: state.loginForm = action.payload.formData,
            }
        case types.FRONT_LOGIN_LOADING:
            return {
                ...state,
                loginFormLoading: state.loginFormLoading = true
            }
        case types.FRONT_LOGIN_SUCCESS:
            return {
                ...state,
                loginFormLoading: state.loginFormLoading = false,
                loginForm: state.loginForm = {},
            }
        case types.FRONT_LOGIN_FAILURE:
            return {
                ...state,
                loginFormLoading: state.loginFormLoading = false,
                loginFormError: state.loginFormError = action.payload.errorData,
                loginForm: state.loginForm = {},
            }
        default:
            return state;
    }
}
