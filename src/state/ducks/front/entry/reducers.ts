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
    entryForm: {},
    entryFormLoading: false,
    entryFormError: null
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
        default:
            return state;
    }
}
