import Joi from "joi";
import { tlds } from '@hapi/tlds';

// ログインフォーム
export const loginForm = Joi.object({
    username: Joi.string().required().max(255),
    password: Joi.string().required().max(255).min(8),
});

const validationForms = {
    loginForm
}

export default validationForms;
