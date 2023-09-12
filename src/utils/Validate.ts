// Validator for final form

import Joi from "joi";
import {entryValidations} from "../state/ducks/front/entry";

export const validator = (values, schema: Joi.ObjectSchema) => {
    const validation = schema.validate(values, {abortEarly: false});
    return validation.error?.details.reduce((errors, error) => {
        return {
            ...errors,
            [error.context?.label]: error.message
        }
    }) || {};
};
