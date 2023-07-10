import React from 'react'
import {Badge, Form} from 'react-bootstrap';
import { FieldRenderProps } from 'react-final-form';

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
                                ...rest
                            }: Props) => {
    // const loadOnDisable = loadingOnDisable && rest.disabled ? classes.loadingOnDisable : undefined
    const loadOnDisable = undefined;
    let style = {};
    if(rest?.noBold === true) {
        style = {fontWeight: 300}
    }
    return (
        <div>
            <Form.Label htmlFor="inputPassword5" className={loadOnDisable} style={style}>
                {rest.label}
                {rest.required &&
                    <Badge className={[loadOnDisable].join(" ") }>必須</Badge>
                }
            </Form.Label>
            <Form.Control
                className={[loadOnDisable].join(" ")}
                {...rest}
                name={name}
                onKeyPress={e => {e.key === "Enter" && e.preventDefault()}}
                disabled={rest.disabled}
                onChange={onChange}
                value={value}
            />
            {meta.error && meta.touched && (
                <Form.Control.Feedback type="invalid">
                    {meta.error}
                </Form.Control.Feedback>
            )}
        </div>)
}
export default TextInput;
