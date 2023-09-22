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

export const siteHealthState = {
    is_404: false,
    global_error: {}
}

export default function siteHealthStateReducer(state = siteHealthState, action) {
    
    switch (action.type) {
        case types.SITE_HEALTH_404_ERROR:
            return {
                ...state,
                is_404: state.is_404 = action.payload.is_404,
                global_error: state.global_error = action.payload.global_error
            }
        default:
            return state;
    }
}
