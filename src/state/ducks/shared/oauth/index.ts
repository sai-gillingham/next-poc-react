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

export const oAuthSagaWatchers = Object.values(watchersSagas);
export {default as oAuthSelectors} from "./selectors";
export {default as oAuthOperations} from "./operations";
export {default as oAuthTypes} from "./types";
// export {default as oAuthForms} from "./forms"
// export {default as oAuthValidation} from "./validation"
export {oAuthState, default as oAuthReducer} from './reducers';
