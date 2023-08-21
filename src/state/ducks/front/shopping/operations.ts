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
const mutateAndFetchOrder = actions.mutateAndFetchOrder;
const mutateAndFetchPaymentMethod = actions.mutateAndFetchPaymentMethod;

const operations = {
    mutateAndFetchOrder,
    mutateAndFetchPaymentMethod
}

export default operations;
