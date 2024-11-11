const express = require("express");
const requestIp = require('request-ip');

const PORT = 3000;

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/get-my-ip", (req, res) => {
    const ip = requestIp.getClientIp(req)
    res.send({
        ip
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})