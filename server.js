import express from 'express'
import { PORT } from './config'
import connection from './db/dbConnection'
import Router from './router/post'
import cors from 'cors'


const app = express()

app.use(express.json())

app.use(cors())
app.use('/', Router)

app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => console.log(`server running on port ${PORT}`))
connection()