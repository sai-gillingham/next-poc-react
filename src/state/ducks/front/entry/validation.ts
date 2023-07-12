import Joi from "joi";
import { tlds } from '@hapi/tlds';

// Review Form
export const entryForm = Joi.object({
    name01: Joi.string().required().max(255),
    name02: Joi.string().required().max(255),
    email: Joi.string().required().max(255).email({ tlds: { allow: tlds }} as Joi.EmailOptions),
    postalCode: Joi.string().required().max(9),
    phoneNumber: Joi.string().required().max(11),
    addr01: Joi.string().required().max(255),
    addr02: Joi.string().required().max(255),
    plainPassword: Joi.string().required().max(255).min(8),
});

const validationForms = {
    entryForm
}

export default validationForms;
