const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()


app.listen(3000, () => {
   console.log("Server started on port 3000 !")
})
