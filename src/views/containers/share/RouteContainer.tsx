import { Route, Routes } from "react-router-dom";
import React from "react";
import EntryContainer from "../front/entry/EntryContainer";
import EntryValidationContainer from "../front/entry/EntryValidationContainer";
import LoginContainer from "../front/auth/LoginContainer";
import CaptureOAuthTokenContainer from "../front/auth/oauth2/CaptureOAuthTokenContainer";
import ProductDetailContainer from "../front/product/detail/ProductDetailContainer";
import CartContainer from "../front/cart/CartContainer";
import ShoppingContainer from "../front/shopping/ShoppingContainer";
import ShoppingConfirmContainer from "../front/shopping/ShoppingConfirmContainer";
import ShoppingCompleteContainer from "../front/shopping/ShoppingCompleteContainer";

/**
 * urlに基づいてコンテナをロードする
 * @returns {JSX.Element}
 * @constructor
 */
const RouteContainer = () => {
    return (
        <div className="makeStyles-content-4">
            <Routes>
                {/** ログイン不要URLマッピング**/}
                {/** // @ts-ignore** **/}
                <Route path={"/entry"} element={<EntryContainer/>}/>
                <Route path={"/entry/confirm"} element={<EntryContainer/>}/>
                <Route path={"/entry/complete"} element={<EntryContainer/>}/>
                <Route path={"/entry/validation/:token"} element={<EntryValidationContainer/>}/>
                <Route path={"/mypage/login"} element={<LoginContainer/>}/>
                <Route path={"/oauth/capture"} element={<CaptureOAuthTokenContainer/>}/>
                <Route path={"product/detail/:pid"} element={<ProductDetailContainer/>}/>
                <Route path={"/cart"} element={<CartContainer/>}/>
                <Route path={"/shopping"} element={<ShoppingContainer/>}/>
                <Route path={"/shopping/confirm"} element={<ShoppingConfirmContainer/>}/>
                <Route path={"/shopping/complete"} element={<ShoppingCompleteContainer/>}/>
            </Routes>
        </div>
    )
}
export default RouteContainer
