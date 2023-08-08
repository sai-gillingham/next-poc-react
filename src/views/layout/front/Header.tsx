import React from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from "react-i18next";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

/**
 * 
 * @param className
 * @param onMobileNavOpen
 * @param t
 * @param i18n
 * @param oAuthSessionDetails
 * @param rest
 * @constructor
 */
const TopBar = ({
                    className,
                    onMobileNavOpen,
                    t,
                    i18n,
                    oAuthSessionDetails,
                    ...rest
                }) => {

    console.log(oAuthSessionDetails?.oAuthSessionDetails)
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
                    <Box sx={{ flexGrow: 0 }}>
                        <Button variant="contained" color={"secondary"}>
                            {oAuthSessionDetails?.oAuthSessionDetails?.access_token ? "ログアウト" : "ログイン"}
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
