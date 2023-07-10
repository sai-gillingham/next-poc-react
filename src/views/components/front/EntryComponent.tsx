import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Field, Form, FormSpy} from 'react-final-form';
import {mergeWithDefaultForm} from "../../../utils/Common";
import {entryForms, entryValidations} from "../../../state/ducks/front/entry";
import TextInput from "../../atoms/form/TextInput";
import FinalFormSelect from "../../atoms/form/Select";
import Select from "../../atoms/form/Select";
import FormToReduxConnectorContainer from "../../containers/share/FormToReduxConnectorContainer";
import {validator} from "../../../utils/Validate";

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

    return (
        <Container>
            <Form
                onSubmit={async (e) => {
                    e = mergeWithDefaultForm(e, entryForms.entryForm)
                    console.log(e);
                    if (!registerLoading) {
                        registerEvent(e);
                        console.log(e)
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
                                    name="entry.name.name01"
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
                                    name="entry.name.name02"
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
                                    name="entry.kana.kana01"
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
                                    name="entry.kana.kana02"
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
                                    name="entry.postal_code"
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
                                    name="entry.pref"
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
                                    name="entry.address.addr01"
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
                                    name="entry.address.addr02"
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
                                    name="entry.phone_number"
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
                                    name="entry.email.first"
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
                                    name="entry.email.second"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.email.second')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="entry.plain_password.first"
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
                                <Field
                                    name="entry.plain_password.second"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.plain_password.second')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="entry.birth.year"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.birth.year')}
                                />
                            </Col>
                            <Col>
                                <Field
                                    name="entry.birth.month"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.birth.month')}
                                />
                            </Col>
                            <Col>
                                <Field
                                    name="entry.birth.day"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component={TextInput}
                                    label={t('entry.birth.day')}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Field
                                    fullWidth
                                    size={"small"}
                                    name="entry.sex"
                                    component={Select}
                                    t={t}
                                    // 下記のデータをAPIから取るべきか？
                                    options={
                                        [
                                            {
                                                "translation_view": "sex.male",
                                                "value": "1",
                                                "id": "1"
                                            },
                                            {
                                                "translation_view": "sex.female",
                                                "value": "2",
                                                "id": "2"
                                            }
                                        ]
                                    }
                                    type="text"
                                    label={t('entry.sex')}
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
