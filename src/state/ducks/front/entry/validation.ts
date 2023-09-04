import Joi from "joi";
import { tlds } from '@hapi/tlds';
import { auto_validation } from "./auto_validation";

// Review Form
export const entryCustomerSchema = Joi.object({
    name01: Joi.string().required().max(255),
    name02: Joi.string().required().max(255),
    kana01: Joi.string().required().max(255),
    kana02: Joi.string().required().max(255),
    email: Joi.string().required().max(255).email({ tlds: { allow: tlds }} as Joi.EmailOptions),
    pref: Joi.string().required().max(255),
    postal_code: Joi.string().required().max(9),
    phone_number: Joi.string().required().max(11),
    addr01: Joi.string().required().max(255),
    addr02: Joi.string().required().max(255),
    plain_password: Joi.string().required().max(255).min(8),
});

const validationForms = {
    ...auto_validation, 
    entryCustomerSchema,
}

export default validationForms;
