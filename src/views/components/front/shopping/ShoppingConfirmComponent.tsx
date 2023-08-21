import {Box, Button, Card, Container, Divider, Grid, Skeleton, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import {empty} from "../../../../utils/Common";

const ShoppingConfirmComponent = (
    {
        t,
        order,
        loadingOrder,
        orderError
    }) => {
    
    return (
        <Container>
            <Typography variant={"h4"}>ご注文内容のご確認</Typography>
            {loadingOrder === true &&
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
            {loadingOrder === false && !empty(order) &&
                <Box sx={{p: 2}}>
                    <Card variant={"outlined"}
                          style={{padding: "15px", marginBottom: "15px", backgroundColor: "#eeeeee"}}>
                        <Typography variant={"h5"}>お客様情報</Typography>
                        <Typography variant={"body1"}>お名前: {order?.name01} {order?.name02}</Typography>
                        <Typography variant={"body1"}>フリガナ: {order?.kana01} {order?.kana02}</Typography>
                        <Typography variant={"body1"}>会社名: {order?.company_name}</Typography>
                        <Typography variant={"body1"}>郵便番号: {order?.postal_code}</Typography>
                        <Typography variant={"body1"}>都道府県: {order?.Pref?.name}</Typography>
                        <Typography variant={"body1"}>住所: {order?.addr01} {order?.addr02}</Typography>
                        <Typography variant={"body1"}>電話番号: {order?.phone_number}</Typography>
                        <Typography variant={"body1"}>メールアドレス: {order?.email}</Typography>
                    </Card>
                    <Card variant={"outlined"}
                          style={{padding: "15px", marginBottom: "15px", backgroundColor: "#eeeeee"}}>
                        <Typography variant={"h5"}>配送情報</Typography>
                        {order?.Shippings &&
                            order?.Shippings.map((shipping, index) => (
                                <>
                                    <Typography
                                        variant={"body1"}>配送方法: {shipping?.shipping_delivery_name}</Typography>
                                    <Typography
                                        variant={"body1"}>配送日時: {shipping?.shipping_delivery_date}</Typography>
                                    <Typography
                                        variant={"body1"}>配送時間: {shipping?.shipping_delivery_time}</Typography>
                                    <Typography
                                        variant={"body1"}>お名前: {shipping?.name01} {shipping?.name02}</Typography>
                                    <Typography
                                        variant={"body1"}>フリガナ: {shipping?.kana01} {shipping?.kana02}</Typography>
                                    <Typography variant={"body1"}>会社名: {shipping?.company_name}</Typography>
                                    <Typography variant={"body1"}>都道府県: {shipping?.Pref?.name}</Typography>
                                    <Typography variant={"body1"}>郵便番号: {shipping?.postal_code}</Typography>
                                    <Typography
                                        variant={"body1"}>住所: {shipping?.addr01} {shipping?.addr02}</Typography>
                                    <Typography variant={"body1"}>電話番号: {shipping?.phone_number}</Typography>
                                    <Divider/>
                                    <Box paddingY={2}>
                                        <Typography variant={"h5"}>商品情報</Typography>
                                        {shipping?.OrderItems &&
                                            shipping?.OrderItems.map((item, index) => (
                                                <>
                                                    {item?.Product &&
                                                        <>
                                                            <img
                                                                src={"http://localhost:8080/html/upload/save_image/" + item?.Product?.ProductImage?.[0]?.file_name}
                                                                alt={item?.Product?.name}/>
                                                            <Typography
                                                                variant={"body1"}>商品名: {item?.product_name}</Typography>
                                                            <Typography
                                                                variant={"body1"}>商品コード: {item?.product_code}</Typography>
                                                            <Typography variant={"body1"}>価格:
                                                                ￥{item?.price}</Typography>
                                                            <Typography
                                                                variant={"body1"}>数量: {item?.quantity}</Typography>
                                                            <Typography variant={"body1"}>小計:
                                                                ￥{item.price * item?.quantity}</Typography>
                                                        </>
                                                    }
                                                </>
                                            ))
                                        }
                                    </Box>
                                </>
                            ))
                        }
                    </Card>
                    <Card variant={"outlined"}
                          style={{padding: "15px", marginBottom: "15px", backgroundColor: "#eeeeee"}}>
                        <Typography variant={"h5"}>お支払い情報</Typography>
                        <Typography variant={"body1"}>{order?.Payment?.method}</Typography>
                    </Card>
                </Box>
            }
            <Box paddingTop={5}>
                <Link to={"/cart"}>
                    <Button variant={"contained"} color={"primary"}>カートに戻る</Button>
                </Link>
                <Link to={"/shopping/confirm"}>
                    <Button variant={"contained"} color={"primary"}>確認する</Button>
                </Link>
            </Box>
        </Container>
    )
}

export default ShoppingConfirmComponent;
