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
const sendLoginRequest = actions.sendLoginRequest;
const updateLoginForm = actions.updateLoginForm;

const operations = {
    sendLoginRequest,
    updateLoginForm
}

export default operations;
