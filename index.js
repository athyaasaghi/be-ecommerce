const express = require("express");
const app = express()
const port = 3001
const bodyParser = require("body-parser")
const produkRoute = require("./routes/produk")
const usersRoute = require("./routes/users")
const cors = require('cors')
// const db = require("./connection")

app.use(bodyParser.json())
app.use(cors())

app.use('/produk', produkRoute)


app.use('/users', usersRoute)

// app.get('/respon', (req, res)=> {
//     res.send('hello world');
// })


app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})

