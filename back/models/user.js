import mongoose from "mongoose";
import Joi from "joi";

export const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  photo: {
    type: Buffer,
  },
  isAdmin: {
    type: Boolean,
  }
})

const User = mongoose.model('User', userSchema)

export const validateUser = (user) => {
  const JoiSchema = new Joi.object({
    name: Joi.string.min(5).required(),
    username: Joi.string.min(5).required(),
    isAdmin: Joi.boolean.required(),
    photo: Joi.image()
  })
  return JoiSchema.validate(user)
}

export default User
