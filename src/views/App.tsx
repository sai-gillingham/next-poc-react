import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import FrontLayout from "./layout/front/Layout";
import {ThemeProvider} from "@mui/material";
import EccubeFrontTheme from "./theme/front/EccubeFrontTheme";

/**
 * メインビューコンポーネント、すべてのビューはここからロードされます。
 */
const mapStateToProps = state => {
    return {}
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {}

const AppContainer = () => {

    return (
        <div>
            <ThemeProvider theme={EccubeFrontTheme}>
                <FrontLayout/>
            </ThemeProvider>
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
