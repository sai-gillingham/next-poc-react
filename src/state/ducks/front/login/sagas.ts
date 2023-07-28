/***
 * ////////////////
 * SAGA MIDDLEWARE (SAGAミドルウェア)
 * ---------------
 *
 * SAGAミドルウェアは、アクションとリデューサ間のアクションを解析し、アクションのTYPEに基づいてAPI関数を処理します。
 * すべてのSAGAミドルウェアは、<i>watchersSagas.js</i>から呼び出されます。
 * ////////////////
 */


import {call, put} from "redux-saga/effects";
import actions from "./actions";
import rootAction from "../../shared/oauth/actions"
import {callLogin} from "./api";
/**
 * ログインリクエスト
 * @param data
 */
export function* loginRequest(data) {
    yield put(actions.sendLoginLoading())
    try {
        const requests = yield call(callLogin, data.payload.formData);
        yield put(actions.sendLoginSuccess());
        localStorage.setItem('oAuthCredentials', JSON.stringify(requests.data));
        yield put(rootAction.oAuthReceiveSessionDetailsSave(requests.data))
        yield put(data.navigate('/mypage'));
    } catch (e) {
        console.log(e);
        yield put(actions.sendLoginFailure(e));
    }
}

