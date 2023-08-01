import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
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
        updateLoginForm,
        oAuthSessionDetails
    }) => {

    return (
        <Container>
            <div className="bg-light p-5 mt-5 mb-5">
                <div className="d-grid gap-2">
                    <Button className="fullWidth" href="http://localhost:8080/admin/authorize?response_type=code&client_id=e740f7c9c0f1162c022854a2549c1356&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth%2Fcapture&scope=read+write&state=xxx" variant={"primary"}>デバッグ用:
                        管理者としてログイン</Button>
                </div>
            </div>
            
            <div className={"my-5 bg-light py-4 px-5"}>
                <code>
                    現在のセッショントークン: {oAuthSessionDetails?.toString ?? "未ログイン"}
                </code>
            </div>

            
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
                subscription={{submitting: true, pristine: true}}
                // ここでは、フォームのレンダリングと制御を行います
                // エラー処理やダブルクリック防止などはここで行います
                render={({handleSubmit, form, submitting, pristine, invalid, values}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <FormSpy onChange={(state) => updateLoginForm(state)}/>
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
                                    type="password"
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
