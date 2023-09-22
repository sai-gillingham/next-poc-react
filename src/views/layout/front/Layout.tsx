import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Contents from "../../components/share/Contents";
import CartContainer from "../../containers/share/CartContainer";
import {Drawer} from "@mui/material";
import CartDrawerContainer from "../../containers/front/cart/CartDrawerContainer";

const FrontLayout = ({
                         oAuthSessionDetails,
                         cartSliderShow,
                         oAuthLogoutIrregular
                     }) => {
    return (
        <div>
            <CartContainer>
                <Header
                    oAuthSessionDetails={oAuthSessionDetails}
                    cartSliderShow={cartSliderShow}
                    oAuthLogoutIrregular={oAuthLogoutIrregular}
                />
                <div>
                    <div>
                        <div>
                            <Contents/>
                            <CartDrawerContainer/>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </CartContainer>
        </div>
    );
};

export default FrontLayout;
