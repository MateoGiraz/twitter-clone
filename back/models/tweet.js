import mongoose from "mongoose";
import Joi from "joi";

export const tweetSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  user: {
    type: String,
    required: true
  },
  code:{
    type: String,
    required: true
  },
  file:{
    type: String,
  }


})

const Tweet = mongoose.model('Tweet', tweetSchema)

export const validateTweet = (tweet) => {
  const JoiSchema = new Joi.object({
    data: Joi.string().min(1).max(200).required(),
    image: Joi.string(),
    user: Joi.string().min(5).required(),
    code: Joi.string(),
    file: Joi.string()
  })
  return JoiSchema.validate(tweet)
}

export default Tweet