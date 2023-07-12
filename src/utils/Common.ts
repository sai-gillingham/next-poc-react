/**
 * ///////////////////////////////////////////////
 * 共通ユーティリティファイル
 * ----------------------------------
 *
 *  アプリケーションで使用される基本ユーティリティー関数
 * ///////////////////////////////////////////////
 */

import {matchRoutes, useLocation} from "react-router";

/**
 * 現在のフォーム内容とフォームテンプレをマージする。
 * @param currentForm 送信したフォーム
 * @param defaultForm テンプレフォーム
 */
export function mergeWithDefaultForm(currentForm, defaultForm) {
    return {
        ...defaultForm,
        ...currentForm
    }
}

/**
 * 文字をインデックスキーに変換して配列に格納する
 * @param substring - 探しているインデックス
 * @param string - 全体文字列
 * @returns {string|Array|null} - インデックス配列
 */
export function stringIndexSearch(substring,string){
    let a=[],i=-1;
    while((i=string.indexOf(substring,i+1)) >= 0) a.push(i);
    return a;
}

/**
 * 文字列になっている数学演算子を元に戻って、インプット比較処理
 * @type {{"<=": (function(*, *): boolean), "<": (function(*, *): boolean), "===": (function(*, *): boolean), ">": (function(*, *): boolean), ">=": (function(*, *): boolean)}}
 */
export const stringOperatorsToMath = {
    '>=': function (x, y) { return x >= y },
    '>': function (x, y) { return x > y },
    '===': function (x, y) { return x === y },
    '<=': function (x, y) { return x <= y },
    '<': function (x, y) { return x < y },
}

/**
 * 通貨のフォーマット
 * @param {number} value - 数字
 * @returns {string} - フォーマットした通貨
 */
export function currencyFormatter(value) {
    const internationalFormatter = new Intl.NumberFormat('ja-JP', {
        style: "currency",
        currency: 'JPY'
    })
    return internationalFormatter.format(value)
}

