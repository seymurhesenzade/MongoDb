const { error } = require('console');
const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config()

const DB_URL=process.env.DB_URL;
const PORT=process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<i><h1>Salam Azmp101</h1></i>')
})


mongoose.connect(DB_URL)
  .then(() => {
      console.log('Connected!')
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}, Base url is ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error);
  })