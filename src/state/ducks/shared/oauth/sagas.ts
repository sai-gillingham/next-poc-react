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
import {logoutAPI, refreshToken} from "./api";
import {oAuthSelectors} from "./index";


export function* oAuthRefreshAccessToken(data) {
    yield put(actions.oAuthRefreshTokenLoading())
    const access_token = yield select(oAuthSelectors.getOAuthCredentials);
    const lastRequestEvent = yield select(oAuthSelectors.getLastRequestEvent);
    try {
        const oAuthSession = yield call(refreshToken, access_token?.refresh_token);
        yield put(actions.oAuthRefreshTokenSuccess(oAuthSession?.data));
        localStorage.setItem('oAuthCredentials', JSON.stringify(oAuthSession?.data));
        yield put(actions.oAuthReceiveSessionDetailsSave(oAuthSession?.data));
        yield put(lastRequestEvent);
    } catch (e) {
        console.log(e);
        yield put(actions.oAuthRefreshTokenFailure(e));
    }
}

export function* oAuthLogoutRequest(data) {
    yield put(actions.oAuthLogoutIrregularLoading());
    const access_token = yield select(oAuthSelectors.getOAuthCredentials);
    try {
        yield call(logoutAPI, access_token?.access_token);
        localStorage.removeItem('oAuthCredentials');
        yield put(actions.oAuthLogoutIrregularSuccess());
    } catch (e) {
        console.log(e);
        yield put(actions.oAuthLogoutIrregularFailure(e));
    }
}
