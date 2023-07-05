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

export const entryWatcherSagas = Object.values(watchersSagas);
// export {default as requestSelectors} from "./selectors";
export {default as requestOperations} from "./operations";
export {default as requestTypes} from "./types";
// export {default as requestForms} from "./forms"
export {entryState, default as entryReducer} from './reducers';
