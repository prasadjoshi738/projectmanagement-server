import express from 'express'
import mongoose, { model } from 'mongoose'
import cors from 'cors'
import db from './db.js';
import bodyParser from 'body-parser'

//import router from './routes/route.js';
import router from './routes/route.js'



const app = express()
const PORT=process.env.PORT ||3001;
app.use(cors())



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/',router)

db()















app.listen(PORT,(()=>{console.log(`server is successfully running on PORT: ${PORT}`)}))