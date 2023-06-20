const express = require('express');
const port = 2002;
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const db = require('./config/mongoose');


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', require('./routes/index') );



app.listen(port, function(err){
    if(err){
        console.log("error while connecting to server");
        return;
    }

    console.log("server connected on port:", port);
})