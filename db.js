const mongoose = require('mongoose');
 const mongo_url=process.env.MONGO_URL;

 mongoose.connect('mongodb://localhost:27017/carrer_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 })

 .then(() => {
    console.log('MongoDB Connected..');
 }).catch((err) => {
    console.log('MongoDB connection Error:' , err);
 })
