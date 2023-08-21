import React from 'react';
import {mergeWithDefaultForm} from "../../../../utils/Common";
import {validator} from "../../../../utils/Validate";
import {Field, Form, FormSpy} from "react-final-form";
import TextInput from "../../../atoms/form/TextInput";
import {loginForms, loginValidation} from "../../../../state/ducks/front/login";
import {Button, Container, Grid} from "@mui/material";
import {Code} from "@mui/icons-material";


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
        <Container sx={{p: 2}}>
            <div className={"my-5 bg-light py-4 px-5"}>
                <code style={{overflowWrap: "break-word"}}>
                    現在のセッショントークン: {oAuthSessionDetails?.access_token ?? "未ログイン"}
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
                        <Grid container>
                            <Grid item xs={12}>
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
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
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
                            </Grid>
                        </Grid>


                        <Grid container>
                            <Grid item xs={12}>
                                <Button
                                    variant="outlined"
                                    style={{marginTop: 10}}
                                    type="submit"
                                    disabled={invalid || pristine || loginFormLoading}
                                >
                                    {t('general.send')}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>)}
            />
        </Container>
    );
}

export default LoginComponent;
