import { Router } from 'express'
import Tweet from '../models/tweet.js'
import asyncMiddleware from '../middleware/async.js'
import { validateTweet } from '../models/tweet.js'
import User from '../models/user.js'

const tweetRouter = Router()

tweetRouter.get(
  '/',
  asyncMiddleware(async (req, res) => {
    const tweets = await Tweet.find()
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

    const {data, image, user} = req.body

    const toCheckUser = await User.findOne({ username:user})
    console.log('got here')
    if (!toCheckUser) return res.status(400).send('User not registred')
    console.log('skiped send error')

    const tweet = new Tweet({
      data: data,
      image: image,
      user: user
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