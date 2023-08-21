import React from "react";
import {FieldRenderProps} from "react-final-form";
import {Chip, FormControl, InputLabel, Select as MSelect} from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';

type Props = FieldRenderProps<string, any>;

/**
 * Final FormプラグインとReact Bootstrapフィールドを結合するコンポーネント
 * final formのテキストエリア
 *
 * @param {string} name - 項目フィールドの名前
 * @param {*} onChange - 項目変更イベント
 * @param {string} value - 項目値
 * @param {*} restInput - 他の属性
 * @param {Object} meta - final formメタ情報
 * @param loadingOnDisable - ロード中の状態
 * @param inputStyle
 * @param options
 * @param showError
 * @param t
 * @param {*} rest - 他の属性
 * @returns {JSX.Element}
 */
const Select: React.FC<Props> = (
        {
            input: {name, onChange, value, ...restInput},
            meta,
            loadingOnDisable,
            options,
            showError = true,
            t,
            ...rest
        }: Props) => {
        // const loadOnDisable = loadingOnDisable && rest.disabled ? classes.loadingOnDisable : undefined
        const loadOnDisable = undefined;
        return (
            <FormControl fullWidth>
                {rest.label &&
                    <div>
                        <InputLabel className={loadOnDisable}>
                            {/* この項目は必須ですか？ チェック */}
                            {rest.label}
                            {rest.required &&
                                <Chip className={[loadOnDisable].join(" ") } label="必須"></Chip>
                            }
                        </InputLabel>
                        <br/>
                    </div>
                }
                    <MSelect
                        className={loadOnDisable}
                        name={name}
                        style={rest.inputStyle}
                        data-testid={name}
                        onKeyPress={e => {e.key === "Enter" && e.preventDefault()}}
                        disabled={rest.disabled}
                        onChange={onChange}
                        value={value}
                    >
                        <option key={0} value="">選択してください</option>
                        { options && options.map((option) => (
                            <option data-testid={option.value} key={option.id} value={option.value}>{t(option.translation_view)}</option>
                        ))}
                    </MSelect>
                {meta.error && meta.touched && showError &&
                    <FormHelperText>Error</FormHelperText>
                }
            </FormControl>
        )
    }
;

export default Select;
