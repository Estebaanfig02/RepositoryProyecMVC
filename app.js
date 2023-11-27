const express = require('express')
const app = express()
const path = require ("path")
const bodyParser = require("body-parser")
const mainRouter = require('./routers/main')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use (express.static( path.resolve(__dirname, 'public')));

app.get('/',mainRouter)
app.get('/about',mainRouter)


app.listen(3000,()=>{console.log('http://localhost:3000/')})