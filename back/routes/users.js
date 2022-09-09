import { Router } from 'express'
import asyncMiddleware from '../middleware/async.js'
import isAdmin from '../middleware/isAdmin.js'
import User from '../models/user.js'
import { validateUser } from '../models/user.js'

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
  '/:id',
  asyncMiddleware(async (req, res) => {
    const users = await User.find({_id: req.params.id })
    res.send(users)
  })
)

userRouter.post(
  '/',
  asyncMiddleware(async (req, res) => {
    const { error } = validateUser(req.body)
    if(error) return res.status(400).send(error)

    const {username, name, photo, isAdmin} = req.params

    const user = new User({
      username: username,
      name: name,
      photo: photo,
      isAdmin: isAdmin
    })

    const result = await user.save()
    res.send(result)
  })
)

userRouter.put(
  '/:id',
  asyncMiddleware(async (req, res) => {
    const { error } = validateUser(req.body)
    if(error) return res.status(400).send(error)

    const {id, username, name, photo, isAdmin} = req.params
    const user = User.findById(id)

    user.set({
      username: username,
      name: name,
      photo: photo,
      isAdmin: isAdmin
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