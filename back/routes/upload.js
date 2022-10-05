import multer from 'multer'
import { Router } from 'express'
import { S3Client } from "@aws-sdk/client-s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from 'dotenv'
import asyncMiddleware from '../middleware/async.js'
import sharp from 'sharp';
import Tweet from '../models/tweet.js'

dotenv.config()

const bucketRegion = process.env.S3_BUCKET_REGION
const bucketName = process.env.S3_BUCKET_NAME

const uploadRouter = Router()

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const s3 = new S3Client({ region: bucketRegion })

uploadRouter.post('/', upload.single('image'), asyncMiddleware(async (req, res) => {

  const buffer = await sharp(req.file.buffer).resize({height: 450, width: 450,fit: "contain"}).toBuffer()
  const {code} = req.body
  
  const params = {
    Bucket: bucketName,
    Key: code,
    Body: buffer,
    ContentType: req.file.mimetype
  }

  const command = new PutObjectCommand(params)
  await s3.send(command)

  res.send({})

}))



export default uploadRouter
