const express= require('express');
const morgan = require('morgan')
const app = express();
<<<<<<< HEAD
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/upload',{
    useNewUrlParser: true
})
=======

>>>>>>> 56f84fe9b03397a20a6b67261715e834b9f01ce7

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(require('./routes'));


app.listen(3000)