import React from 'react';
import {Field, Form, FormSpy} from 'react-final-form';
import {mergeWithDefaultForm} from "../../../../utils/Common";
import {entryForms} from "../../../../state/ducks/front/entry";
import TextInput from "../../../atoms/form/TextInput";
import {useNavigate} from "react-router";
import {Button, Container, Grid, Typography} from "@mui/material";
import Select from "../../../atoms/form/Select";

/**
 *
 * @param {*} t - 翻訳
 * @param registerLoading
 * @param registerEvent
 * @param entryData
 * @param entryFormUpdate
 * @param states
 * @param entryFormErrorFields
 * @returns {JSX.Element}
 * @constructor
 */
const EntryComponent = (
    {
        t,
        registerLoading,
        registerEvent,
        entryData,
        entryFormUpdate,
        states,
        entryFormErrorFields
    }: any): JSX.Element => {
    const navigation = useNavigate();
    console.log(entryFormErrorFields);
    return (
        <Container sx={{p: 2}}>
            <Typography variant={"h4"}>{t('entry.title')}</Typography>
            <Form
                onSubmit={async (e) => {
                    e = mergeWithDefaultForm(e, entryForms.entryForm)
                    console.log(e);
                    
                    if (!registerLoading) {
                        registerEvent(e, navigation);
                    }
                }}
                // ここでフォームデータを妥当性確認し、キーを変換します。
                // validate={e => {
                //     const validation = validator(e, entryValidations.entryForm);
                //     console.log(validation);
                //     return validation;
                // }}
                // 初期値を設定します
                subscription={{submitting: true, pristine: true}}
                // ここでは、フォームのレンダリングと制御を行います
                // エラー処理やダブルクリック防止などはここで行います
                render={({handleSubmit, form, submitting, pristine, invalid, values}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <FormSpy onChange={(state) => entryFormUpdate(state)}/>
                        <Grid container>
                            <Grid item xs={6}>
                                <Field
                                    name="name_name01"
                                    fullWidth
                                    required
                                    errorMessages={entryFormErrorFields?.name01}
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.name.name01')}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    name="name_name02"
                                    fullWidth
                                    required
                                    size={"small"}
                                    errorMessages={entryFormErrorFields?.name02}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.name.name02')}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6}>
                                <Field
                                    name="kana_kana01"
                                    fullWidth
                                    required
                                    size={"small"}
                                    errorMessages={entryFormErrorFields?.kana01}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.kana.kana01')}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    name="kana_kana02"
                                    fullWidth
                                    required
                                    size={"small"}
                                    errorMessages={entryFormErrorFields?.kana02}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.kana.kana02')}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Field
                                    name="address_pref"
                                    fullWidth
                                    required
                                    size={"small"}
                                    errorMessages={entryFormErrorFields?.pref}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={Select}
                                    t={t}
                                    options={states}
                                    label={t('entry.pref')}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Field
                                    name="postal_code"
                                    fullWidth
                                    required
                                    size={"small"}
                                    errorMessages={entryFormErrorFields?.postal_code}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.postal_code')}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Field
                                    name="address_addr01"
                                    fullWidth
                                    required
                                    size={"small"}
                                    errorMessages={entryFormErrorFields?.addr01}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.address.addr01')}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Field
                                    name="address_addr02"
                                    fullWidth
                                    required
                                    size={"small"}
                                    errorMessages={entryFormErrorFields?.addr02}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.address.addr02')}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Field
                                    name="phone_number"
                                    fullWidth
                                    required
                                    size={"small"}
                                    errorMessages={entryFormErrorFields?.phone_number}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.phone_number')}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Field
                                    name="email"
                                    fullWidth
                                    required
                                    size={"small"}
                                    errorMessages={entryFormErrorFields?.email}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.email.first')}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Field
                                    name="plain_password"
                                    fullWidth
                                    required
                                    size={"small"}
                                    errorMessages={entryFormErrorFields?.plain_password}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.plain_password.first')}
                                />
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    style={{marginTop: 10}}
                                    type="submit"
                                    disabled={invalid || pristine || registerLoading}
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

export default EntryComponent;
