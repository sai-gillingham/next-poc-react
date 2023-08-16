import React from "react";
import {Box, Button, Divider, Drawer, List, ListItem} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";
import LoadingAtom from "../../../../atoms/LoadingAtom";

const CartDrawer = (
    {
        t,
        cartSliderShowState,
        cartSliderHide,
        cartDetail,
        cartDetailLoading
    }) => {
    console.log(cartDetail);
    return (
        <React.Fragment key={"right"}>
            <Drawer anchor={"right"} open={cartSliderShowState} onClose={() => cartSliderHide()}>
                <Box
                    sx={{width: 350}}
                    role="presentation"
                >
                    <Box>
                        <CloseIcon onClick={() => cartSliderHide()}/>
                    </Box>
                    <Divider/>
                    {cartDetailLoading === true &&
                        <LoadingAtom/>
                    }
                    {cartDetailLoading === false && Array.isArray(cartDetail) &&
                        cartDetail.map((cart, index) => (
                            <>
                                <List key={"cart_" + index}>
                                    {cart?.CartItems.map((item, index) => (
                                        <ListItem key={"cart_item" + index} disablePadding>
                                            <code>
                                                商品名: {item?.ProductClass?.Product?.name}<br/>
                                                ※ 規格名1: {item?.ProductClass?.ClassCategory1?.name}<br/>
                                                ※ 規格名2: {item?.ProductClass?.ClassCategory2?.name}<br/>
                                                価格: ￥{item?.ProductClass?.price01}<br/>
                                                数量: {item?.quantity}<br/>
                                            </code>
                                        </ListItem>
                                    ))}
                                </List>
                                <Divider/>
                            </>
                        ))
                    }
                    <Box marginTop="10" my={1}>
                        <Link to={"/cart"}>
                            <Button variant={"contained"} color={"primary"}>カートを見る</Button>
                        </Link>
                    </Box>
                </Box>
            </Drawer>
        </React.Fragment>
    );
}

export default CartDrawer;



