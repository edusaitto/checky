const mongoose = require('mongoose');

    try {
        mongoose.connect(
            'mongodb://saito:saitochecky@cluster0.zwpoj.mongodb.net/checky', 
            { useNewUrlParser: true }
            )
    } catch (error) {
        console.log(error);
    } 

module.exports = mongoose;
