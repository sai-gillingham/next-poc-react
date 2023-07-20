import { Route, Routes } from "react-router-dom";
import React from "react";
import EntryContainer from "../front/entry/EntryContainer";
import EntryValidationContainer from "../front/entry/EntryValidationContainer";
import LoginContainer from "../front/auth/LoginContainer";
import CaptureOAuthTokenContainer from "../front/auth/oauth2/CaptureOAuthTokenContainer";

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
            </Routes>
        </div>
    )
}
export default RouteContainer
