import React from 'react';
import {render} from 'react-dom';
import {Provider as ReduxProvider} from "react-redux";
import {App} from './views/App';
import configureStore from "./state/store";
import {BrowserRouter} from "react-router-dom";
import common_jp from "./translations/jp/common.json";
import common_en from "./translations/en/common.json";
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";
import storeProvider from "./StoreProvider";
/***
 * /////////////////////////////////////
 * コアREACTファイル
 * ------------------
 *
 * reactアプリケーションフローの始まり
 * すべての初期ライブラリがここで読み込まれます。
 * ここで読み込まれるライブラリは
 * * dotenv (環境変数について)
 * * i18next (翻訳について)
 * * Redux (グローバルなステート管理のために)
 * ////////////////////////////////////
 */

declare global {
  interface Window {
    REDUX_INITIAL_DATA?: typeof store;
  }
}

// 翻訳機能も追加。※ デフォルトは日本語
i18next.init({
  interpolation: {escapeValue: false},
  lng: 'jp',
  resources: {
    en: {
      common: common_en
    },
    jp: {
      common: common_jp
    },
  },
});

const configureStores = () => configureStore(window.REDUX_INITIAL_DATA);
storeProvider.init(configureStores)
const store = storeProvider.getStore();

// reactの最初表示を開始する。
render(
    <ReduxProvider store={store}>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </I18nextProvider>
    </ReduxProvider>,
    document.getElementById('root')
);
