import Joi from "joi";

const UserValidator = Joi.object({
    name:Joi.string().required(),
    username:Joi.string().required(),
    email:Joi.string().required(),
})

export {
    UserValidator
}