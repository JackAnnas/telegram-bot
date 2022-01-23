require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const axios = require('axios')

const { TOKEN, SERVER_URL } = process.env
const TELEGRAM_API=`https://api.telegram.org/bots${TOKEN}`
const URI = `/webhook/${TOKEN}`
const WEBHOOK_URL = SERVER_URL+URI

const app = express()
app.use(bodyparser.json())

const init = async () => {
    const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`)
    console.log(res.data)
}

app.listen(process.env.PORT || 5000, async () => {
    console.log('app running on port', process.env.PORT || 5000)
     await init()
})