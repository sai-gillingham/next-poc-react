import actions from "./actions";

/***
 * /////////////////////////////////////////////////////////
 * OPERATIONS オペレーション
 * --------------------
 *
 * ミドルウェアを必要とするすべてのアクションまたはアクションのためのバインドで、一緒にバインドされます。
 * このファイルでは、ミドルウェアのインジェクションを必要とするアクションはありませんが、その例がここにあります。
 * 例: https://github.com/alexnm/re-ducks#operations (英語)
 * ////////////////////////////////////////////////////////
 */
const oAuthReceiveToken = actions.oAuthReceiveToken;
const oAuthReceiveSessionDetailsSave = actions.oAuthReceiveSessionDetailsSave;
const oAuthRefreshToken = actions.oAuthRefreshToken;
const oAuthLogoutIrregular = actions.oAuthLogoutIrregular;

const operations = {
    oAuthReceiveToken,
    oAuthReceiveSessionDetailsSave,
    oAuthRefreshToken,
    oAuthLogoutIrregular
}

export default operations;
