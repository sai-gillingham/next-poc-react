import React from 'react';
import {Box, Button, Container, Grid, Skeleton} from "@mui/material";
import {modifyCartProduct} from "../../../../../state/ducks/front/cart/api";

const ProductDetailComponent = (
    {
        t,
        productDetail,
        productDetailLoading,
        productDetailError,
        oAuthSessionDetails,
        modifyCartRequest
    }) => {

    return (
        <Container>
            {productDetailLoading === true && productDetailError === null &&
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
            {productDetailLoading === false && productDetailError === null &&
                <Box sx={{p: 2}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <img
                                src={process.env.REACT_APP_API_URL + "/html/upload/save_image/" + productDetail?.ProductImage?.[0]?.file_name}
                                alt={productDetail.name}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <h1>{productDetail.name}</h1>
                            <p>{productDetail.description_detail}</p>
                            <p>{productDetail?.ProductClasses?.[0]?.price01}円</p>
                            <Button variant="contained" color="primary" onClick={() => modifyCartRequest(productDetail?.ProductClasses?.[0]?.id, 1) }>
                                {t("product_detail.add_cart")}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            }
        </Container>
    )
}

export default ProductDetailComponent;
