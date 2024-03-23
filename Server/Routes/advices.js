const express = require('express')
const router = express.Router()
const axios = require("axios")

router.get('/', async (req, res) => {
    try {
        let data = await axios.get("https://api.adviceslip.com/advice")

        console.log(data.data)
        res.send(data.data)
    }
    catch (e) {
        console.log(e)
        res.send("Server crashed")
    }
})

router.get('/:params', async (req, res) => {
    let slipId = req.params.params
    let advice = await fetch(`https://api.adviceslip.com/advice/${slipId}`)
    let data = await advice.json()
    res.send(data)


})

module.exports = router