import {Box, Button, Container, Divider, Grid, List, ListItem, Skeleton, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

const CartComponent = (
    {
        t,
        cartDetail,
        cartDetailLoading
    }) => {

    return (
        <Container>
            <Box paddingTop={5}>
                <Typography variant={"h4"}>カート内容</Typography>
                {cartDetailLoading === true &&
                    <>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Skeleton variant="rectangular" width={210} height={118}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Skeleton variant="text"/>
                                <Skeleton variant="text"/>
                                <Skeleton variant="text"/>
                                <Skeleton variant="text"/>
                            </Grid>
                        </Grid>
                    </>
                }
                {cartDetailLoading === false && Array.isArray(cartDetail) &&
                    <Box sx={{p: 2}}>
                        {cartDetail.map((cart, index) => (
                            <>
                                <List key={"cart_" + index}>
                                    {cart?.CartItems.map((item, index) => (
                                        <ListItem key={"cart_item" + index} disablePadding>
                                            <code>
                                                商品名: {item?.ProductClass?.Product?.name}<br/>
                                                ※ 規格名1: {item?.ProductClass?.ClassCategory1?.name}<br/>
                                                ※ 規格名2: {item?.ProductClass?.ClassCategory2?.name}<br/>
                                                価格: ￥{item?.price}<br/>
                                                数量: {item?.quantity}<br/>
                                            </code>
                                        </ListItem>
                                    ))}
                                </List>
                                <Divider/>
                                <Box>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12}>
                                            <Typography variant={"body1"} style={{textAlign: "right"}}>合計金額: ￥{cart?.total_price}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </>
                        ))}
                       
                    </Box>
                }
                <Link to={"/shopping"}>
                    <Button variant={"contained"} color={"primary"}>レジへ進む</Button>
                </Link>
            </Box>
        </Container>
    )
}

export default CartComponent;
