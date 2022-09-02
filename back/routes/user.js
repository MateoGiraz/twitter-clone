import {Router} from 'express'
import asyncMiddleware from '../middleware/async'
import User from '../models/user'
const router = new Router()

router.get(
  asyncMiddleware(async (req, res) => {

  })
)

router.post(
  asyncMiddleware(async (req, res) => {
    
  })
)

router.put(
  asyncMiddleware(async (req, res) => {
    
  })
)

router.delete(
  asyncMiddleware(async (req, res) => {
    
  })
)