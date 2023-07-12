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

export const loginWatcherSagas = Object.values(watchersSagas);
// export {default as loginSelectors} from "./selectors";
export {default as loginOperations} from "./operations";
export {default as loginTypes} from "./types";
export {default as loginForms} from "./forms"
export {default as loginValidation} from "./validation"
export {loginState, default as loginReducer} from './reducers';
