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
import actions from "./actions";
import selectors from "./selectors";


/**
 * ログインリクエスト
 * @param data
 */
export function* oAuthSaveStateToLocalStorage(data) {
    yield put(actions.oAuthReceiveTokenSave(data.payload.token))
    let token = yield select(selectors.getAccessToken)        
    localStorage.setItem('oAuthToken', token);
    data.payload.navigation('/mypage/login');
    return;
}
