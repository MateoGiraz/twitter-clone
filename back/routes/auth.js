import { Router } from 'express'
import asyncMiddleware from '../middleware/async.js'
import User from '../models/user.js'
import bcrypt  from 'bcrypt'
import Joi from 'joi'


const authRouter = Router()

authRouter.post(
  '/',
  asyncMiddleware(async (req, res) => {

    const { error } = validateAuth(req.body)
    if(error) return res.status(400).send(error)

    const {username, pass} = req.body

    const toCheckUser = await User.findOne({ username: username })
    if(!toCheckUser) return res.status(400).send('Invalid email or password')
      
    const isValid = await bcrypt.compare(pass, toCheckUser.pass)
    if(!isValid) return res.status(400).send('Invalid email or password')

    const token = toCheckUser.genereteAuthToken()
    res.send(token)

  })
)

const validateAuth = (req) => {
  const JoiSchema = new Joi.object({
    username: Joi.string().min(5).required(),
    pass: Joi.string().required()
  })
  return JoiSchema.validate(req)
}



export default authRouter