const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;



db.on('error', function(){
    console.log("error while connecting to db");
    return;
})

db.once('open', function(){
    console.log("Connected to DB");
    return;
})

module.exports = db;