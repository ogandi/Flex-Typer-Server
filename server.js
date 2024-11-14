require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 8080

const entryRouter = require('./routes/entry-router')
const geminiRouter = require('./routes/gemini-router')

app.use(express.json())
app.use(entryRouter)
app.use(geminiRouter)

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
})