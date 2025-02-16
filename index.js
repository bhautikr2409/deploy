const express = require("express")
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.end("this is home")
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})