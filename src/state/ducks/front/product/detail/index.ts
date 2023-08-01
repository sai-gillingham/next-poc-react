/**
 * //////////////////////////////////////////////////
 * REDUCKSメインファイル
 * --------------------------
 *
 * セレクタ、オペレーション、サガ、リデューサを束ねるメインファイル。
 * Reducksの他のコンポーネント（requests）と結合するために、主にducks/index.jsファイルにエクスポートされます。
 * ///////////////////////////////////////////////////
 */

import * as watchersSagas from './watchersSagas';

export const productDetailWatcherSagas = Object.values(watchersSagas);
// export {default as requestSelectors} from "./selectors";
export {default as productDetailOperations} from "./operations";
export {default as productDetailTypes} from "./types";
export {default as productDetailForms} from "./forms"
export {default as productDetailValidations} from "./validation"
export {productDetailState, default as productDetailReducer} from './reducers';
