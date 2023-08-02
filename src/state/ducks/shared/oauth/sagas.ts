/*
 * SAGA MIDDLEWARE (SAGAミドルウェア)
 * ---------------
 *
 * SAGAミドルウェアは、アクションとリデューサ間のアクションを解析し、アクションのTYPEに基づいてAPI関数を処理します。
 * すべてのSAGAミドルウェアは、<i>watchersSagas.js</i>から呼び出されます。
 * ////////////////
 */
import {call, put} from "redux-saga/effects";
import { select } from "redux-saga/effects";
import actions, {oAuthReceiveSessionDetailsSave} from "./actions";
import selectors from "./selectors";
import {callLogin} from "./api";


/**
 * ログインリクエスト
 * @param data
 */
export function* oAuthSaveStateToLocalStorage(data) {
    // @TODO: Fix client Details
    let sessionData = yield call(callLogin, {
        grant_type: 'authorization_code',
        client_id: 'e740f7c9c0f1162c022854a2549c1356',
        client_secret: 'd23fbaa51bb997b590e6d4fadfa98db0a2091593fb901cef9435a4d728fbef02fcabe3188681593e21137e7714c90d97cec018a60a4bc510dba1bb1dab2d842e',
        redirect_uri: 'http://localhost:3000/oauth/capture',
        code: data.payload.token
    })
    
    yield put(actions.oAuthReceiveSessionDetailsSave(sessionData))
    let token = yield select(selectors.getOAuthCredentials)        
    localStorage.setItem('oAuthCredentials', JSON.stringify(token));
    data.payload.navigation('/mypage/login');
    return;
}
