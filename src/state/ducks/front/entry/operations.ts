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
const sendEntryRequest = actions.sendEntryRequest;
const entryFormUpdate = actions.entryFormUpdate;
const sendEntryValidationRequest = actions.sendEntryValidationRequest;


const operations = {
    sendEntryRequest,
    entryFormUpdate,
    sendEntryValidationRequest
}

export default operations;
