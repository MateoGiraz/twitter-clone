import Joi from 'joi'

export const validateUser = (user) => {
  const JoiSchema = new Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    pass: Joi.string().min(5).required(),
    name: Joi.string().min(5).required(),
    username: Joi.string().min(5).required(),
    isAdmin: Joi.boolean().required(),
    photo: Joi.string(),
    lname: Joi.string()
  })
  return JoiSchema.validate(user)
}