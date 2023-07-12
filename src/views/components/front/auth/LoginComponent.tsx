import React from 'react';
import {Alert, Button, Col, Container, Row} from "react-bootstrap";
import {mergeWithDefaultForm} from "../../../../utils/Common";
import {validator} from "../../../../utils/Validate";
import {Field, Form, FormSpy} from "react-final-form";
import TextInput from "../../../atoms/form/TextInput";
import {loginForms, loginValidation} from "../../../../state/ducks/front/login";


const LoginComponent = (
    {
        t,
        loginForm,
        loginFormLoading,
        loginFormError,
        sendLoginRequest,
        updateLoginForm
    }) => {
    
    return (
        <Container>
            <Form
                onSubmit={async (e) => {
                    e = mergeWithDefaultForm(e, loginForms.loginForm)
                    console.log(e);
                    if (!loginFormLoading) {
                        sendLoginRequest(e);
                    }
                }}
                // ここでフォームデータを妥当性確認し、キーを変換します。
                validate={e => {
                    const validation = validator(e, loginValidation.loginForm);
                    console.log(validation);
                    return validation;
                }}
                // 初期値を設定します
                subscription={{ submitting: true, pristine: true }}
                // ここでは、フォームのレンダリングと制御を行います
                // エラー処理やダブルクリック防止などはここで行います
                render={({handleSubmit, form, submitting, pristine, invalid, values}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <FormSpy onChange={(state) => updateLoginForm(state)} />
                        <Row>
                            <Col>
                                <Field
                                    name="username"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={loginFormLoading}
                                    disabled={loginFormLoading}
                                    component={TextInput}
                                    label={t('login.username')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="password"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={loginFormLoading}
                                    disabled={loginFormLoading}
                                    component={TextInput}
                                    label={t('login.password')}
                                />
                            </Col>
                        </Row>
                        

                        <Row>
                            <Col>
                                <Button
                                    variant="primary"
                                    style={{marginTop: 10}}
                                    type="submit"
                                    disabled={invalid || pristine || loginFormLoading}
                                >
                                    {t('general.send')}
                                </Button>
                            </Col>
                        </Row>
                    </form>)}
            />
        </Container>
    );
}

export default LoginComponent;
