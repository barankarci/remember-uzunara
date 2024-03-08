const express = require("express")
const app = express()

app.get(`/`, (req, res) => {
    res.send(`Home Page`)
})



app.get(`/hakkimizda`, (req, res) => {
    res.sendFile(`src/hakkimizda.html`, { root: __dirname })
})







app.listen(3004);