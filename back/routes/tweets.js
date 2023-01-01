import { Router } from 'express'
import Tweet from '../models/tweet.js'
import asyncMiddleware from '../middleware/async.js'
import { validateTweet } from '../models/tweet.js'
import User from '../models/user.js'
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import dotenv from 'dotenv'

dotenv.config()

const bucketRegion = process.env.S3_BUCKET_REGION
const bucketName = process.env.S3_BUCKET_NAME

const s3 = new S3Client({ region: bucketRegion })

const tweetRouter = Router()

tweetRouter.get(
  '/',
  asyncMiddleware(async (req, res) => {
    const tweets = await Tweet.find().sort('-_id')

   for(const tweet of tweets){
    const getObjectParams = {
      Bucket: bucketName,
      Key: tweet.code,
    }
    const command = new GetObjectCommand(getObjectParams)
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 })
    tweet.set({file: url})
    await tweet.save()
   }   

    res.send(tweets)
  })
)

tweetRouter.get(
  '/:username',
  asyncMiddleware(async (req, res) => {
    const tweets = await Tweet.find({ username: req.params.username})
    res.send(tweets)
  })
)

tweetRouter.post(
  '/',
  asyncMiddleware(async (req, res) => {
    const { error } = validateTweet(req.body)
    console.log(error)
    if(error) return res.status(400).send(error)

    const {data, image, user, code} = req.body

    const toCheckUser = await User.findOne({ username:user})
    if (!toCheckUser) return res.status(400).send('User not registred')

    const tweet = new Tweet({
      data: data,
      image: image,
      user: user,
      code: code,
      file: 'default'
    })

    const result = await tweet.save()
    res.send(result)
  })
)

tweetRouter.delete(
  '/:id',
  asyncMiddleware(async (req, res) => {
    const result = await Tweet.deleteOne({_id: req.params.id})
    res.send(result)
  })
)


export default tweetRouter