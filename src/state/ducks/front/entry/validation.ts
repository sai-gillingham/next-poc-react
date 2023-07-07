import Joi from "joi";

// Review Form
export const entryForm = Joi.object({
    name: {
        name01: Joi.string().required().max(255),
        name02: Joi.string().required().max(255)
    },
    kana: {
        kana01: Joi.string().required().max(255),
        kana02: Joi.string().required().max(255)
    },
    postal_code: Joi.string().required().max(9),
    pref: Joi.number().required().max(47),
    address: {
        addr01: Joi.string().required().max(255),
        addr02: Joi.string().required().max(255)
    },
    phone_number: Joi.string().required().max(11),
    email: {
        first: Joi.string().required().max(255).email(),
        second: Joi.string().required().max(255).email().equal(Joi.ref("first"))
    },
    plain_password: {
        first: Joi.string().required().max(255).min(8),
        second: Joi.string().required().max(255).min(8).equal(Joi.ref("first"))
    },
    birth: {
        year: Joi.string().required().max(4),
        month: Joi.string().required().max(2),
        day: Joi.string().required().max(2)
    },
    sex: Joi.number().required().max(4)
});

const validationForms = {
    entryForm
}

export default validationForms;
