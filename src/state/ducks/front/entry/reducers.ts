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

export const entryState = {
    entryForm: {},
    entryFormLoading: false,
    entryFormError: null
}

export default function entryReducer(state = entryState, action) {
    switch (action.type) {
        case 'ENTRY_FORM_UPDATE':
            return {
                ...state,
                entryForm: {
                    ...state.entryForm,
                    ...action.payload
                }
            }
        case 'ENTRY_FORM_LOADING':
            return {
                ...state,
                entryFormLoading: true
            }
        case 'ENTRY_FORM_ERROR':
            return {
                ...state,
                entryFormError: action.payload,
                entryFormLoading: false
            }
        default:
            return state;
    }
}
