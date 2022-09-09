import mongoose from "mongoose";
import Joi from "joi";

export const tweetSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true
  },
  image: {
    type: Buffer
  }
})

const Tweet = mongoose.model('Tweet', tweetSchema)

export const validateTweet = (tweet) => {
  const JoiSchema = new Joi.object({
    data: Joi.string.min(5).max(200).required(),
    image: Joi.image()
  })
  return JoiSchema.validate(tweet)
}

export default Tweet