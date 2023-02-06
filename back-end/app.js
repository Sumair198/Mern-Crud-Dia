const express = require('express')
const app = express()
const port = process.env.PORT || 12000
const router = require('./routes/routes')
const connectdb = require('./ConnectionDB/connectiondb')
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
const cors = require('cors')
connectdb()

app.use(cors())

// load router 
app.use('/', router)



app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})