import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/users.js'
import tweetRouter from './routes/tweets.js'
import auth from './routes/auth.js'
import cors from 'cors'
import config from 'config'

const app = express()
app.use(cors())
app.use(express.json())

const dbURL = `mongodb+srv://twitter-admin:${config.get('dbPassword')}@cluster0.qkvfqe1.mongodb.net/twitter?retryWrites=true&w=majority`

if(!config.get('jwtPrivateKey')){
  console.log('FATAL ERROR - jwtPrivateKey not set')
  process.exit(1)
}

if(!config.get('dbPassword')){
  console.log('FATAL ERROR - dbPassword not set')
  process.exit(1)
}

app.use('/users', userRouter)
app.use('/tweets', tweetRouter)
app.use('/api/auth', auth)

mongoose
.connect(dbURL)
.then(() => console.log('Connected to the database...'))
.catch((err) => {
  console.log(`Could not connect to the database on error: ${err}`)
  process.exit(1)
})

const port = process.env.PORT || 2000
app.listen(port, () => console.log(`listening on port ${port}`))