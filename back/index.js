import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import ReductionController from 'controllers/reduction'

import bodyParser from 'body-parser'
import { createURLTable } from 'services/database'

var app = express()
app.use(cors())

createURLTable()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/v1/hash', ReductionController.hash)
app.get('/api/v1/unHash', ReductionController.unHash)
app.get('/api/v1/urls', ReductionController.getURLs)

app.listen(process.env.PORT || 5000, () => {})
