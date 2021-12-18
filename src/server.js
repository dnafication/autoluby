const express = require('express')
const routes = require('./routes')
const dotenv = require('dotenv')

require('./database')

dotenv.config()

const app = express()

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT, () => console.log('Server is running'))