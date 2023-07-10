import { Route, Routes } from "react-router-dom";
import React from "react";
import EntryContainer from "../front/EntryContainer";

/**
 * urlに基づいてコンテナをロードする
 * @returns {JSX.Element}
 * @constructor
 */
const RouteContainer = () => {
    return (
        <div className="makeStyles-content-4">
            <div>
                Text
            </div>
            <Routes>
                {/** ログイン不要URLマッピング**/}
                {/** // @ts-ignore** **/}
                <Route path={"/entry"} element={<EntryContainer/>}/>
                <Route path={"/entry/confirm"} element={<EntryContainer/>}/>
                <Route path={"/entry/complete"} element={<EntryContainer/>}/>
            </Routes>
        </div>
    )
}
export default RouteContainer
