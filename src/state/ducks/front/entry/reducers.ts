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

export const entryState = {
    // 仮会員登録情報
    entryForm: {},
    entryFormLoading: false,
    entryFormError: null,
    // 本会員登録情報
    validationToken: null,
    validationLoading:  false,
    validationError: null
}

export default function entryReducer(state = entryState, action) {
    switch (action.type) {
        case types.FRONT_ENTRY_REQUEST:
            return {
                ...state,
                entryForm: {
                    ...state.entryForm,
                    ...action.payload
                },
                entryFormError: null
            }
        case types.FRONT_ENTRY_LOADING:
            return {
                ...state,
                entryFormLoading: state.entryFormLoading = true
            }
        case types.FRONT_ENTRY_SUCCESS:
            return {
                ...state,
                entryFormLoading: state.entryFormLoading = false
            }
        case types.FRONT_ENTRY_FAILURE:
            return {
                ...state,
                entryFormError: action.payload,
                entryFormLoading: state.entryFormLoading = false
            }
        case types.FRONT_ENTRY_FORM_UPDATE:
            return {
                ...state,
                entryForm: state.entryForm = action.payload
            }
        // 本会員登録
        case types.FRONT_ENTRY_VALIDATION_REQUEST:
            return {
                ...state,
                validationToken: state.validationToken = action.payload.token
            }
        case types.FRONT_ENTRY_VALIDATION_LOADING:
            return {
                ...state,
                validationLoading: state.validationLoading = true
            }
        case types.FRONT_ENTRY_VALIDATION_SUCCESS:
            return {
                ...state,
                validationLoading: state.validationLoading = false
            }
        case types.FRONT_ENTRY_VALIDATION_FAILURE:
            return {
                ...state,
                validationError: state.validationError = action.payload,
                validationLoading: state.validationLoading = false
            }
        default:
            return state;
    }
}
