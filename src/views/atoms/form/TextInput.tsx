import React from 'react'
import {FieldRenderProps} from 'react-final-form';
import {FormControl, TextField} from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";

/**
 * Final FormプラグインとMaterial UI Formフィールドを結合するコンポーネント
 * final formの入力フェルド
 *
 * @param {string} name - テキストフィールドの名前
 * @param {*} onChange - テキスト変更イベント
 * @param {string} value - テキスト値
 * @param {number} multiline - テキストエリアの行数
 * @param {*} restInput - 他の属性
 * @param {Object} meta - final formメタ情報
 * @param loadingOnDisable - ロード中の状態
 * @param {*} rest - 他の属性
 * @returns {JSX.Element}
 */
type Props = FieldRenderProps<string, any>;

const TextInput: React.FC<Props> = ({
                                        input: {name, onChange, value, multiline = 0, ...restInput},
                                        meta,
                                        loadingOnDisable,
                                        errorMessages,
                                        ...rest
                                    }: Props) => {
    // const loadOnDisable = loadingOnDisable && rest.disabled ? classes.loadingOnDisable : undefined
    const loadOnDisable = undefined;
    errorMessages = errorMessages ? errorMessages : meta?.error;
    let style = {};
    if (rest?.noBold === true) {
        style = {fontWeight: 300, padding: "5px 15px"}
    }
    return (
        <FormControl fullWidth sx={{m: 1}}>
            <TextField
                className={[loadOnDisable].join(" ")}
                {...rest}
                name={name}
                variant="standard"
                onKeyPress={e => {
                    e.key === "Enter" && e.preventDefault()
                }}
                error={errorMessages ? true : false}
                disabled={rest.disabled}
                onChange={onChange}
                value={value}
            />
            {errorMessages && (
                <FormHelperText>
                    {errorMessages}
                </FormHelperText>
            )}
        </FormControl>)
}
export default TextInput;
