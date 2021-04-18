const mongoose = require('mongoose');

    try {
        mongoose.connect(
            'mongodb://saito:*****@mongo_checkydb:*****', 
            { useNewUrlParser: true }
            )
    } catch (error) {
        console.log(error);
    } 

module.exports = mongoose;
