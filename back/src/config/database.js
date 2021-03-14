const mongoose = require('mongoose');

    try {
        mongoose.connect(
            'mongodb://saito:Saito1502@mongo_checkydb:27017', 
            { useNewUrlParser: true }
            )
    } catch (error) {
        console.log(error);
    } 

module.exports = mongoose;
