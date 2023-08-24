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

export const shoppingWatcherSagas = Object.values(watchersSagas);
// export {default as requestSelectors} from "./selectors";
export {default as shoppingOperators} from "./operations";
export {default as shoppingTypes} from "./types";
export {default as shoppingForms} from "./forms"
export {default as shoppingValidation} from "./validation"
export {shoppingState, default as shoppingReducer} from './reducers';
