import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/users.js'
import tweetRouter from './routes/tweets.js'

const app = express()
app.use(express.json())
app.use('/users', userRouter)
app.use('/tweets', tweetRouter)

mongoose
.connect('mongodb://localhost/twitter-clone')
.then(() => console.log('Connected to the database...'))
.catch((err) => {
  console.log(`Could not connect to the database on error: ${err}`)
  process.exit(1)
})

const port = process.env.PORT || 2000
app.listen(port, () => console.log(`listening on port ${port}`))