const express = require('express')
const dotenv = require('dotenv')
const router = require('./routes/routes')
const db = require('./database/database')

const app = express()

dotenv.config()

app.use(express.json())
app.use(router)

app.listen(process.env.PORT, async () => {
    await db.sync()
    console.log('Server is running')
})