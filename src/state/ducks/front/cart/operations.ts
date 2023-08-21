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
const modifyCartRequest = actions.modifyCartRequest
const cartRequest = actions.cartRequest
const cartSliderShow = actions.cartSliderShow
const cartSliderHide = actions.cartSliderHide
const cartSliderInitialShow = actions.cartSliderInitialShow


const operations = {
    modifyCartRequest,
    cartRequest,
    cartSliderShow,
    cartSliderHide,
    cartSliderInitialShow
}

export default operations;
