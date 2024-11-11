const express = require("express");
require('dotenv').config()

const PORT = 3000
const dbUri = process.env.DB_URI

const app = express()

app.use(express.json())

mongoose.connect(dbUri)

app.get("/", (req, res) => {
    res.send("Hello World!")
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})