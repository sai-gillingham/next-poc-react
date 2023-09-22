import React from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from "react-i18next";
import {AppBar, Badge, Box, Button, Card, Drawer, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {AccountCircle, ShoppingCart} from "@mui/icons-material";

/**
 *
 * @param className
 * @param onMobileNavOpen
 * @param t
 * @param i18n
 * @param oAuthSessionDetails
 * @param cartSliderShow
 * @param cartSliderShowState
 * @param cartSliderHide
 * @param rest
 * @constructor
 */
const TopBar = ({
                    className,
                    onMobileNavOpen,
                    t,
                    i18n,
                    oAuthSessionDetails,
                    cartSliderShow,
                    oAuthLogoutIrregular,
                    ...rest
                }) => {
    
    return (
        <Box>
            <AppBar position="static" color={"primary"}>
                <Toolbar>
                    <Link to="/" style={{textDecoration: 'none', color: "white"}}>
                        <Typography variant="h6" sx={{flexGrow: 1}}>
                            ECCUBE デモ
                        </Typography>
                    </Link>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Link to="/entry" style={{textDecoration: 'none', color: "white"}}>
                            <Button
                                key={"登録"}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {"登録"}
                            </Button>
                        </Link>
                        <Link to="/mypage/login" style={{textDecoration: 'none', color: "white"}}>
                            <Button
                                key={"ログイン"}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {"ログイン"}
                            </Button>
                        </Link>
                        <Link to="/product/detail/2" style={{textDecoration: 'none', color: "white"}}>
                            <Button
                                key={"購入"}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {"購入"}
                            </Button>
                        </Link>
                    </Box>
                    {oAuthSessionDetails?.access_token && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={() => cartSliderShow()}
                                color="inherit"
                            >
                                <Badge badgeContent={"!"} color="error">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                    <Box sx={{ flexGrow: 0 }}>
                        <Button variant="contained" color={"secondary"} onClick={() => oAuthSessionDetails?.access_token ?  oAuthLogoutIrregular() : console.log("Login")}>
                            {oAuthSessionDetails?.access_token ? "ログアウト" : "ログイン"}
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

TopBar.propTypes = {
    className: PropTypes.string,
    onMobileNavOpen: PropTypes.func
};

export default withTranslation('common')(TopBar);
