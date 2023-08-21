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
const fetchProductDetailRequest = actions.fetchProductDetailRequest


const operations = {
    fetchProductDetailRequest
}

export default operations;
