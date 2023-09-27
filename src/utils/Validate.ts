// Validator for final form

import Joi from "joi";
import {i18n} from "i18next";

export const validator = (values, schema: Joi.ObjectSchema) => {
    // Joi validation has a unsatisfactory implementation for translation functionality >.<
    // @TODO: Find a better way to translate Joi validation errors
    const validation = schema.validate(values);
    const validationObject = [];
    
    validation.error?.details.forEach((errors) => {
        validationObject[errors.context?.label] = {field: errors.context.label, message: errors.type };
    });
    return validationObject;
}
export const translateResult = (i18Translation, validationResult : object) => {
    const translatedResult = [];
    for (const [key, value] of Object.entries(validationResult)) {
        translatedResult[key] = i18Translation('joi_validation.' + value.field) + i18Translation('joi_validation.' + value.message);
    }
    return translatedResult;
}
