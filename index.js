const express = require('express') // express 모듈을 가져온다
const app = express()
const port = 3000
//mongodb+srv://jaedoo:<password>@boilerplate.iv5nf.mongodb.net/<dbname>?retryWrites=true&w=majority

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jaedoo:jaedoo@boilerplate.iv5nf.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Conected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))