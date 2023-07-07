import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Field, Form} from 'react-final-form';
import {mergeWithDefaultForm} from "../../../utils/Common";
import {entryForms, entryValidations} from "../../../state/ducks/front/entry";

/**
 *
 * @param {*} t - 翻訳
 * @param registerLoading
 * @param registerEvent
 * @param entryData
 * @returns {JSX.Element}
 * @constructor
 */
const EntryComponent = (
    {
        t,
        registerLoading,
        registerEvent,
        entryData
    }) => {
    return (
        <Container>
            <Form
                onSubmit={async (e) => {
                    e = mergeWithDefaultForm(e, entryForms.entryForm)
                    if (!registerLoading) {
                        registerEvent(e);
                    }
                }}
                // ここでフォームデータを妥当性確認し、キーを変換します。
                validate={e => {
                    return entryValidations.entryForm.validate(e)
                }}
                // 初期値を設定します
                initialValues={{
                    entry: entryData
                }}
                // ここでは、フォームのレンダリングと制御を行います
                // エラー処理やダブルクリック防止などはここで行います
                render={({handleSubmit, form, submitting, pristine, invalid, values}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Row>
                            <Col>
                                <Field
                                    name="entry[name][name01]"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component="text"
                                    label={t('addresses.postal_code')}
                                />
                            </Col>
                            <Col>
                                <Field
                                    name="entry[name][name02]"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component="text"
                                    label={t('addresses.postal_code')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="entry[kana][kana01]"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component="text"
                                    label={t('addresses.postal_code')}
                                />
                            </Col>
                            <Col>
                                <Field
                                    name="entry[kana][kana01]"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component="text"
                                    label={t('addresses.postal_code')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="first_name"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component="text"
                                    label={t('addresses.postal_code')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="first_name"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component="text"
                                    label={t('addresses.postal_code')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="first_name"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component="text"
                                    label={t('addresses.postal_code')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field
                                    name="first_name"
                                    fullWidth
                                    required
                                    size={"small"}
                                    loadingOnDisable={registerLoading}
                                    disabled={registerLoading}
                                    component="text"
                                    label={t('addresses.postal_code')}
                                />
                            </Col>
                        </Row>
                    </form>)}
            />
        </Container>
    );
}

export default EntryComponent;
