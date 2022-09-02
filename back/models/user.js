import mongoose from "mongoose";
import Joi from "joi";

export const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
  }
})

const User = mongoose.model('User', userSchema)

export const validateUser = (user) =>{
  const JoiSchema = new Joi.object({
    name: Joi.string.min(5).required(),
    user: Joi.string.min(5).required(),
    isAdmin: Joi.boolean.required()
  })
  return JoiSchema.validate(user)
}

export default User
