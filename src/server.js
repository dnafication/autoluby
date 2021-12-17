import express from 'express'
import dotenv from 'dotenv'
import { router } from './routes/routes'
import { db } from './database/database'

const app = express()

dotenv.config()

app.use(express.json())
app.use(router)

app.listen(process.env.PORT, async () => {
    await db.sync()
    console.log('Server is running')
})