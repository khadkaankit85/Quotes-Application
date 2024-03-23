const express = require("express")
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const response = await axios.get("https://evilinsult.com/generate_insult.php?lang=en&type=json")
        // console.log(response.data)
        console.log(response.data)
        res.send(response.data)
    }
    catch (e) {
        console.log("error occured: " + e)
        res.send({ "insult": "Server Error Occurred" })
    }
})
module.exports = router