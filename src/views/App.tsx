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
    return {
        oAuthSessionDetails: state.oAuth.oAuthSessionDetails as null | object,
    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {}

const AppContainer = (
                          oAuthSessionDetails
                      ) => {

    return (
        <div>
            <ThemeProvider theme={EccubeFrontTheme}>
                <FrontLayout
                    oAuthSessionDetails={oAuthSessionDetails}
                />
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
