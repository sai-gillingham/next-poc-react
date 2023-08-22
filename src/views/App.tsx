import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import FrontLayout from "./layout/front/Layout";
import {ThemeProvider} from "@mui/material";
import EccubeFrontTheme from "./theme/front/EccubeFrontTheme";
import {cartOperators} from "../state/ducks/front/cart";
import {oAuthOperations} from "../state/ducks/shared/oauth";

/**
 * メインビューコンポーネント、すべてのビューはここからロードされます。
 */
const mapStateToProps = state => {
    return {
        oAuthSessionDetails: state.oAuth.oAuthSessionDetails as null | object,
        logoutIrregularLoading: state.oAuth.logoutIrregularLoading as boolean,
    }
}

/**
 * Reduxアクション（これもコンポーネントのパラメータに挿入されます。)
 */
const mapEventToProps = {
    cartSliderShow: cartOperators.cartSliderShow,
    oAuthLogoutIrregular: oAuthOperations.oAuthLogoutIrregular
}

const AppContainer = ({
                          oAuthSessionDetails,
                          cartSliderShow,
                          oAuthLogoutIrregular
                      }) => {
    console.log(oAuthSessionDetails)
    return (
        <div>
            <ThemeProvider theme={EccubeFrontTheme}>
                <FrontLayout
                    oAuthSessionDetails={oAuthSessionDetails}
                    cartSliderShow={cartSliderShow}
                    oAuthLogoutIrregular={oAuthLogoutIrregular}
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
