const mongoose = require('mongoose');
const { DB_URL } = require('../config');
const URL=DB_URL

//console.log("DB_URL from connection.js:", DB_URL);
module.exports = async() => {
console.log("DB_URL",URL)
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,   
            useUnifiedTopology: true,
            //useCreateIndex: true
        });    
        console.log('Db Connected');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1);
    }
  };
 