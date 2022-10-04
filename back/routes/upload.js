import multer from 'multer'
import { Router } from 'express'
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const uploadRouter = Router()

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const s3 = new S3Client({
  region: "us-east-1",
  credentials:{
    acccesKeyId: "",
    secretAccessKey: "",
  }
})

uploadRouter.post('/', upload.single('image'), async (req, res) => {

  const params = {
    Bucket: 'tweet-picture-upload',
    Key: req.file.originalname,
    Body: req.file.buffer,
    ContentType: req.file.mimetype
  }

  const command = new PutObjectCommand(params)
  await s3.send(command)
  res.send({})
})

export default uploadRouter
