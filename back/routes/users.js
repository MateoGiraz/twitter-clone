import { application, Router } from 'express'
import asyncMiddleware from '../middleware/async.js'
import isAdmin from '../middleware/isAdmin.js'
import User from '../models/user.js'
import { validateUser } from '../models/user.js'
import bcrypt  from 'bcrypt'

const userRouter = Router()

userRouter.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

userRouter.get(
  '/',
  asyncMiddleware(async (req, res) => {
    const users = await User.find()
    res.send(users)
  })
)

userRouter.get(
  '/:user',
  asyncMiddleware(async (req, res) => {
    const users = await User.find({user: req.params.user })
    res.send(users)
  })
)

userRouter.post(
  '/',
  asyncMiddleware(async (req, res) => {

    const { error } = validateUser(req.body)
    if(error) return res.status(400).send(error)

    const toCheckUser = await User.findOne({ username: req.body.username })
    if(toCheckUser) return res.status(400).send('User already registred')

    const {username, name, photo, isAdmin, email, lname, pass} = req.body
  
    const user = new User({
      username: username,
      name: name,
      photo: photo,
      isAdmin: isAdmin,
      email: email,
      lname: lname,
      pass: 'notHashedYet'
    })

    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(pass, salt)
    user.pass = hashed

    await user.save()

    res.send({
      username: username,
      email: email
    })

  })
)

userRouter.put(
  '/:id',
  asyncMiddleware(async (req, res) => {
    const { error } = validateUser(req.body)
    if(error) return res.status(400).send(error)

    const {username, name, photo, isAdmin, email, lname, pass} = req.body

    const user = User.findById(id)

    user.set({
      username: username,
      name: name,
      photo: photo,
      isAdmin: isAdmin,
      email: email,
      lname: lname,
      pass: pass
    })

    const result = await user.save()
    res.send(result)
  })
)

userRouter.delete(
  '/:id',
  isAdmin,
  asyncMiddleware(async (req, res) => {
    const result = await User.deleteOne({_id: req.params.id })
    res.send(result)
  })
)

export default userRouter