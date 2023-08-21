/***
 * ////////////////
 * SAGA MIDDLEWARE (SAGAミドルウェア)
 * ---------------
 *
 * SAGAミドルウェアは、アクションとリデューサ間のアクションを解析し、アクションのTYPEに基づいてAPI関数を処理します。
 * すべてのSAGAミドルウェアは、<i>watchersSagas.js</i>から呼び出されます。
 * ////////////////
 */
import {call, put, select} from "redux-saga/effects";
import actions, {mutateAndFetchOrderConfirmRequestLoading} from "./actions";
import {oAuthSelectors} from "../../shared/oauth";
import {orderMutationAPI, paymentMethodMutationAPI, purchaseMutationAPI} from "./api";

export function* mutateAndFetchOrder(data) {
    yield put(actions.mutateAndFetchOrderLoading())
    const access_token = yield select(oAuthSelectors.getOAuthCredentials);
    try {
        const order = yield call(orderMutationAPI, access_token?.access_token);
        yield put(actions.mutateAndFetchOrderSuccess(order?.data?.orderMutation));
    } catch (e) {
        console.log(e);
        yield put(actions.mutateAndFetchOrderFailure(e));
    }
}

export function* mutateAndFetchPaymentMethod(data) {
    yield put(actions.mutateAndFetchPaymentMethodLoading())
    const access_token = yield select(oAuthSelectors.getOAuthCredentials);
    try {
        const paymentMethods = yield call(paymentMethodMutationAPI, access_token?.access_token, data.payload.payment_method_id);
        yield put(actions.mutateAndFetchPaymentMethodSuccess(paymentMethods?.data?.paymentMethodMutation));
        const order = yield call(orderMutationAPI, access_token?.access_token);
        yield put(actions.mutateAndFetchOrderSuccess(order?.data?.orderMutation));
    } catch (e) {
        console.log(e);
        yield put(actions.mutateAndFetchPaymentMethodFailure(e));
    }
}

export function* mutateAndFetchOrderConfirmRequest(data) {
    yield put(actions.mutateAndFetchOrderConfirmRequestLoading())
    const access_token = yield select(oAuthSelectors.getOAuthCredentials);
    try {
        yield call(purchaseMutationAPI, access_token?.access_token);
        yield put(actions.mutateAndFetchOrderConfirmRequestSuccess());
        yield put(data.navigate('/shopping/complete'));
    } catch (e) {
        console.log(e);
        yield put(actions.mutateAndFetchOrderConfirmRequestFailure(e));
    }
}
