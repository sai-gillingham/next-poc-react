import React from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from "react-i18next";
import {Navbar} from "react-bootstrap";

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
        <Navbar expand="lg" className="bg-body-tertiary">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Navbar>
    );
};

TopBar.propTypes = {
    className: PropTypes.string,
    onMobileNavOpen: PropTypes.func
};

export default withTranslation('common')(TopBar);
