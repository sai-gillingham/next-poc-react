import React from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from "react-i18next";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

/**
 * @param {string} className - 親からのクラス名
 * @param {boolean} onMobileNavOpen - スマートフォンのナビメニュー開閉
 * @param {*} t - 翻訳ファイル
 * @param {Object} managerProfile - ログインユーザープロフィールデータ
 * @param {*} i18n - 翻訳ファイル
 * @param {*} rest - 他の変数
 */
const TopBar = ({
                    className,
                    onMobileNavOpen,
                    t,
                    managerProfile,
                    i18n,
                    ...rest
                }) => {

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
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
