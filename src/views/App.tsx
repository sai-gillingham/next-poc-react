import React from 'react';
import {Route} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {ThemeProvider} from "react-bootstrap";
import FrontLayout from "./layout/front/Layout";

/**
 * メインビューコンポーネント、すべてのビューはここからロードされます。
 */
const mapStateToProps = state => {
    return {

    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {

}

const AppContainer = () => {

    return (
        <div>
            <Route path='/'>
                <ThemeProvider>
                    <FrontLayout/>
                </ThemeProvider>
            </Route>
        </div>
    )
}

/**
 * ロードされたreduxのステートとプロップを上記のコンポーネントにプッシュします。
 * 注：翻訳ライブラリとルーターライブラリもここで呼ばれます。
 */

export const App = compose(
    connect(mapStateToProps, mapEventToProps),
    withTranslation('common'))(AppContainer) as React.ElementType
