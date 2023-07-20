import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Field, Form, FormSpy} from 'react-final-form';
import {mergeWithDefaultForm} from "../../../../utils/Common";
import {entryForms, entryValidations} from "../../../../state/ducks/front/entry";
import TextInput from "../../../atoms/form/TextInput";
import {validator} from "../../../../utils/Validate";
import {useNavigate} from "react-router";

/**
 *
 * @param {*} t - 翻訳
 * @param registerLoading
 * @param registerEvent
 * @param entryData
 * @param entryFormUpdate
 * @returns {JSX.Element}
 * @constructor
 */
const EntryComponent = (
    {
        t,
        registerLoading,
        registerEvent,
        entryData,
        entryFormUpdate
    }) => {
    const navigation = useNavigate();
    return (
        <Container>
            <Form
                onSubmit={async (e) => {
                    e = mergeWithDefaultForm(e, entryForms.entryForm)
                    console.log(e);
                    if (!registerLoading) {
                        registerEvent(e, navigation);
                    }
                }}
                // ここでフォームデータを妥当性確認し、キーを変換します。
                validate={e => {
                    const validation = validator(e, entryValidations.entryForm);
                    console.log(validation);
                    return validation;
                }}
                // 初期値を設定します
                subscription={{ submitting: true, pristine: true }}
                // ここでは、フォームのレンダリングと制御を行います
                // エラー処理やダブルクリック防止などはここで行います
                render={({handleSubmit, form, submitting, pristine, invalid, values}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <FormSpy onChange={(state) => entryFormUpdate(state)} />
                        <Row>
                            <Col>
                                <Field
                                    name="name01"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.name.name01')}
                                />
                            </Col>
                            <Col>
                                <Field
                                    name="name02"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.name.name02')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="kana01"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.kana.kana01')}
                                />
                            </Col>
                            <Col>
                                <Field
                                    name="kana02"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.kana.kana02')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="pref"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.pref')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="postal_code"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.postal_code')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="addr01"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.address.addr01')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="addr02"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.address.addr02')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="phone_number"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.phone_number')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="email"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.email.first')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="plain_password"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.plain_password.first')}
                                />
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <Button 
                                    variant="primary" 
                                    style={{marginTop: 10}} 
                                    type="submit"
                                    disabled={invalid || pristine || registerLoading}
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

export default EntryComponent;
