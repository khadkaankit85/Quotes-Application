const express = require("express")
const axios = require('axios')
const app = express()
const port = 3000
const quotesRouter = require("./Routes/advices")
const jokesRouter = require("./Routes/jokes")
const insultRouter = require("./Routes/insults")
const cors = require('cors')

app.use(cors())
app.use('/advices', quotesRouter)
app.use('/jokes', jokesRouter)
app.use('/insults', insultRouter)

app.get('/', (req, res) => {
    // console.log(req)
    res.send("Hello World")
})


app.listen(port, () => {
    console.log(` server is live on localhost:http://localhost:3000/`)
})