import { Router } from 'express'
import Tweet from '../models/tweet.js'
import asyncMiddleware from '../middleware/async.js'
import { validateTweet } from '../models/tweet.js'
import isAdmin from '../middleware/isAdmin.js'

const tweetRouter = Router()

tweetRouter.get(
  '/',
  asyncMiddleware(async (req, res) => {
    const tweets = await Tweet.find()
    res.send(tweets)
  })
)

tweetRouter.get(
  '/:id',
  asyncMiddleware(async (req, res) => {
    const tweets = await Tweet.find({_id: req.params.id})
    res.send(tweets)
  })
)

tweetRouter.post(
  '/',
  asyncMiddleware(async (req, res) => {
    const { error } = validateTweet(req.body)
    if(error) return res.status(400).send(error)

    const {data, image} = req.params

    const tweet = new User({
      data: data,
      image: image
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